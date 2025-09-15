<template>
  <!-- 子组件容器 -->
  <div class="child">
    <!-- 子组件标题 -->
    <h2>子组件内容</h2>

    <!-- 子组件描述 -->
    <p>这是嵌套在父路由中的子组件</p>

    <!-- 子组件内容区域 -->
    <div class="child-content">
      <!-- 显示当前路由路径 -->
      <p>当前路由路径: {{ $route.path }}</p>

      <!-- 显示父路由路径（通过路由匹配信息获取） -->
      <p>父路由路径: {{ $route.matched[0].path }}</p>

      <!-- 返回按钮 -->
      <button @click="goToParentDefault">返回父组件默认视图</button>
    </div>
  </div>
</template>

<script>
export default {
  // 组件名称
  name: 'ChildPage',

  // 组件方法
  methods: {
    // 返回父组件默认视图的方法
    goToParentDefault() {
      // 使用命名路由进行导航
      this.$router.push({ name: 'ParentDefault' })
    }
  },

  // 路由守卫 - 进入路由前
  beforeRouteEnter(to, from, next) {
    // 打印日志
    console.log('进入子路由前')
    // 继续导航
    next()
  },

  // 路由守卫 - 离开路由前
  beforeRouteLeave(to, from, next) {
    // 打印日志
    console.log('离开子路由')
    // 继续导航
    next()
  }
}
</script>

<style scoped>
/* 子组件主容器样式 */
.child {
  padding: 20px;         /* 内边距 */
  border: 1px solid #eee; /* 浅灰色边框 */
  margin-top: 20px;     /* 顶部外边距 */
  background-color: #f9f9f9; /* 浅灰色背景 */
}

/* 子组件内容区域样式 */
.child-content {
  margin-top: 15px;     /* 顶部外边距 */
  padding: 15px;        /* 内边距 */
  background-color: white; /* 白色背景 */
  border: 1px solid #ddd; /* 灰色边框 */
}
</style>