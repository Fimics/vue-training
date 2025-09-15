import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        user: null,
        isAuthenticated: false
    },
    getters: {
        currentUser: state => state.user,
        isAuthenticated: state => state.isAuthenticated,
        hasDashboardAccess: (state, getters) => {
            return getters.isAuthenticated && state.user.role === 'admin'
        }
    },
    mutations: {
        SET_USER(state, user) {
            state.user = user
            state.isAuthenticated = !!user
        }
    },
    actions: {
        login({ commit }, credentials) {
            return new Promise((resolve) => {
                // 模拟API调用
                setTimeout(() => {
                    commit('SET_USER', {
                        id: 1,
                        name: credentials.username,
                        role: 'admin'
                    })
                    resolve()
                }, 500)
            })
        },
        logout({ commit }) {
            commit('SET_USER', null)
        }
    }
})