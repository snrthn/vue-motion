import axios from 'axios';

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
        const res = response.data
        console.log(res)

        // 处理响应状态码
        if (res.code !== 200) {
            console.log(res.message);

            // 此处错误类型跟业务场景状态自由订制：如无权限、未登录等。
            if (res.code === 500) {
                console.log('服务器发生错误');
            }

            return Promise.reject(new Error(res.message || '网络错误'));

        } else {

            // 响应正常
            return res;

        }
    },
    error => {
        // 处理响应发生错误
        console.log(error.message);
        
        return Promise.reject(error);
    }
)

export default service;