/**
 * @file 网络接口相关
 * @author yanghuning
 */

import request from '@/utils/request';

 // GET 方法
export const getRequest = (options) => {
    return request({
        method: 'GET',
        url: options.url,
        headers: options.headers,
        params: options.params
    })
}

 // POST 方法
export const postRequest = (options) => {
    return request({
        method: 'POST',
        url: options.url,
        headers: {
            ...options.headers,
            'Content-Type': 'application/json;charset=utf-8'
        },
        params: options.params,
        data: JSON.stringify(options.data)
    })
}

 // PUT 方法
export const putRequest = (options) => {
    return request({
        method: 'PUT',
        url: options.url,
        headers: {
            ...options.headers,
            'Content-Type': 'application/json;charset=utf-8'
        },
        params: options.params,
        data: JSON.stringify(options.data)
    })
}

 // DELETE 方法
export const deleteRequest = (options) => {
    return request({
        method: 'DELETE',
        url: options.url,
        headers: {
            ...options.headers,
            'Content-Type': 'application/json;charset=utf-8'
        },
        params: options.params,
        data: JSON.stringify(options.data)
    })
}

 // 文件上传 POST
export const uploadFile = (options) => {
    return request({
        method: 'POST',
        url: options.url,
        headers: options.headers,
        params: options.params,
        data: ((function (options) {
            // 将需要上传的文件对象处理成二进制流
            let data = options.data;
            let fd = new FormData();
            for (let key in data) {
                fd.append(key, data[key]);
            }
            return fd;
        })(options))
    })
}