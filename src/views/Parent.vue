<template>
  <!-- 父组件容器 -->
  <div class="parent">
    <!-- 页面标题 -->
    <h1>父组件</h1>

    <!-- 子路由导航菜单 -->
    <nav>
      <!-- 默认子路由链接（使用命名路由） -->
      <router-link :to="{ name: 'ParentDefault' }">默认</router-link>

      <!-- 子组件路由链接（使用路径） -->
      <router-link to="/parent/child">子组件</router-link>
    </nav>

    <!-- 子路由出口（嵌套路由将在这里渲染） -->
    <router-view />
  </div>
</template>

<script>
export default {
  // 组件名称（用于调试和递归组件）
  name: 'ParentPage',

  // 组件方法
  methods: {
    // 返回上一页的方法
    goBack() {
      // 检查浏览器历史记录长度
      if (window.history.length > 1) {
        // 如果有历史记录，则返回上一页
        this.$router.go(-1)
      } else {
        // 如果没有历史记录（如直接访问该页面），则跳转到首页
        this.$router.push('/')
      }
    }
  }
}
</script>