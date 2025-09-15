// 定义路由配置数组
const routes = [
    // 首页路由
    {
        // 路由路径
        path: '/',
        // 路由名称
        name: 'Home',
        // 命名视图配置（多组件渲染）
        components: {
            // 默认视图（对应 <router-view>）
            default: () => import('@/views/Home.vue'),
            // 侧边栏视图（对应 <router-view name="sidebar">）
            sidebar: () => import('@/components/layout/AppSidebar.vue')
        },
        // 路由元信息
        meta: {
            // 页面标题
            title: '首页'
        }
    },

    // 关于页面路由
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

    // 登录页面路由
    {
        path: '/login',
        name: 'Login',
        // 使用复数 components 表示多视图
        components: {
            default: () => import('@/views/Login.vue'),
            // 强制添加侧边栏组件
            sidebar: () => import('@/components/layout/AppSidebar.vue')
        },
        meta: {
            title: '登录',
            // 仅允许未登录用户访问的标记
            guestOnly: true
        }
    },

    // 用户详情页路由（带参数）
    {
        path: '/user/:id',
        name: 'User',
        components: {
            default: () => import('@/views/User.vue'),
            sidebar: () => import('@/components/layout/AppSidebar.vue')
        },
        meta: {
            title: '用户详情',
            // 需要认证的标记
            requiresAuth: true
        },
        // 路由独享的守卫
        beforeEnter: (to, from, next) => {
            // 检查用户ID是否为数字
            if (/^\d+$/.test(to.params.id)) {
                // 验证通过，继续导航
                next()
            } else {
                // 验证失败，跳转到404页面
                next({ name: 'NotFound' })
            }
        }
    },

    // 嵌套路由（父路由）
    {
        path: '/parent',
        components: {
            default: () => import('@/views/Parent.vue'),
            sidebar: () => import('@/components/layout/AppSidebar.vue')
        },
        meta: {
            title: '父组件'
        },
        // 子路由配置
        children: [
            // 父路由默认子路由（空路径）
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
            // 子路由
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

    // 仪表盘路由（需要认证）
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

    // 重定向路由
    {
        path: '/redirect',
        // 重定向到首页
        redirect: '/'
    },

    // 别名路由
    {
        path: '/a',
        components: {
            default: () => import('@/views/AliasA.vue'),
            sidebar: () => import('@/components/layout/AppSidebar.vue')
        },
        // 设置别名路径 /b 也会访问相同内容
        alias: '/b',
        meta: {
            title: '别名示例'
        }
    },

    // 404 路由（捕获所有未匹配的路由）
    {
        // 通配符路径（匹配所有未定义的路由）
        path: '*',
        name: 'NotFound',
        components: {
            default: () => import('@/views/NotFound.vue'),
            // 强制添加侧边栏组件
            sidebar: () => import('@/components/layout/AppSidebar.vue')
        },
        meta: {
            title: '404 页面未找到'
        }
    }
]

// 导出路由配置
export default routes