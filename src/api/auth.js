import ApiService from './index'

// 认证服务API，继承自基础API服务
class AuthService extends ApiService {
    constructor() {
        super('/auth') // 设置基础路径为/auth
    }

    // 登录方法
    login(credentials) {
        return this.post('/login', credentials)
    }

    // 登出方法
    logout() {
        return this.post('/logout')
    }

    // 获取用户信息
    getUserProfile() {
        return this.get('/profile')
    }
}

// 导出单例实例
export default new AuthService()