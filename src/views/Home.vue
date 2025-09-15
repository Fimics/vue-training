<template>
  <!-- 首页容器 -->
  <div class="home">
    <!-- 主标题 -->
    <h1>欢迎来到 Vue Router 演示</h1>

    <!-- 功能展示区域 -->
    <div class="features">
      <!-- 使用 v-for 循环渲染功能卡片 -->
      <div class="feature-card" v-for="feature in features" :key="feature.title">
        <!-- 功能标题 -->
        <h3>{{ feature.title }}</h3>
        <!-- 功能描述 -->
        <p>{{ feature.description }}</p>
        <!-- 路由链接到对应功能页面 -->
        <router-link :to="feature.path">查看示例</router-link>
      </div>
    </div>

    <!-- 加载动画组件，根据 isLoading 状态显示/隐藏 -->
    <loading :isLoading="isLoading" />
  </div>
</template>

<script>
// 导入 Loading 组件
import Loading from '@/components/shared/Loading.vue'

export default {
  // 组件名称
  name: 'HomePage',

  // 注册子组件
  components: {
    Loading
  },

  // 组件数据
  data() {
    return {
      // 加载状态
      isLoading: false,
      // 功能列表数据
      features: [
        {
          title: '动态路由',
          description: '展示如何通过动态路由参数传递数据',
          path: '/user/123'
        },
        {
          title: '嵌套路由',
          description: '展示父子路由的嵌套关系',
          path: '/parent'
        },
        {
          title: '命名视图',
          description: '在同一页面展示多个路由组件',
          path: '/dashboard'
        },
        {
          title: '路由守卫',
          description: '控制导航流程的各个阶段',
          path: '/about'
        }
      ]
    }
  },

  // 生命周期钩子 - 组件创建时
  created() {
    // 模拟数据加载过程
    this.isLoading = true  // 显示加载动画

    // 设置1秒后关闭加载动画
    setTimeout(() => {
      this.isLoading = false
    }, 1000)
  }
}
</script>

<style scoped>
/* 首页容器样式 */
.home {
  max-width: 1200px;  /* 最大宽度限制 */
  margin: 0 auto;    /* 水平居中 */
  padding: 20px;     /* 内边距 */
}

/* 功能展示区域样式 */
.features {
  display: grid;  /* 使用网格布局 */
  /* 自动填充列，最小250px，最大1fr */
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;     /* 网格间距 */
  margin-top: 30px;  /* 顶部外边距 */
}

/* 功能卡片样式 */
.feature-card {
  padding: 20px;     /* 内边距 */
  border: 1px solid #eaeaea;  /* 浅灰色边框 */
  border-radius: 8px;  /* 圆角 */
  transition: transform 0.3s;  /* 变换动画 */
}

/* 卡片悬停效果 */
.feature-card:hover {
  transform: translateY(-5px);  /* 上移5像素 */
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);  /* 添加阴影 */
}

/* 功能标题样式 */
.feature-card h3 {
  margin-top: 0;    /* 去除默认上边距 */
  color: #2c3e50;   /* 深蓝色文字 */
}

/* 功能链接样式 */
.feature-card a {
  display: inline-block;  /* 行内块元素 */
  margin-top: 10px;      /* 顶部外边距 */
  color: #42b983;        /* 绿色文字 */
  text-decoration: none;  /* 去除下划线 */
}
</style>