<template>
  <div class="component">
    <!-- 使用v-if在template上 -->
    <h3>{{message}}</h3>
    <template v-if="loginType === 'username'">
      <label>Username</label>
      <input
          placeholder="Enter your username"
          key="username-input"
          v-model="username">
    </template>
    <template v-else>
      <label>Email</label>
      <input
          placeholder="Enter your email address"
          key="email-input"
          v-model="email">
    </template>

    <!-- 使用v-show控制元素显示 -->
    <h3 v-show="showMessage">{{message}}</h3>

    <!-- 按钮绑定点击事件 -->
    <button @click="toggleLoginType">Toggle Login Type</button>
    <button @click="toggleShowMessage">Toggle Show Message</button>

    <!-- 用key管理可复用的元素 -->
    <div v-if="showName" key="name">
      <label>姓名</label>
      <input v-model="name">
    </div>
    <div v-else key="email">
      <label>邮箱</label>
      <input v-model="email">
    </div>
  </div>
</template>

<script>
export default {
  name: 'ConditionRender',
  data() {
    return {
      message: '条件渲染',
      loginType: 'username',
      showName: true,
      showMessage: true,
      username: '',
      email: '',
      name: ''
    }
  },
  methods: {
    toggleLoginType() {
      this.loginType = this.loginType === 'username' ? 'email' : 'username'
    },
    toggleShowMessage() {
      this.showMessage = !this.showMessage
    }
  }
}
</script>

