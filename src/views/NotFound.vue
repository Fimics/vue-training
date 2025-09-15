<template>
  <div class="not-found">
    <h1>404 - 页面未找到</h1>
    <p>您访问的路径 <strong>{{ $route.path }}</strong> 不存在</p>

    <div class="suggestions">
      <h3>您可以尝试以下页面：</h3>
      <ul>
        <li><router-link to="/">首页</router-link></li>
        <li><router-link to="/about">关于我们</router-link></li>
        <li><router-link to="/dashboard">仪表盘</router-link></li>
      </ul>
    </div>

    <button @click="goBack" class="back-button">返回上一页</button>
  </div>
</template>

<script>
export default {
  name: 'NotFound',
  methods: {
    goBack() {
      if (window.history.length > 1) {
        this.$router.go(-1)
      } else {
        this.$router.push('/')
      }
    }
  }
}
</script>

<style scoped>
.not-found {
  max-width: 600px;
  margin: 50px auto;
  padding: 30px;
  text-align: center;
  background-color: #f8f9fa;
  border-radius: 8px;
}

.not-found h1 {
  color: #dc3545;
}

.suggestions {
  margin: 30px 0;
  padding: 20px;
  background-color: white;
  border-radius: 5px;
}

.suggestions ul {
  list-style: none;
  padding: 0;
}

.suggestions li {
  margin: 10px 0;
}

.back-button {
  padding: 10px 20px;
  background-color: #6c757d;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.back-button:hover {
  background-color: #5a6268;
}
</style>