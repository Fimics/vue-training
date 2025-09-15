<template>
  <!-- 页脚容器，使用 app-footer 类名 -->
  <footer class="app-footer">
    <!-- 版权信息 -->
    <p>© 2025 Vue Router Demo</p>

    <!-- 显示当前路由路径 -->
    <p>当前路由: {{ $route.path }}</p>
  </footer>
</template>

<script>
export default {
  // 组件名称（用于调试和递归组件）
  name: 'AppFooter'
}
</script>

<style scoped>
/* 页脚样式（scoped 表示只作用于当前组件） */
.app-footer {
  background-color: #f5f5f5;  /* 浅灰色背景 */
  padding: 20px;             /* 内边距 */
  text-align: center;        /* 文本居中 */
  border-top: 1px solid #eaeaea;  /* 顶部边框 */
}
</style>