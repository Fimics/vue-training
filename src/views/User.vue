<template>
  <!-- 用户详情页容器 -->
  <div class="user">
    <!-- 页面标题 -->
    <h1>用户详情</h1>

    <!-- 显示路由参数中的用户ID -->
    <p>用户ID: {{ $route.params.id }}</p>

    <!-- 显示路由查询参数 -->
    <p>查询参数: {{ $route.query }}</p>

    <!-- 导航按钮：跳转到另一个用户 -->
    <button @click="goToAnotherUser">查看用户456</button>

    <!-- 导航按钮：返回上一页 -->
    <button @click="goBack">返回</button>
  </div>
</template>

<script>
export default {
  // 组件名称（用于调试和递归组件）
  name: 'UserPage',

  // 组件生命周期钩子 - 创建时
  created() {
    // 组件创建时获取用户数据
    this.fetchUserData(this.$route.params.id)
  },

  // 监听器
  watch: {
    // 监听路由变化
    '$route'(to, from) {
      // 只有当用户ID变化时才重新获取数据
      if (to.params.id !== from.params.id) {
        this.fetchUserData(to.params.id)
      }
    }
  },

  // 组件方法
  methods: {
    // 获取用户数据方法
    fetchUserData(userId) {
      // 模拟API调用（实际项目会替换为真实API调用）
      console.log(`获取用户 ${userId} 的数据...`)
      // 这里通常会调用 this.$http.get(`/api/users/${userId}`)
    },

    // 跳转到另一个用户的方法
    goToAnotherUser() {
      // 使用命名路由和参数进行导航
      this.$router.push({ name: 'User', params: { id: 456 }})
    },

    // 返回上一页的方法
    goBack() {
      // 使用路由的go方法返回历史记录中的上一页
      this.$router.go(-1)
    }
  },

  // 路由导航守卫 - 进入路由前
  beforeRouteEnter(to, from, next) {
    console.log('进入用户路由前')
    // 在可以访问组件实例前的回调
    next(vm => {
      console.log('可以访问组件实例了', vm)
    })
  },

  // 路由导航守卫 - 路由更新时（相同组件复用）
  beforeRouteUpdate(to, from, next) {
    console.log('用户路由更新')
    // 必须调用next()才能继续导航
    next()
  },

  // 路由导航守卫 - 离开路由前
  beforeRouteLeave(to, from, next) {
    // 检查是否有未保存的更改（示例变量）
    if (this.unsavedChanges) {
      // 弹出确认对话框
      const answer = confirm('您有未保存的更改，确定要离开吗？')
      if (answer) {
        // 用户确认离开
        next()
      } else {
        // 取消导航
        next(false)
      }
    } else {
      // 没有未保存更改，直接放行
      next()
    }
  }
}
</script>