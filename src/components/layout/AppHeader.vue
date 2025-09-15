<template>
  <!-- 页面头部组件 -->
  <header>
    <!-- 导航栏容器 -->
    <nav>
      <!-- 首页路由链接 -->
      <router-link to="/">首页</router-link>

      <!-- 关于页面路由链接 -->
      <router-link to="/about">关于</router-link>

      <!-- 带参数的用户详情页路由链接（使用命名路由） -->
      <router-link :to="{ name: 'User', params: { id: 123 }}">用户123</router-link>

      <!-- 带查询参数的用户页路由链接 -->
      <router-link :to="{ path: '/user', query: { name: 'vue' }}">用户查询</router-link>

      <!-- 父组件页面路由链接 -->
      <router-link to="/parent">父组件</router-link>

      <!-- 仪表盘页面路由链接（需要认证） -->
      <router-link to="/dashboard">仪表盘</router-link>

      <!-- 别名A页面路由链接 -->
      <router-link to="/a">别名A</router-link>

      <!-- 别名B页面路由链接（与别名A指向相同组件） -->
      <router-link to="/b">别名B</router-link>

      <!-- 登录状态条件渲染 -->
      <template v-if="$store.getters.isAuthenticated">
        <!-- 退出登录按钮 -->
        <button @click="logout">退出</button>
      </template>
      <!-- 未登录状态条件渲染 -->
      <template v-else>
        <!-- 登录页面路由链接 -->
        <router-link to="/login">登录</router-link>
      </template>
    </nav>
  </header>
</template>

<script>
// 组件定义
export default {
  // 组件名称（用于调试和递归组件）
  name: 'AppHeader',

  // 组件方法
  methods: {
    // 退出登录方法
    logout() {
      // 调用Vuex的logout action来清除认证状态
      this.$store.dispatch('logout')
      // 使用路由编程式导航跳转到登录页
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped>
/* 头部样式（scoped表示只作用于当前组件） */
header {
  /* 浅灰色背景 */
  background-color: #f8f9fa;
  /* 固定定位在视口顶部 */
  position: fixed;
  /* 贴紧顶部 */
  top: 0;
  /* 贴紧左侧 */
  left: 0;
  /* 贴紧右侧 */
  right: 0;
  /* 固定高度60像素 */
  height: 60px;
  /* 底部阴影效果 */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  /* 确保在最上层（避免被其他元素覆盖） */
  z-index: 1000;
}

/* 导航栏样式 */
nav {
  /* 最大宽度限制（响应式设计） */
  max-width: 1200px;
  /* 水平居中 */
  margin: 0 auto;
  /* 继承父元素高度 */
  height: 100%;
  /* 使用弹性布局 */
  display: flex;
  /* 主轴（水平）居中 */
  justify-content: center;
  /* 交叉轴（垂直）居中 */
  align-items: center;
  /* 左右内边距 */
  padding: 0 20px;
}

/* 导航链接和按钮共用样式 */
nav a, nav button {
  /* 深灰色文字 */
  color: #2c3e50;
  /* 去除下划线 */
  text-decoration: none;
  /* 内边距（上下8px，左右12px） */
  padding: 8px 12px;
  /* 圆角边框 */
  border-radius: 4px;
  /* 左右外边距10px */
  margin: 0 10px;
  /* 所有属性变化0.3秒缓动效果 */
  transition: all 0.3s ease;
}

/* 当前活动路由链接的特殊样式 */
nav a.router-link-exact-active {
  /* 绿色背景 */
  background-color: #42b983;
  /* 白色文字 */
  color: white;
}

/* 链接和按钮的悬停状态（排除当前活动路由） */
nav a:hover:not(.router-link-exact-active),
nav button:hover {
  /* 浅灰色背景 */
  background-color: #e9ecef;
}

/* 退出按钮特有样式 */
nav button {
  /* 红色边框 */
  border: 1px solid #dc3545;
  /* 透明背景 */
  background-color: transparent;
  /* 红色文字 */
  color: #dc3545;
  /* 手型指针 */
  cursor: pointer;
}

/* 退出按钮悬停状态 */
nav button:hover {
  /* 红色背景 */
  background-color: #dc3545;
  /* 白色文字 */
  color: white;
}
</style>