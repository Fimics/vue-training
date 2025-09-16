export default function() {
    return store => {
        // 监听mutations
        store.subscribe((mutation) => {  // 移除了未使用的state参数
            if (process.env.NODE_ENV !== 'production') {
                console.groupCollapsed(`[Vuex] ${mutation.type}`)
                console.log('Payload:', mutation.payload)
                console.log('State after mutation:', store.state) // 使用store.state替代
                console.groupEnd()
            }
        })

        // 监听actions
        store.subscribeAction((action) => {  // 移除了未使用的state参数
            if (process.env.NODE_ENV !== 'production') {
                console.groupCollapsed(`[Vuex] Action ${action.type}`)
                console.log('Payload:', action.payload)
                console.groupEnd()
            }
        })
    }
}