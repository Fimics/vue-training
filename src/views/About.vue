<template>
  <!-- 关于页面主容器 -->
  <div class="about">
    <!-- 主标题 -->
    <h1>关于我们</h1>

    <!-- 项目描述 -->
    <p>这是一个展示 Vue Router 所有功能的演示项目</p>

    <!-- 功能列表标题 -->
    <h2>路由功能展示</h2>

    <!-- 功能列表 -->
    <ul>
      <li>基本路由</li>
      <li>动态路由</li>
      <li>嵌套路由</li>
      <li>命名视图</li>
      <li>路由守卫</li>
      <li>懒加载</li>
      <li>重定向和别名</li>
    </ul>

    <!-- 返回首页的链接 -->
    <router-link to="/" class="back-home">返回首页</router-link>
  </div>
</template>

<script>
export default {
  // 组件名称（用于调试和递归组件）
  name: 'AboutPage',

  // 组件生命周期钩子 - 创建时
  created() {
    // 打印组件创建日志
    console.log('About 组件创建')
  }
}
</script>

<style scoped>
/* 关于页面容器样式 */
.about {
  max-width: 800px;  /* 最大宽度限制 */
  margin: 0 auto;   /* 水平居中 */
  padding: 20px;    /* 内边距 */
}

/* 返回首页链接样式 */
.back-home {
  display: inline-block;  /* 行内块元素 */
  margin-top: 20px;      /* 顶部外边距 */
  padding: 10px 15px;    /* 内边距 */
  background-color: #42b983;  /* 绿色背景 */
  color: white;         /* 白色文字 */
  text-decoration: none;  /* 去除下划线 */
  bord