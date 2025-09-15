<template>
  <!-- 主容器 -->
  <div class="alias-a">
    <!-- 页面标题 -->
    <h1>别名示例</h1>

    <!-- 内容区域 -->
    <div class="content">
      <!-- 描述文本 -->
      <p>这个组件有两个访问路径：</p>

      <!-- 路径列表 -->
      <ul>
        <li><strong>/a</strong> - 原始路径</li>
        <li><strong>/b</strong> - 别名路径</li>
      </ul>

      <!-- 显示当前路径 -->
      <p>当前访问路径: <code>{{ $route.path }}</code></p>

      <!-- 路由信息展示区域 -->
      <div class="demo-box">
        <h3>路由信息</h3>
        <!-- 格式化显示路由信息 -->
        <pre>{{ routeInfo }}</pre>
      </div>

      <!-- 路由链接 -->
      <router-link to="/a" class="link">访问 /a</router-link>
      <router-link to="/b" class="link">访问 /b</router-link>
    </div>
  </div>
</template>

<script>
export default {
  // 组件名称
  name: 'AliasAPage',

  // 计算属性
  computed: {
    // 路由信息对象
    routeInfo() {
      return {
        path: this.$route.path,  // 当前路径
        name: this.$route.name,  // 路由名称
        matched: this.$route.matched.map(route => route.path),  // 匹配的路由路径数组
        params: this.$route.params,  // 路由参数
        query: this.$route.query  // 查询参数
      }
    }
  },

  // 生命周期钩子 - 组件创建时
  created() {
    // 打印创建日志和当前路径
    console.log('AliasA 组件创建，当前路径:', this.$route.path)
  },

  // 路由守卫 - 路由更新时
  beforeRouteUpdate(to, from, next) {
    // 打印路由变更日志
    console.log('路由更新:', from.path, '→', to.path)
    // 继续导航
    next()
  }
}
</script>

<style scoped>
/* 主容器样式 */
.alias-a {
  max-width: 800px;  /* 最大宽度 */
  margin: 0 auto;    /* 水平居中 */
  padding: 30px;     /* 内边距 */
}

/* 内容区域样式 */
.content {
  background-color: #f8f9fa;  /* 浅灰色背景 */
  padding: 20px;              /* 内边距 */
  border-radius: 8px;         /* 圆角 */
  margin-top: 20px;          /* 顶部外边距 */
}

/* 演示框样式 */
.demo-box {
  background-color: white;  /* 白色背景 */
  padding: 15px;            /* 内边距 */
  border: 1px solid #ddd;   /* 边框 */
  border-radius: 4px;       /* 圆角 */
  margin: 20px 0;           /* 外边距 */
}

/* 预格式化文本样式 */
pre {
  background-color: #f5f5f5;  /* 浅灰色背景 */
  padding: 10px;             /* 内边距 */
  border-radius: 4px;       /* 圆角 */
  overflow-x: auto;         /* 水平滚动 */
}

/* 路由链接样式 */
.link {
  display: inline-block;    /* 行内块元素 */
  margin: 10px 10px 0 0;   /* 外边距 */
  padding: 8px 15px;       /* 内边距 */
  background-color: #42b983;  /* 绿色背景 */
  color: white;            /* 白色文字 */
  text-decoration: none;  /* 去除下划线 */
  border-radius: 4px;      /* 圆角 */
}

/* 链接悬停效果 */
.link:hover {
  background-color: #369f6b;  /* 深绿色背景 */
}
</style>