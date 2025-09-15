import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import { Notification } from 'element-ui'
import focusDirective from '@/directives/focus'
import demoDirective from '@/directives/demoDirective'

Vue.config.productionTip = false

// 全局注册组件
Vue.component('button-counter', {
    data() {
        return {
            count: 0
        }
    },
    template: `
      <button @click="count++">
        您点击了 {{ count }} 次 (全局组件)
      </button>
    `
})

Vue.mixin({
    created() {
        console.log('组件创建了:', this.$options.name)
    },
    methods: {
        $log(message) {
            console.log(`[${this.$options.name}]:`, message)
        }
    }
})

// 配置 axios 基础URL
axios.defaults.baseURL = process.env.VUE_APP_API_BASE_URL || 'http://localhost:3000/api'

// 请求拦截器
axios.interceptors.request.use(
    config => {
        // 可以在发送请求前做一些处理，例如添加token
        // const token = localStorage.getItem('token')
        // if (token) {
        //   config.headers.Authorization = `Bearer ${token}`
        // }
        return config
    },
    error => {
        return Promise.reject(error)
    }
)

// 响应拦截器
axios.interceptors.response.use(
    response => {
        return response.data
    },
    error => {
        // 统一错误处理
        if (error.response) {
            switch (error.response.status) {
                case 401:
                    console.error('未授权访问')
                    break
                case 404:
                    console.error('资源未找到')
                    break
                case 500:
                    console.error('服务器错误')
                    break
                default:
                    console.error('请求错误:', error.response.status)
            }
        } else if (error.request) {
            console.error('无响应:', error.request)
        } else {
            console.error('请求配置错误:', error.message)
        }

        // 返回一个标准化的错误对象
        return Promise.reject({
            response: {
                data: error.response?.data || {
                    message: error.message || '未知错误'
                },
                status: error.response?.status || 0
            },
            message: error.message || '请求失败'
        })
    }
)

// 配置超时时间
axios.defaults.timeout = 10000 // 10秒

// 将 axios 挂载到 Vue 原型
Vue.prototype.$http = axios
Vue.prototype.$notify = Notification
Vue.directive('focus', focusDirective)
Vue.directive('demo', demoDirective)

//全局过滤器
Vue.filter('capitalize', function(value) {
    if (!value) return '';  // 如果值为空，返回空字符串
    value = value.toString();  // 确保值是字符串
    return value.charAt(0).toUpperCase() + value.slice(1);  // 首字母大写 + 剩余部分
});

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')