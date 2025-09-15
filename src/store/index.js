// 导入Vue库
import Vue from 'vue'
// 导入Vuex库
import Vuex from 'vuex'

// 告诉Vue使用Vuex插件
Vue.use(Vuex)

// 创建并导出Vuex Store实例
export default new Vuex.Store({
    // 状态对象，存储应用的所有状态
    state: {
        // 存储用户信息，初始为null
        user: null,
        // 认证状态，初始为false
        isAuthenticated: false
    },

    // Getter方法，用于从state中派生出一些状态
    getters: {
        // 获取当前用户
        currentUser: state => state.user,
        // 获取认证状态
        isAuthenticated: state => state.isAuthenticated,
        // 检查是否有仪表盘访问权限
        hasDashboardAccess: (state, getters) => {
            // 需要已认证且用户角色为admin
            return getters.isAuthenticated && state.user.role === 'admin'
        }
    },

    // Mutation方法，用于修改state（必须是同步函数）
    mutations: {
        // 设置用户信息的mutation
        SET_USER(state, user) {
            // 更新用户信息
            state.user = user
            // 根据user是否存在设置认证状态
            state.isAuthenticated = !!user
        }
    },

    // Action方法，可以包含任意异步操作
    actions: {
        // 登录action，接收credentials参数
        login({ commit }, credentials) {
            // 返回Promise以便调用处可以处理异步结果
            return new Promise((resolve) => {
                // 模拟API调用延迟
                setTimeout(() => {
                    // 提交mutation设置用户信息
                    commit('SET_USER', {
                        id: 1,
                        name: credentials.username,
                        role: 'admin'
                    })
                    // 解析Promise
                    resolve()
                }, 500) // 模拟500ms网络延迟
            })
        },

        // 登出action
        logout({ commit }) {
            // 提交mutation清空用户信息
            commit('SET_USER', null)
        }
    }
})