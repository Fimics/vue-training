import productApi from '@/api/products'

// 产品模块状态
const state = {
    products: [],       // 产品列表
    selectedProduct: null, // 选中的产品
    pagination: {       // 分页信息
        page: 1,
        limit: 10,
        total: 0
    }
}

// 计算属性
const getters = {
    // 获取产品列表
    productList: state => state.products,

    // 获取选中的产品
    selectedProduct: state => state.selectedProduct,

    // 获取分页信息
    pagination: state => state.pagination,

    // 获取产品总数
    totalProducts: state => state.pagination.total,

    // 根据ID获取产品
    getProductById: state => id => {
        return state.products.find(product => product.id === id)
    }
}

// 同步变更状态的方法
const mutations = {
    // 设置产品列表
    SET_PRODUCTS(state, { products, pagination }) {
        state.products = products
        if (pagination) {
            state.pagination = { ...state.pagination, ...pagination }
        }
    },

    // 设置选中的产品
    SET_SELECTED_PRODUCT(state, product) {
        state.selectedProduct = product
    },

    // 添加新产品
    ADD_PRODUCT(state, product) {
        state.products.unshift(product)
        state.pagination.total += 1
    },

    // 更新产品
    UPDATE_PRODUCT(state, product) {
        const index = state.products.findIndex(p => p.id === product.id)
        if (index !== -1) {
            state.products.splice(index, 1, product)
        }
    },

    // 删除产品
    DELETE_PRODUCT(state, id) {
        const index = state.products.findIndex(p => p.id === id)
        if (index !== -1) {
            state.products.splice(index, 1)
            state.pagination.total -= 1
        }
    },

    // 重置产品状态
    RESET_PRODUCTS(state) {
        state.products = []
        state.selectedProduct = null
        state.pagination = {
            page: 1,
            limit: 10,
            total: 0
        }
    }
}

// 异步操作
const actions = {
    // 获取产品列表
    async fetchProducts({ commit, state }, params = {}) {
        const response = await productApi.getProducts({
            ...params,
            page: state.pagination.page,
            limit: state.pagination.limit
        })
        commit('SET_PRODUCTS', {
            products: response.data,
            pagination: response.pagination
        })
        return response.data
    },

    // 获取单个产品
    async fetchProductById({ commit }, id) {
        const product = await productApi.getProductById(id)
        commit('SET_SELECTED_PRODUCT', product)
        return product
    },

    // 创建产品
    async createProduct({ commit }, productData) {
        const product = await productApi.createProduct(productData)
        commit('ADD_PRODUCT', product)
        return product
    },

    // 更新产品
    async updateProduct({ commit }, { id, productData }) {
        const product = await productApi.updateProduct(id, productData)
        commit('UPDATE_PRODUCT', product)
        return product
    },

    // 删除产品
    async deleteProduct({ commit }, id) {
        await productApi.deleteProduct(id)
        commit('DELETE_PRODUCT', id)
    },

    // 重置产品状态
    resetProducts({ commit }) {
        commit('RESET_PRODUCTS')
    }
}

export default {
    namespaced: true, // 启用命名空间
    state,
    getters,
    mutations,
    actions
}