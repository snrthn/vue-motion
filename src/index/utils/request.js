import axios from 'axios';
import { MessageBox } from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// 创建一个 axios 实例
const service = axios.create({
    // 请求基础URL，如果不想从环境取值，可在此直接定义
    baseURL: process.env.VUE_APP_BASE_API,
    // 跨域请求时是否发送Cookie
    withCredentials: true,
    // 请求超时时间
    timeout: 15000
})

// 请求拦截器
service.interceptors.request.use(
    config => {
        // 在请求发出之前需要处理的配置，例如请求头
        // config.headers['X-Token'] = 'XXXXX'
        return config
    },
    error => {
        // 处理请求发生错误
        return Promise.reject(error);
    }
)

// 响应拦截器
service.interceptors.response.use(
    response => {
        const code = response.status;
        if (code < 200 || code > 300) {
            MessageBox({
                title: '提示',
                message: response.message,
                type: 'warning'
            })
            return Promise.reject(response)
        } else {
            return response.data
        }
    },
    error => {
        let code = 0
        let errorMsg = null;
        try {
            code = error.response.data.status
        } catch (e) {
            if (error.toString().indexOf('Error: timeout') !== -1) {
                MessageBox({
                    title: '提示',
                    message: errorMsg || '网络请求超时',
                    type: 'warning'
                })
                return Promise.reject(error)
            }
        }
        
        try {
            errorMsg = error.response.data.message
        } catch (e) {
            errorMsg = null;
        }

        if (code) {
            if (code === 401) {
                MessageBox({
                    title: '提示',
                    message: errorMsg || '登录状态已过期',
                    type: 'warning'
                })
            } else if (code === 403) {
                MessageBox({
                    title: '提示',
                    message: errorMsg || '无权限访问',
                    type: 'warning'
                })
            } else {
                if (errorMsg !== undefined) {
                    MessageBox({
                        title: '提示',
                        message: errorMsg || error.message,
                        type: 'warning'
                    })
                }
            }
        } else {
            MessageBox({
                title: '提示',
                message: errorMsg || '接口请求失败',
                type: 'warning'
            })
        }
        return Promise.reject(error)
    }
)

export default service;