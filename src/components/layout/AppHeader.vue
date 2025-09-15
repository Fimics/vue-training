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