<template>
  <!-- 侧边栏容器 -->
  <aside class="app-sidebar">
    <!-- 侧边栏标题 -->
    <h3>导航菜单</h3>

    <!-- 导航菜单列表 -->
    <ul class="sidebar-menu">
      <!-- 仪表盘菜单项 -->
      <li>
        <!-- 路由链接到仪表盘，激活时添加active类 -->
        <router-link to="/dashboard" active-class="active">
          <!-- 图标 -->
          <span class="icon">📊</span>
          <!-- 菜单文本 -->
          <span>仪表盘</span>
        </router-link>
      </li>

      <!-- 用户资料菜单项 -->
      <li>
        <router-link to="/user/123" active-class="active">
          <span class="icon">👤</span>
          <span>我的资料</span>
        </router-link>
      </li>

      <!-- 嵌套路由菜单项 -->
      <li>
        <router-link to="/parent" active-class="active">
          <span class="icon">🗂</span>
          <span>嵌套路由</span>
        </router-link>
      </li>

      <!-- 关于页面菜单项 -->
      <li>
        <router-link to="/about" active-class="active">
          <span class="icon">ℹ️</span>
          <span>关于</span>
        </router-link>
      </li>
    </ul>

    <!-- 侧边栏底部信息 -->
    <div class="sidebar-footer">
      <!-- 显示当前路由名称 -->
      <p>当前路由: {{ $route.name }}</p>
    </div>
  </aside>
</template>

<script>
export default {
  // 组件名称
  name: 'AppSidebar',

  // 组件生命周期钩子 - 创建时
  created() {
    // 组件创建时打印日志
    console.log('侧边栏组件创建')
  }
}
</script>

<style scoped>
/* 侧边栏主容器样式 */
.app-sidebar {
  width: 250px;  /* 固定宽度 */
  background-color: #2c3e50;  /* 深蓝色背景 */
  color: white;  /* 白色文字 */
  padding: 20px;  /* 内边距 */
  height: 100vh;  /* 全视口高度 */
  box-sizing: border-box;  /* 盒模型计算方式 */
}

/* 菜单列表样式 */
.sidebar-menu {
  list-style: none;  /* 去除列表默认样式 */
  padding: 0;  /* 去除内边距 */
  margin: 20px 0;  /* 上下外边距 */
}

/* 菜单项样式 */
.sidebar-menu li {
  margin-bottom: 10px;  /* 底部间距 */
}

/* 菜单链接样式 */
.sidebar-menu a {
  display: flex;  /* 弹性布局 */
  align-items: center;  /* 垂直居中 */
  padding: 10px;  /* 内边距 */
  color: #ecf0f1;  /* 浅灰色文字 */
  text-decoration: none;  /* 去除下划线 */
  border-radius: 4px;  /* 圆角 */
  transition: background-color 0.3s;  /* 背景色过渡动画 */
}

/* 菜单链接悬停效果 */
.sidebar-menu a:hover {
  background-color: #34495e;  /* 悬停背景色 */
}

/* 激活菜单项样式 */
.sidebar-menu a.active {
  background-color: #42b983;  /* 绿色背景 */
}

/* 菜单图标样式 */
.sidebar-menu .icon {
  margin-right: 10px;  /* 右侧间距 */
  font-size: 1.2em;  /* 放大图标 */
}

/* 侧边栏底部样式 */
.sidebar-footer {
  position: absolute;  /* 绝对定位 */
  bottom: 20px;  /* 距离底部 */
  left: 20px;  /* 距离左侧 */
  right: 20px;  /* 距离右侧 */
  font-size: 0.8em;  /* 较小字体 */
  color: #bdc3c7;  /* 浅灰色文字 */
}
</style>