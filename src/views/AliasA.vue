<template>
  <div class="alias-a">
    <h1>别名示例</h1>

    <div class="content">
      <p>这个组件有两个访问路径：</p>
      <ul>
        <li><strong>/a</strong> - 原始路径</li>
        <li><strong>/b</strong> - 别名路径</li>
      </ul>

      <p>当前访问路径: <code>{{ $route.path }}</code></p>

      <div class="demo-box">
        <h3>路由信息</h3>
        <pre>{{ routeInfo }}</pre>
      </div>

      <router-link to="/a" class="link">访问 /a</router-link>
      <router-link to="/b" class="link">访问 /b</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AliasA',
  computed: {
    routeInfo() {
      return {
        path: this.$route.path,
        name: this.$route.name,
        matched: this.$route.matched.map(route => route.path),
        params: this.$route.params,
        query: this.$route.query
      }
    }
  },
  created() {
    console.log('AliasA 组件创建，当前路径:', this.$route.path)
  },
  beforeRouteUpdate(to, from, next) {
    console.log('路由更新:', from.path, '→', to.path)
    next()
  }
}
</script>

<style scoped>
.alias-a {
  max-width: 800px;
  margin: 0 auto;
  padding: 30px;
}

.content {
  background-color: #f8f9fa;
  padding: 20px;
  border-radius: 8px;
  margin-top: 20px;
}

.demo-box {
  background-color: white;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin: 20px 0;
}

pre {
  background-color: #f5f5f5;
  padding: 10px;
  border-radius: 4px;
  overflow-x: auto;
}

.link {
  display: inline-block;
  margin: 10px 10px 0 0;
  padding: 8px 15px;
  background-color: #42b983;
  color: white;
  text-decoration: none;
  border-radius: 4px;
}

.link:hover {
  background-color: #369f6b;
}
</style>