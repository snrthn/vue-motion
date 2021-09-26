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
        console.log("%c%s", "color: red; background: yellow; font-family: Micirosft Yahei; font-size: 24px;", " 入参明细：");
        console.log(config);

        return config;

    },
    error => {

        // 处理请求发生错误
        return Promise.reject(error);

    }
)

// 响应拦截器
service.interceptors.response.use(
    response => {

        // 输出日志
        console.log("%c%s", "color: green; background: yellow; font-family: Micirosft Yahei; font-size: 24px;", " 出参明细：");
        console.log(response);

        const code = response.status;
        if (code < 200 || code > 300) {

            console.log(response.message);

            return Promise.reject(response);
        } else {
            const busCode = response.data.code;
            if (busCode < 200 || busCode > 300) {

                console.log(response.data.message);

                return Promise.reject(response);
            } else {
                return response.data
            }
        }

    },
    error => {
        
        // 处理请求发生错误

        // 控制台输出日志
        console.log("%c%s", "color: white; background: red; font-family: Micirosft Yahei; font-size: 24px;", " 出参明细：");
        console.log(error);

        let code = 0;
        const errorMsg = error.response.data.message;

        try {
            code = error.response.data.status
        } catch (e) {
            if (error.toString().indexOf('Error: timeout') !== -1) {

                console.log(errorMsg || '网络请求超时');

                return Promise.reject(error)
            }
        }
        if (code) {
            if (code === 401) {

                console.log(errorMsg || '登录状态已过期');

            } else if (code === 403) {

                console.log(errorMsg || '无权限');

            } else {
                if (errorMsg !== undefined) {

                    console.log(errorMsg || error.message);

                }
            }
        } else {

            console.log(errorMsg || '接口请求失败');

        }
        return Promise.reject(error)
    }
)

export default service;