import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
import store from '@/store'


/**
 * 创建 VueRouter 实例，配置 history 模式
 * 定义 scrollBehavior 控制页面滚动位置
 * 设置全局路由守卫：
 * beforeEach: 认证检查
 * beforeResolve: 路由解析前
 * afterEach: 导航完成后设置页面标题
 */

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return { x: 0, y: 0 }
        }
    }
})

// 全局前置守卫
router.beforeEach((to, from, next) => {
    console.log(`Navigating from ${from.path} to ${to.path}`)

    // 检查是否需要认证
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (!store.getters.isAuthenticated) {
            next({
                path: '/login',
                query: { redirect: to.fullPath }
            })
        } else {
            next()
        }
    } else {
        next()
    }
})

// 全局解析守卫
router.beforeResolve((to, from, next) => {
    console.log('Resolving route...')
    next()
})

// 全局后置钩子
router.afterEach((to, from) => {
    console.log(from)
    console.log('Navigation completed')
    document.title = to.meta.title || 'Vue Router Demo'
})

export default router