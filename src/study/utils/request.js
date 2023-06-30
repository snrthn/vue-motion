import axios from 'axios';
import Vue from 'vue';

import {Encrypt, Decrypt} from 'utils/encyption.js';

let vm = new Vue();

// 创建axios实例
const service = axios.create({
    // 请求基础URL，如果不想从环境取值，可在此直接定义
    // baseURL: process.env.VUE_APP_BASE_API,
    // 跨域请求时是否发送Cookie
    // withCredentials: true,
    // 请求超时时间
    // timeout: 15000
});

// request拦截器,在请求之前做一些处理
service.interceptors.request.use(
  config => {
    // 从Session取Token
    let token = sessionStorage.getItem('Admin-Token-GW') || '';
    // 在请求发出之前需要处理的配置，例如请求头
    // config.headers['X-Token'] = 'XXXXX'
    config.headers['Authorization'] = 'Bearer ' + token;
    // config.headers['Authorization'] = 'Bearer ' + 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ5YW5naHVuaW5nIiwiY3JlYXRlZCI6MTYzMDY1NDI1NTY2MX0.5t5rnzIe1PW9p7oLs4c0Y66YzWhGyH9_MimEuYg7POGdo-hvlKAeTffGg72wfxlG6DNQNT-kEpN6hlBfDiViMg';
    
    console.log("%c%s", "color: red; background: yellow; font-family: Micirosft Yahei; font-size: 24px;", " 入参明细：");
    let tempConfig = JSON.parse(JSON.stringify(config));
    if (tempConfig.params) tempConfig.params = JSON.parse(tempConfig.params);
    if (tempConfig.data) tempConfig.data = JSON.parse(tempConfig.data);
    console.log(tempConfig);

    let paramsObj = JSON.parse(config.params || '{}');
    let dataObj = JSON.parse(config.data || '{}');

    // 判断请求数据是否启动数据加密
    if (config.params && paramsObj.isEncry) {
      Reflect.deleteProperty(paramsObj, 'isEncry');
      config.params = {
        requestData: Encrypt(JSON.stringify(paramsObj))
      }
    }

    // 判断请求数据是否启动数据加密
    if (config.data && dataObj.isEncry) {
      Reflect.deleteProperty(dataObj, 'isEncry');
      config.data = {
        requestData: Encrypt(JSON.stringify(dataObj))
      }
    }

    return config;
  },
  error => {
    // 处理请求发生错误
    return Promise.reject(error);
  }
);

// response 拦截器,数据返回后进行一些处理
service.interceptors.response.use(
  response => {
    /**
     * code为非200是抛错 可结合自己业务进行修改
     */
    // 判断是否为加密数据
    if (typeof (response.data) !== 'object') {
      response.data = JSON.parse(Decrypt(response.data));
    }

    console.log("%c%s", "color: green; background: yellow; font-family: Micirosft Yahei; font-size: 24px;", " 出参明细：");
    console.log(response);

    const code = response.status;
    if (code < 200 || code > 300) {
      vm.Toast({
        title: '提示',
        message: response.message
      })
      return Promise.reject(response);
    } else {
      const busCode = response.data.code;
      if (busCode < 200 || busCode > 300) {
        if (response.data.message === 'Full authentication is required to access this resource') {
          window.location.hash = '/forbidden';
        }
        vm.Toast({
          title: '提示',
          message: response.data.message
        })
        return Promise.reject(response);
      } else {
        return response.data
      }
    }
  },
  error => {

    console.log("%c%s", "color: white; background: red; font-family: Micirosft Yahei; font-size: 24px;", " 出参明细：");
    console.log(error);

    let code = 0
    const errorMsg = error.response.data.message
    try {
      code = error.response.data.status
    } catch (e) {
      if (error.toString().indexOf('Error: timeout') !== -1) {
        vm.Toast({
          title: '提示',
          message: errorMsg || '网络请求超时'
        })
        return Promise.reject(error)
      }
    }
    if (code) {
      if (code === 401) {
        vm.Toast({
          title: '提示',
          message: errorMsg || '登录状态已过期'
        })
        router.push({ path: '/index' })
      } else if (code === 403) {
        router.push({ path: '/forbidden' })
      } else {
        if (errorMsg !== undefined) {
          vm.Toast({
            title: '提示',
            message: errorMsg || error.message
          })
        }
      }
    } else {
      vm.Toast({
        title: '提示',
        message: errorMsg || '接口请求失败'
      })
    }
    return Promise.reject(error)
  }
);

export default service;