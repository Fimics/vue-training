<template>
  <!-- 404页面容器 -->
  <div class="not-found">
    <!-- 主标题 -->
    <h1>404 - 页面未找到</h1>

    <!-- 显示当前访问的不存在的路径 -->
    <p>您访问的路径 <strong>{{ $route.path }}</strong> 不存在</p>

    <!-- 建议访问的页面区域 -->
    <div class="suggestions">
      <h3>您可以尝试以下页面：</h3>
      <ul>
        <!-- 首页链接 -->
        <li><router-link to="/">首页</router-link></li>
        <!-- 关于页面链接 -->
        <li><router-link to="/about">关于我们</router-link></li>
        <!-- 仪表盘链接 -->
        <li><router-link to="/dashboard">仪表盘</router-link></li>
      </ul>
    </div>

    <!-- 返回按钮 -->
    <button @click="goBack" class="back-button">返回上一页</button>
  </div>
</template>

<script>
export default {
  // 组件名称
  name: 'NotFound',

  // 组件方法
  methods: {
    // 返回上一页的方法
    goBack() {
      // 检查浏览器历史记录长度
      if (window.history.length > 1) {
        // 如果有历史记录，返回上一页
        this.$router.go(-1)
      } else {
        // 如果没有历史记录，跳转到首页
        this.$router.push('/')
      }
    }
  }
}
</script>

<style scoped>
/* 404页面容器样式 */
.not-found {
  max-width: 600px;  /* 最大宽度 */
  margin: 50px auto;  /* 上下边距50px，水平居中 */
  padding: 30px;  /* 内边距 */
  text-align: center;  /* 文本居中 */
  background-color: #f8f9fa;  /* 浅灰色背景 */
  border-radius: 8px;  /* 圆角 */
}

/* 主标题样式 */
.not-found h1 {
  color: #dc3545;  /* 红色文字 */
}

/* 建议区域样式 */
.suggestions {
  margin: 30px 0;  /* 上下边距 */
  padding: 20px;  /* 内边距 */
  background-color: white;  /* 白色背景 */
  border-radius: 5px;  /* 圆角 */
}

/* 建议列表样式 */
.suggestions ul {
  list-style: none;  /* 去除列表默认样式 */
  padding: 0;  /* 去除内边距 */
}

/* 建议列表项样式 */
.suggestions li {
  margin: 10px 0;  /* 上下边距 */
}

/* 返回按钮样式 */
.back-button {
  padding: 10px 20px;  /* 内边距 */
  background-color: #6c757d;  /* 灰色背景 */
  color: white;  /* 白色文字 */
  border: none;  /* 无边框 */
  border-radius: 4px;  /* 圆角 */
  cursor: pointer;  /* 手型指针 */
}

/* 返回按钮悬停效果 */
.back-button:hover {
  background-color: #5a6268;  /* 深灰色背景 */
}
</style>