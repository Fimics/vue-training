<template>
  <div class="user">
    <h1>用户详情</h1>
    <p>用户ID: {{ $route.params.id }}</p>
    <p>查询参数: {{ $route.query }}</p>

    <button @click="goToAnotherUser">查看用户456</button>
    <button @click="goBack">返回</button>
  </div>
</template>

<script>
export default {
  name: 'UserPage',
  created() {
    this.fetchUserData(this.$route.params.id)
  },
  watch: {
    '$route'(to, from) {
      if (to.params.id !== from.params.id) {
        this.fetchUserData(to.params.id)
      }
    }
  },
  methods: {
    fetchUserData(userId) {
      console.log(`获取用户 ${userId} 的数据...`)
      // 实际项目中这里会调用API
    },
    goToAnotherUser() {
      this.$router.push({ name: 'User', params: { id: 456 }})
    },
    goBack() {
      this.$router.go(-1)
    }
  },
  beforeRouteEnter(to, from, next) {
    console.log('进入用户路由前')
    next(vm => {
      console.log('可以访问组件实例了', vm)
    })
  },
  beforeRouteUpdate(to, from, next) {
    console.log('用户路由更新')
    next()
  },
  beforeRouteLeave(to, from, next) {
    if (this.unsavedChanges) {
      const answer = confirm('您有未保存的更改，确定要离开吗？')
      if (answer) {
        next()
      } else {
        next(false)
      }
    } else {
      next()
    }
  }
}
</script>