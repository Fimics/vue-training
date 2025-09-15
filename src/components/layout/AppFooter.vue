<template>
  <footer class="app-footer">
    <p>© 2025 Vue Router Demo</p>
    <p>当前路由: {{ $route.path }}</p>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter'
}
</script>

<style scoped>
.app-footer {
  background-color: #f5f5f5;
  padding: 20px;
  text-align: center;
  border-top: 1px solid #eaeaea;
}
</style>