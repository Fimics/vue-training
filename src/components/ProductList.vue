<template>
  <div class="product-list">
    <h2>Product List</h2>

    <!-- 加载状态 -->
    <div v-if="isLoading" class="loading">Loading...</div>

    <!-- 错误消息 -->
    <div v-if="error" class="error-message">{{ error }}</div>

    <!-- 产品列表 -->
    <ul v-if="products.length > 0">
      <li v-for="product in products" :key="product.id" class="product-item">
        <h3>{{ product.name }}</h3>
        <p>Price: ${{ product.price }}</p>
        <p>Stock: {{ product.stock }}</p>
        <button @click="selectProduct(product)">View Details</button>
      </li>
    </ul>

    <!-- 空状态 -->
    <div v-else class="empty-state">No products found</div>

    <!-- 分页控制 -->
    <div class="pagination">
      <button
          :disabled="pagination.page === 1"
          @click="changePage(pagination.page - 1)"
      >
        Previous
      </button>
      <span>Page {{ pagination.page }} of {{ totalPages }}</span>
      <button
          :disabled="pagination.page >= totalPages"
          @click="changePage(pagination.page + 1)"
      >
        Next
      </button>
    </div>

    <!-- 产品详情模态框 -->
    <div v-if="selectedProduct" class="modal">
      <div class="modal-content">
        <h3>{{ selectedProduct.name }}</h3>
        <p>{{ selectedProduct.description }}</p>
        <p>Price: ${{ selectedProduct.price }}</p>
        <p>Stock: {{ selectedProduct.stock }}</p>
        <button @click="selectedProduct = null">Close</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'

export default {
  name: 'ProductList',
  data() {
    return {
      selectedProduct: null
    }
  },
  computed: {
    // 映射Vuex状态
    ...mapState('products', ['products', 'pagination', 'isLoading', 'error']),
    ...mapGetters('products', ['totalProducts']),

    // 计算总页数
    totalPages() {
      return Math.ceil(this.totalProducts / this.pagination.limit)
    }
  },
  created() {
    // 组件创建时获取产品列表
    this.fetchProducts()
  },
  methods: {
    // 映射Vuex actions
    ...mapActions('products', ['fetchProducts']),

    // 选择产品
    selectProduct(product) {
      this.selectedProduct = product
    },

    // 改变页码
    changePage(page) {
      this.fetchProducts({ page })
    }
  }
}
</script>

<style scoped>
.product-list {
  max-width: 800px;
  margin: 0 auto;
}

.product-item {
  border: 1px solid #ddd;
  padding: 15px;
  margin-bottom: 10px;
  border-radius: 5px;
}

.loading, .empty-state {
  text-align: center;
  padding: 20px;
}

.error-message {
  color: red;
  padding: 10px;
  background-color: #ffeeee;
  border-radius: 5px;
  margin-bottom: 15px;
}

.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}

.pagination button {
  margin: 0 10px;
  padding: 5px 10px;
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  max-width: 500px;
}
</style>