<template>
  <!-- 仪表盘页面模板 -->
  <div class="dashboard">
    <!-- 主标题 -->
    <h1>仪表盘</h1>

    <!-- 显示欢迎信息，从Vuex store获取当前用户名称 -->
    <p>欢迎回来, {{ $store.getters.currentUser.name }}</p>
  </div>
</template>

<script>
// 导出DashboardPage组件
export default {
  // 组件名称（用于调试和递归组件）
  name: 'DashboardPage',

  /**
   * 路由进入守卫
   * @param {Route} to - 即将进入的路由对象
   * @param {Route} from - 当前导航正要离开的路由
   * @param {Function} next - 必须调用该方法来resolve这个钩子
   */
  beforeRouteEnter(to, from, next) {
    /**
     * 在组件实例被创建前执行
     * 这里无法访问组件实例(this)
     */

    // 调用next并传入回调函数，确保用户有权限访问仪表盘
    next(vm => {
      // 通过vm参数访问组件实例
      // 检查用户是否有仪表盘访问权限
      if (!vm.$store.getters.hasDashboardAccess) {
        // 如果没有权限，重定向到首页
        vm.$router.replace('/')
      }

      // 如果有权限，正常进入路由
    })
  }
}
</script>

<!--
  样式部分说明：
  这里没有添加样式，实际项目中可以根据需要添加
  例如：
  <style scoped>
  .dashboard {
    padding: 20px;
  }
  </style>
-->