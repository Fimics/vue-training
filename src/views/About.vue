<template>
  <div class="about">
    <h1>关于我们</h1>
    <p>这是一个展示 Vue Router 所有功能的演示项目</p>

    <h2>路由功能展示</h2>
    <ul>
      <li>基本路由</li>
      <li>动态路由</li>
      <li>嵌套路由</li>
      <li>命名视图</li>
      <li>路由守卫</li>
      <li>懒加载</li>
      <li>重定向和别名</li>
    </ul>

    <router-link to="/" class="back-home">返回首页</router-link>
  </div>
</template>

<script>
export default {
  name: 'AboutPage',
  created() {
    console.log('About 组件创建')
  }
}
</script>

<style scoped>
.about {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.back-home {
  display: inline-block;
  margin-top: 20px;
  padding: 10px 15px;
  background-color: #42b983;
  color: white;
  text-decoration: none;
  border-radius: 4px;
}
</style>