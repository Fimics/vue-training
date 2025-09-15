<template>
  <header>
    <nav>
      <router-link to="/">首页</router-link>
      <router-link to="/about">关于</router-link>
      <router-link :to="{ name: 'User', params: { id: 123 }}">用户123</router-link>
      <router-link :to="{ path: '/user', query: { name: 'vue' }}">用户查询</router-link>
      <router-link to="/parent">父组件</router-link>
      <router-link to="/dashboard">仪表盘</router-link>
      <router-link to="/a">别名A</router-link>
      <router-link to="/b">别名B</router-link>

      <template v-if="$store.getters.isAuthenticated">
        <button @click="logout">退出</button>
      </template>
      <template v-else>
        <router-link to="/login">登录</router-link>
      </template>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
  methods: {
    logout() {
      this.$store.dispatch('logout')
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped>
header {
  background-color: #f8f9fa;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 1000;
}

nav {
  max-width: 1200px;
  margin: 0 auto;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
}

nav a, nav button {
  color: #2c3e50;
  text-decoration: none;
  padding: 8px 12px;
  border-radius: 4px;
  margin: 0 10px;
  transition: all 0.3s ease;
}

nav a.router-link-exact-active {
  background-color: #42b983;
  color: white;
}

nav a:hover:not(.router-link-exact-active),
nav button:hover {
  background-color: #e9ecef;
}

nav button {
  border: 1px solid #dc3545;
  background-color: transparent;
  color: #dc3545;
  cursor: pointer;
}

nav button:hover {
  background-color: #dc3545;
  color: white;
}
</style>