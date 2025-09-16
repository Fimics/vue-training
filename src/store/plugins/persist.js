// Vuex持久化插件，用于将部分状态保存到localStorage
export default function() {
    return store => {
        // 初始化时从本地存储恢复状态
        const savedState = localStorage.getItem('vuex-persist')
        if (savedState) {
            try {
                const parsedState = JSON.parse(savedState)
                store.replaceState({
                    ...store.state,
                    auth: {
                        ...store.state.auth,
                        ...parsedState.auth
                    }
                })
            } catch (e) {
                console.error('Failed to parse saved state:', e)
            }
        }

        // 监听mutations，保存状态到本地存储
        store.subscribe((mutation, state) => {
            const stateToPersist = {
                auth: {
                    user: state.auth.user,
                    token: state.auth.token,
                    isAuthenticated: state.auth.isAuthenticated
                }
            }
            localStorage.setItem('vuex-persist', JSON.stringify(stateToPersist))
        })
    }
}