import axios from 'axios';

// 创建 Axios 实例
const instance = axios.create({
    baseURL: '/api', // 设置基本请求路径
    timeout: 5000, // 设置请求超时时间
    // 其他 Axios 配置...
});

// 请求拦截器
instance.interceptors.request.use(
    config => {
        // 在发送请求之前可以进行一些处理
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

// 响应拦截器
instance.interceptors.response.use(
    response => {
        // 在响应之后可以进行一些处理
        return response.data;
    },
    error => {
        return Promise.reject(error);
    }
);

// 封装 GET 请求
export function get(url, params = {}) {
    return instance.get(url, {
        params,
    });
}

// 封装 POST 请求
export function post(url, data = {}) {
    return instance.post(url, data);
}

// 封装 DELETE 请求
export function del(url, params = {}) {
    return instance.delete(url, {
        params,
    });
}
