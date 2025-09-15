// 导入 Vue 核心库
import Vue from 'vue'
// 导入根组件
import App from './App.vue'
// 导入路由配置
import router from './router'
// 导入 Vuex store 配置
import store from './store'
// 导入 axios HTTP 客户端
import axios from 'axios'
// 导入 Element UI 的 Notification 组件
import { Notification } from 'element-ui'
// 导入自定义指令
import focusDirective from '@/directives/focus'
import demoDirective from '@/directives/demoDirective'

// 关闭生产环境提示
Vue.config.productionTip = false

// 全局注册一个名为 'button-counter' 的组件
Vue.component('button-counter', {
    // 组件数据
    data() {
        return {
            count: 0  // 计数器初始值
        }
    },
    // 组件模板
    template: `
      <button @click="count++">
        您点击了 {{ count }} 次 (全局组件)
      </button>
    `
})

// 全局混入 (mixin)
Vue.mixin({
    // 生命周期钩子 - 组件创建时
    created() {
        // 打印组件创建日志
        console.log('组件创建了:', this.$options.name)
    },
    // 混入方法
    methods: {
        // 自定义日志方法
        $log(message) {
            console.log(`[${this.$options.name}]:`, message)
        }
    }
})

// 配置 axios 基础URL
// 使用环境变量 VUE_APP_API_BASE_URL 或默认本地开发地址
axios.defaults.baseURL = process.env.VUE_APP_API_BASE_URL || 'http://localhost:3000/api'

// 请求拦截器
axios.interceptors.request.use(
    // 请求成功处理
    config => {
        // 可以在发送请求前做一些处理，例如添加token
        // const token = localStorage.getItem('token')
        // if (token) {
        //   config.headers.Authorization = `Bearer ${token}`
        // }
        return config  // 返回处理后的配置
    },
    // 请求错误处理
    error => {
        return Promise.reject(error)  // 拒绝请求
    }
)

// 响应拦截器
axios.interceptors.response.use(
    // 响应成功处理
    response => {
        return response.data  // 只返回响应数据部分
    },
    // 响应错误处理
    error => {
        // 统一错误处理
        if (error.response) {
            // 根据 HTTP 状态码处理不同错误
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
            // 请求已发出但没有响应
            console.error('无响应:', error.request)
        } else {
            // 请求配置错误
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

// 配置 axios 默认超时时间为 10 秒
axios.defaults.timeout = 10000

// 将 axios 挂载到 Vue 原型，使所有组件可通过 this.$http 访问
Vue.prototype.$http = axios
// 将 Element UI 的 Notification 挂载到 Vue 原型
Vue.prototype.$notify = Notification
// 注册全局自定义指令 v-focus
Vue.directive('focus', focusDirective)
// 注册全局自定义指令 v-demo
Vue.directive('demo', demoDirective)

// 注册全局过滤器
Vue.filter('capitalize', function(value) {
    if (!value) return '';  // 如果值为空，返回空字符串
    value = value.toString();  // 确保值是字符串
    return value.charAt(0).toUpperCase() + value.slice(1);  // 首字母大写 + 剩余部分
});

// 创建 Vue 根实例
new Vue({
    router,  // 注入路由
    store,   // 注入 Vuex store
    render: h => h(App),  // 渲染根组件
}).$mount('#app')  // 挂载到 DOM 元素 #app