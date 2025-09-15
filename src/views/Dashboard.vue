<template>
  <div class="dashboard">
    <h1>仪表盘</h1>
    <p>欢迎回来, {{ $store.getters.currentUser.name }}</p>
  </div>
</template>

<script>
export default {
  name: 'DashboardPage',
  beforeRouteEnter(to, from, next) {
    // 确保用户有权限访问仪表盘
    next(vm => {
      if (!vm.$store.getters.hasDashboardAccess) {
        vm.$router.replace('/')
      }
    })
  }
}
</script>