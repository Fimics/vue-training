import ApiService from './index'

// 产品服务API，继承自基础API服务
class ProductService extends ApiService {
    constructor() {
        super('/products') // 设置基础路径为/products
    }

    // 获取产品列表
    getProducts(params = {}) {
        return this.get('/', { params })
    }

    // 获取单个产品详情
    getProductById(id) {
        return this.get(`/${id}`)
    }

    // 创建新产品
    createProduct(productData) {
        return this.post('/', productData)
    }

    // 更新产品
    updateProduct(id, productData) {
        return this.put(`/${id}`, productData)
    }

    // 删除产品
    deleteProduct(id) {
        return this.delete(`/${id}`)
    }
}

// 导出单例实例
export default new ProductService()