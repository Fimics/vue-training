import Vue from 'vue'
import Vuex from 'vuex'
import auth from '@/store/modules/auth'
import products from '@/store/modules/products'
import logger from '@/store/plugins/logger'
import persist from '@/store/plugins/persist'

// 使用Vuex插件
Vue.use(Vuex)

// 创建并导出Vuex Store实例
export default new Vuex.Store({
    // 全局状态
    state: {
        appName: 'Vuex Demo App', // 应用名称
        isLoading: false,         // 全局加载状态
        error: null               // 全局错误信息
    },

    // 计算属性
    getters: {
        // 获取应用名称
        appName: state => state.appName,

        // 获取加载状态
        isLoading: state => state.isLoading,

        // 获取错误信息
        error: state => state.error,

        // 带参数的计算属性
        appNameWithVersion: state => version => `${state.appName} v${version}`
    },

    // 同步变更状态的方法
    mutations: {
        // 设置加载状态
        SET_LOADING(state, isLoading) {
            state.isLoading = isLoading
        },

        // 设置错误信息
        SET_ERROR(state, error) {
            state.error = error
        },

        // 清除错误信息
        CLEAR_ERROR(state) {
            state.error = null
        }
    },

    // 异步操作
    actions: {
        // 清除错误
        clearError({ commit }) {
            commit('CLEAR_ERROR')
        },

        // 设置错误
        setError({ commit }, error) {
            commit('SET_ERROR', error)
            // 5秒后自动清除错误
            setTimeout(() => {
                commit('CLEAR_ERROR')
            }, 5000)
        }
    },

    // 模块
    modules: {
        auth,     // 认证模块
        products  // 产品模块
    },

    // 插件
    plugins: [logger(), persist()],

    // 严格模式（开发环境启用）
    strict: process.env.NODE_ENV !== 'production'
})