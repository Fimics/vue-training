// 导入认证API服务（使用@别名指向src/api目录）
import authApi from '@/api/auth'

/**
 * 模块状态定义
 * 存储认证相关的状态数据
 */
const state = {
    user: null,          // 当前登录用户信息对象
    token: null,         // 认证令牌(JWT等)
    isAuthenticated: false // 认证状态标识
}

/**
 * 计算属性(getters)
 * 基于state派生的计算属性，方便组件获取特定格式的数据
 */
const getters = {
    // 获取当前用户对象
    currentUser: state => state.user,

    // 获取认证令牌
    token: state => state.token,

    // 获取认证状态
    isAuthenticated: state => state.isAuthenticated,

    // 获取用户名，未登录时返回'Guest'
    username: state => state.user?.username || 'Guest',

    // 检查用户是否拥有指定角色(高阶函数)
    hasRole: state => role => {
        // 检查用户角色数组是否包含指定角色
        return state.user?.roles?.includes(role) || false
    }
}

/**
 * 同步变更方法(mutations)
 * 唯一修改state的方式，必须是同步函数
 */
const mutations = {
    // 设置认证信息
    SET_AUTH(state, { user, token }) {
        state.user = user         // 设置用户信息
        state.token = token       // 设置认证令牌
        state.isAuthenticated = true // 设置认证状态为true
    },

    // 清除认证信息
    CLEAR_AUTH(state) {
        state.user = null         // 清空用户信息
        state.token = null        // 清空认证令牌
        state.isAuthenticated = false // 设置认证状态为false
    },

    // 更新用户信息(部分更新)
    UPDATE_USER(state, user) {
        // 使用对象展开运算符合并用户信息
        state.user = { ...state.user, ...user }
    }
}

/**
 * 异步操作方法(actions)
 * 处理业务逻辑，可以包含异步操作，最后提交mutation修改state
 */
const actions = {
    // 登录操作
    async login({ commit }, credentials) {
        try {
            // 调用API登录接口
            const response = await authApi.login(credentials)

            // 提交SET_AUTH mutation保存认证信息
            commit('SET_AUTH', {
                user: response.user,
                token: response.token
            })

            // 将token存储到localStorage
            localStorage.setItem('token', response.token)

            // 返回用户信息
            return response.user
        } catch (error) {
            // 登录失败时清除认证信息
            commit('CLEAR_AUTH')
            localStorage.removeItem('token')

            // 抛出错误供调用方处理
            throw error
        }
    },

    // 登出操作
    async logout({ commit }) {
        try {
            // 调用API登出接口
            await authApi.logout()
        } finally {
            // 无论API调用成功与否，都清除本地认证信息
            commit('CLEAR_AUTH')
            localStorage.removeItem('token')
        }
    },

    // 检查认证状态（用于页面刷新后恢复认证状态）
    async checkAuth({ commit, state }) {
        // 从localStorage获取token
        const token = localStorage.getItem('token')

        // 如果存在token但当前未认证，则验证token有效性
        if (token && !state.isAuthenticated) {
            try {
                // 调用API获取用户信息
                const user = await authApi.getUserProfile()

                // 提交SET_AUTH mutation恢复认证状态
                commit('SET_AUTH', {
                    user,
                    token
                })
            } catch (error) {
                // token无效时清除认证信息
                commit('CLEAR_AUTH')
                localStorage.removeItem('token')
            }
        }
    },

    // 更新用户资料
    async updateProfile({ commit }, userData) {
        // 调用API更新用户信息
        const response = await authApi.updateProfile(userData)

        // 提交UPDATE_USER mutation更新state中的用户信息
        commit('UPDATE_USER', response.user)

        // 返回更新后的用户信息
        return response.user
    }
}

/**
 * 导出模块配置
 */
export default {
    namespaced: true, // 启用命名空间，防止模块间命名冲突
    state,           // 状态对象
    getters,         // 计算属性
    mutations,       // 同步变更方法
    actions          // 异步操作方法
}