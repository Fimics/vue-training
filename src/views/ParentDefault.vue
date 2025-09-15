<template>
  <!-- 父组件默认内容容器 -->
  <div class="parent-default">
    <!-- 子标题 -->
    <h2>父组件的默认内容</h2>

    <!-- 描述文本 -->
    <p>这是父路由下的默认显示内容</p>

    <!-- 导航提示和链接 -->
    <p>点击
      <!-- 指向子组件的路由链接 -->
      <router-link to="/parent/child">子组件</router-link>
      查看嵌套路由效果
    </p>
  </div>
</template>

<script>
export default {
  // 组件名称（用于调试和递归组件）
  name: 'ParentDefault'
}
</script>

<style scoped>
/* 父组件默认内容样式 */
.parent-default {
  padding: 20px;         /* 内边距 */
  border: 1px solid #eee; /* 浅灰色边框 */
  margin-top: 20px;      /* 顶部外边距 */
  background-color: #f9f9f9; /* 浅灰色背景 */
}
</style>