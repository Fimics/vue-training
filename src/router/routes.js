
// 定义所有路由配置
// 使用动态导入实现路由懒加载
// 使用 meta 字段存储路由元信息
// 包含各种路由功能：
// 动态路由 (/user/:id)
// 嵌套路由 (/parent/child)
// 命名视图 (/dashboard)
// 重定向 (/redirect)
// 别名 (/a 和 /b)
// 404 页面 (*)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('@/views/Home.vue'),
        meta: {
            title: '首页'
        }
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('@/views/About.vue'),
        meta: {
            title: '关于我们'
        }
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('@/views/Login.vue'),
        meta: {
            title: '登录',
            guestOnly: true
        }
    },
    {
        path: '/user/:id',
        name: 'User',
        component: () => import('@/views/User.vue'),
        meta: {
            title: '用户详情',
            requiresAuth: true
        },
        beforeEnter: (to, from, next) => {
            // 验证用户ID是否为数字
            if (/^\d+$/.test(to.params.id)) {
                next()
            } else {
                next({ name: 'NotFound' })
            }
        }
    },
    {
        path: '/parent',
        component: () => import('@/views/Parent.vue'),
        meta: {
            title: '父组件'
        },
        children: [
            {
                path: '',
                name: 'ParentDefault',
                component: () => import('@/views/ParentDefault.vue'),
                meta: {
                    title: '父组件默认'
                }
            },
            {
                path: 'child',
                name: 'Child',
                component: () => import('@/views/Child.vue'),
                meta: {
                    title: '子组件'
                }
            }
        ]
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        components: {
            default: () => import('@/views/Dashboard.vue'),
            sidebar: () => import('@/components/layout/AppSidebar.vue')
        },
        meta: {
            title: '仪表盘',
            requiresAuth: true
        }
    },
    {
        path: '/redirect',
        redirect: '/'
    },
    {
        path: '/a',
        component: () => import('@/views/AliasA.vue'),
        alias: '/b',
        meta: {
            title: '别名示例'
        }
    },
    {
        path: '*',
        name: 'NotFound',
        component: () => import('@/views/NotFound.vue'),
        meta: {
            title: '404 页面未找到'
        }
    }
]

export default routes