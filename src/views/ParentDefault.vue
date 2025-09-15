<template>
  <div class="parent-default">
    <h2>父组件的默认内容</h2>
    <p>这是父路由下的默认显示内容</p>
    <p>点击 <router-link to="/parent/child">子组件</router-link> 查看嵌套路由效果</p>
  </div>
</template>

<script>
export default {
  name: 'ParentDefault'
}
</script>

<style scoped>
.parent-default {
  padding: 20px;
  border: 1px solid #eee;
  margin-top: 20px;
  background-color: #f9f9f9;
}
</style>