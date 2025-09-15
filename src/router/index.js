// 导入 Vue 库  主路由配置
import Vue from 'vue'
// 导入 VueRouter 库
import VueRouter from 'vue-router'
// 导入路由配置数组
import routes from './routes'
// 导入 Vuex store
import store from '@/store'

/**
 * 创建 VueRouter 实例，配置 history 模式
 * 定义 scrollBehavior 控制页面滚动位置
 * 设置全局路由守卫：
 * beforeEach: 认证检查
 * beforeResolve: 路由解析前
 * afterEach: 导航完成后设置页面标题
 */

// 告诉 Vue 使用 VueRouter 插件
Vue.use(VueRouter)

// 创建 VueRouter 实例
const router = new VueRouter({
    // 使用 HTML5 History 模式（需要服务器配置支持）
    mode: 'history',
    // 应用的基础路径，从环境变量中获取
    base: process.env.BASE_URL,
    // 路由配置数组
    routes,
    // 控制页面滚动行为的函数
    scrollBehavior(to, from, savedPosition) {
        // 如果有保存的位置（如浏览器前进/后退），则恢复到该位置
        if (savedPosition) {
            return savedPosition
        } else {
            // 否则滚动到页面顶部
            return { x: 0, y: 0 }
        }
    }
})

// 全局前置守卫 - 在路由跳转前执行
router.beforeEach((to, from, next) => {
    // 打印导航日志
    console.log(`Navigating from ${from.path} to ${to.path}`)

    // 检查路由是否需要认证（通过 meta.requiresAuth 标记）
    if (to.matched.some(record => record.meta.requiresAuth)) {
        // 如果路由需要认证但用户未登录
        if (!store.getters.isAuthenticated) {
            // 重定向到登录页，并保存原始目标路径以便登录后跳转
            next({
                path: '/login',
                query: { redirect: to.fullPath }
            })
        } else {
            // 已认证，继续导航
            next()
        }
    } else {
        // 不需要认证的路由，直接继续导航
        next()
    }
})

// 全局解析守卫 - 在所有组件内守卫和异步路由组件被解析之后调用
router.beforeResolve((to, from, next) => {
    // 打印路由解析日志
    console.log('Resolving route...')
    // 继续导航
    next()
})

// 全局后置钩子 - 导航完成后调用（没有 next 参数）
router.afterEach((to, from) => {
    // 打印来源路由信息
    console.log(from)
    // 打印导航完成日志
    console.log('Navigation completed')
    // 设置页面标题，优先使用路由元信息中的 title，否则使用默认标题
    document.title = to.meta.title || 'Vue Router Demo'
})

// 导出配置好的 router 实例
export default router