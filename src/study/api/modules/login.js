/**
 * @files 登录相关接口
 * @author yanghuning 2021-09-23
 */

import { postRequest, getRequest } from 'api';


/**
 * 企业微信自动登录
 */
 export let sysLogin = (options = {}) => {
    return postRequest({
        // 请求URL
        url: 'auth/login',
        // URL请求参数
        params: options.params,
        // 请求体参数
        data: options.data
    })
}


/**
 * 企业微信自动登录
 */
export let autoLogin = (options = {}) => {
    return getRequest({
        // 请求URL
        url: 'auth/wxlogin',
        // URL请求参数
        params: options.params,
        // 请求体参数
        data: options.data
    })
}