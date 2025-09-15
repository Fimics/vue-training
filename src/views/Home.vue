<template>
  <div class="home">
    <h1>欢迎来到 Vue Router 演示</h1>

    <div class="features">
      <div class="feature-card" v-for="feature in features" :key="feature.title">
        <h3>{{ feature.title }}</h3>
        <p>{{ feature.description }}</p>
        <router-link :to="feature.path">查看示例</router-link>
      </div>
    </div>

    <loading :isLoading="isLoading" />
  </div>
</template>

<script>
import Loading from '@/components/shared/Loading.vue'

export default {
  name: 'Home',
  components: {
    Loading
  },
  data() {
    return {
      isLoading: false,
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
  created() {
    // 模拟数据加载
    this.isLoading = true
    setTimeout(() => {
      this.isLoading = false
    }, 1000)
  }
}
</script>

<style scoped>
.home {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.features {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 30px;
}

.feature-card {
  padding: 20px;
  border: 1px solid #eaeaea;
  border-radius: 8px;
  transition: transform 0.3s;
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.feature-card h3 {
  margin-top: 0;
  color: #2c3e50;
}

.feature-card a {
  display: inline-block;
  margin-top: 10px;
  color: #42b983;
  text-decoration: none;
}
</style>