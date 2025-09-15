<template>
  <div class="login">
    <h1>登录</h1>
    <form @submit.prevent="login">
      <input v-model="username" placeholder="用户名">
      <input v-model="password" type="password" placeholder="密码">
      <button type="submit">登录</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'LoginPage',
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    login() {
      this.$store.dispatch('login', {
        username: this.username,
        password: this.password
      }).then(() => {
        const redirect = this.$route.query.redirect || '/'
        this.$router.push(redirect)
      })
    }
  },
  beforeRouteEnter(to, from, next) {
    // 如果已登录，重定向到首页
    next(vm => {
      if (vm.$store.getters.isAuthenticated) {
        vm.$router.push('/')
      }
    })
  }
}
</script>