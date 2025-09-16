// 基础API服务类，封装通用的HTTP请求方法
import axios from 'axios'

class ApiService {
    constructor(baseURL) {
        // 创建axios实例
        this.http = axios.create({
            baseURL: baseURL || process.env.VUE_APP_API_BASE_URL || '',
            timeout: 10000, // 请求超时时间
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })

        // 请求拦截器
        this.http.interceptors.request.use(
            config => {
                // 在发送请求之前做些什么
                const token = localStorage.getItem('token')
                if (token) {
                    config.headers.Authorization = `Bearer ${token}`
                }
                return config
            },
            error => {
                // 对请求错误做些什么
                return Promise.reject(error)
            }
        )

        // 响应拦截器
        this.http.interceptors.response.use(
            response => {
                // 对响应数据做点什么
                return response.data
            },
            error => {
                // 对响应错误做点什么
                if (error.response) {
                    switch (error.response.status) {
                        case 401:
                            console.error('未授权，请重新登录')
                            break
                        case 403:
                            console.error('拒绝访问')
                            break
                        case 404:
                            console.error('资源不存在')
                            break
                        case 500:
                            console.error('服务器错误')
                            break
                    }
                }
                return Promise.reject(error)
            }
        )
    }

    // GET请求
    get(url, params = {}) {
        return this.http.get(url, { params })
    }

    // POST请求
    post(url, data = {}) {
        return this.http.post(url, data)
    }

    // PUT请求
    put(url, data = {}) {
        return this.http.put(url, data)
    }

    // DELETE请求
    delete(url, params = {}) {
        return this.http.delete(url, { params })
    }
}

export default ApiService