<template>
  <!-- 登录页面容器 -->
  <div class="login">
    <!-- 页面标题 -->
    <h1>登录</h1>

    <!-- 登录表单，阻止默认提交行为 -->
    <form @submit.prevent="login">
      <!-- 用户名输入框，双向绑定到username -->
      <input v-model="username" placeholder="用户名">

      <!-- 密码输入框，类型为password，双向绑定到password -->
      <input v-model="password" type="password" placeholder="密码">

      <!-- 提交按钮 -->
      <button type="submit">登录</button>
    </form>
  </div>
</template>

<script>
export default {
  // 组件名称（用于调试和递归组件）
  name: 'LoginPage',

  // 组件数据
  data() {
    return {
      // 用户名数据属性
      username: '',
      // 密码数据属性
      password: ''
    }
  },

  // 组件方法
  methods: {
    // 登录方法
    login() {
      // 调用Vuex的login action，传递用户名和密码
      this.$store.dispatch('login', {
        username: this.username,
        password: this.password
      }).then(() => {
        // 登录成功后，获取重定向路径（从路由查询参数获取）或默认首页
        const redirect = this.$route.query.redirect || '/'
        // 跳转到目标页面
        this.$router.push(redirect)
      })
    }
  },

  // 路由进入前的守卫
  beforeRouteEnter(to, from, next) {
    // 在可以访问组件实例前的回调
    next(vm => {
      // 检查用户是否已认证
      if (vm.$store.getters.isAuthenticated) {
        // 如果已登录，重定向到首页
        vm.$router.push('/')
      }
    })
  }
}
</script>