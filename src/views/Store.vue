<template>
  <div id="store">
    <!-- 导航栏 -->
    <nav>
      <router-link to="/products">Products</router-link>
      <router-link to="/counter">counter</router-link>
      <template v-if="isAuthenticated">
        <span>Welcome, {{ username }}</span>
        <button @click="logout">Logout</button>
      </template>
      <router-link v-else to="/loginForm">LoginForm</router-link>
    </nav>

    <!-- 全局错误提示 -->
    <div v-if="error" class="global-error">
      {{ error }}
      <button @click="clearError">Dismiss</button>
    </div>

    <!-- 路由视图 -->
    <router-view/>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'

export default {
  name: 'StorePage',
  computed: {
    // 映射全局状态
    ...mapState(['error']),

    // 映射认证模块的状态和getters
    ...mapState('auth', ['isAuthenticated']),
    ...mapGetters('auth', ['username'])
  },
  created() {
    // 组件创建时检查认证状态
    this.checkAuth()
  },
  methods: {
    // 映射认证模块的actions
    ...mapActions('auth', ['logout', 'checkAuth']),

    // 映射全局actions
    ...mapActions(['clearError'])
  }
}
</script>

<style>
#store {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

nav {
  padding: 10px 0;
  margin-bottom: 20px;
  border-bottom: 1px solid #ddd;
}

nav a, nav button {
  margin-right: 10px;
}

.global-error {
  padding: 10px;
  background-color: #ffebee;
  color: #c62828;
  margin-bottom: 20px;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.global-error button {
  background: none;
  border: none;
  color: #c62828;
  cursor: pointer;
}
</style>