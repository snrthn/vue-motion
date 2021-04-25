/**
 * 用户信息相关方法封装，注册即可全局调用，无需引入
 */
import { postRequest } from 'api';

/**
 * 获取用户信息（测试）
 */

export let getUserInfo = (options) => {
    return postRequest({
        // 请求URL
        url: '/account/userinfo',
        // URL请求参数
        params: options.params,
        // 请求体参数
        data: options.data
    })
}