const routes = [
    {
        path: '/',
        name: 'Home',
        components: {
            default: () => import('@/views/Home.vue'),
            sidebar: () => import('@/components/layout/AppSidebar.vue')
        },
        meta: {
            title: '首页'
        }
    },
    {
        path: '/about',
        name: 'About',
        components: {
            default: () => import('@/views/About.vue'),
            sidebar: () => import('@/components/layout/AppSidebar.vue')
        },
        meta: {
            title: '关于我们'
        }
    },
    {
        path: '/login',
        name: 'Login',
        components: {  // 改为复数 components
            default: () => import('@/views/Login.vue'),
            sidebar: () => import('@/components/layout/AppSidebar.vue')  // 强制添加侧边栏
        },
        meta: {
            title: '登录',
            guestOnly: true
        }
    },
    {
        path: '/user/:id',
        name: 'User',
        components: {
            default: () => import('@/views/User.vue'),
            sidebar: () => import('@/components/layout/AppSidebar.vue')
        },
        meta: {
            title: '用户详情',
            requiresAuth: true
        },
        beforeEnter: (to, from, next) => {
            if (/^\d+$/.test(to.params.id)) {
                next()
            } else {
                next({ name: 'NotFound' })
            }
        }
    },
    {
        path: '/parent',
        components: {
            default: () => import('@/views/Parent.vue'),
            sidebar: () => import('@/components/layout/AppSidebar.vue')
        },
        meta: {
            title: '父组件'
        },
        children: [
            {
                path: '',
                name: 'ParentDefault',
                components: {
                    default: () => import('@/views/ParentDefault.vue'),
                    sidebar: () => import('@/components/layout/AppSidebar.vue')
                },
                meta: {
                    title: '父组件默认'
                }
            },
            {
                path: 'child',
                name: 'Child',
                components: {
                    default: () => import('@/views/Child.vue'),
                    sidebar: () => import('@/components/layout/AppSidebar.vue')
                },
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
        components: {
            default: () => import('@/views/AliasA.vue'),
            sidebar: () => import('@/components/layout/AppSidebar.vue')
        },
        alias: '/b',
        meta: {
            title: '别名示例'
        }
    },
    {
        path: '*',
        name: 'NotFound',
        components: {  // 改为复数 components
            default: () => import('@/views/NotFound.vue'),
            sidebar: () => import('@/components/layout/AppSidebar.vue')  // 强制添加侧边栏
        },
        meta: {
            title: '404 页面未找到'
        }
    }
]

export default routes