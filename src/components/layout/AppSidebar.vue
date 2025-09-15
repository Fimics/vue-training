<template>
  <aside class="app-sidebar">
    <h3>导航菜单</h3>
    <ul class="sidebar-menu">
      <li>
        <router-link to="/dashboard" active-class="active">
          <span class="icon">📊</span>
          <span>仪表盘</span>
        </router-link>
      </li>
      <li>
        <router-link to="/user/123" active-class="active">
          <span class="icon">👤</span>
          <span>我的资料</span>
        </router-link>
      </li>
      <li>
        <router-link to="/parent" active-class="active">
          <span class="icon">🗂</span>
          <span>嵌套路由</span>
        </router-link>
      </li>
      <li>
        <router-link to="/about" active-class="active">
          <span class="icon">ℹ️</span>
          <span>关于</span>
        </router-link>
      </li>
    </ul>

    <div class="sidebar-footer">
      <p>当前路由: {{ $route.name }}</p>
    </div>
  </aside>
</template>

<script>
export default {
  name: 'AppSidebar',
  created() {
    console.log('侧边栏组件创建')
  }
}
</script>

<style scoped>
.app-sidebar {
  width: 250px;
  background-color: #2c3e50;
  color: white;
  padding: 20px;
  height: 100vh;
  box-sizing: border-box;
}

.sidebar-menu {
  list-style: none;
  padding: 0;
  margin: 20px 0;
}

.sidebar-menu li {
  margin-bottom: 10px;
}

.sidebar-menu a {
  display: flex;
  align-items: center;
  padding: 10px;
  color: #ecf0f1;
  text-decoration: none;
  border-radius: 4px;
  transition: background-color 0.3s;
}

.sidebar-menu a:hover {
  background-color: #34495e;
}

.sidebar-menu a.active {
  background-color: #42b983;
}

.sidebar-menu .icon {
  margin-right: 10px;
  font-size: 1.2em;
}

.sidebar-footer {
  position: absolute;
  bottom: 20px;
  left: 20px;
  right: 20px;
  font-size: 0.8em;
  color: #bdc3c7;
}
</style>