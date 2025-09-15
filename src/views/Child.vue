<template>
  <div class="child">
    <h2>子组件内容</h2>
    <p>这是嵌套在父路由中的子组件</p>

    <div class="child-content">
      <p>当前路由路径: {{ $route.path }}</p>
      <p>父路由路径: {{ $route.matched[0].path }}</p>

      <button @click="goToParentDefault">返回父组件默认视图</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Child',
  methods: {
    goToParentDefault() {
      this.$router.push({ name: 'ParentDefault' })
    }
  },
  beforeRouteEnter(to, from, next) {
    console.log('进入子路由前')
    next()
  },
  beforeRouteLeave(to, from, next) {
    console.log('离开子路由')
    next()
  }
}
</script>

<style scoped>
.child {
  padding: 20px;
  border: 1px solid #eee;
  margin-top: 20px;
  background-color: #f9f9f9;
}

.child-content {
  margin-top: 15px;
  padding: 15px;
  background-color: white;
  border: 1px solid #ddd;
}
</style>s