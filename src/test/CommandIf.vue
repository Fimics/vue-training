<template>
  <div>
    <!-- 原始内容 -->
    <h1>{{ message }}</h1>
    <button @click="changeMessage">Click me</button>

    <!-- 新增条件渲染示例 -->
    <div v-if="type === 'A'">A类型</div>
    <div v-else-if="type === 'B'">B类型</div>
    <div v-else>其他类型</div>

    <!-- 使用template标签的条件渲染 -->
    <template v-if="loginType === 'username'">
      <label>用户名</label>
      <input placeholder="输入用户名" key="username-input">
    </template>
    <template v-else>
      <label>邮箱</label>
      <input placeholder="输入邮箱" key="email-input">
    </template>
  </div>
</template>

<!--v-if vs v-show的区别：-->
<!--v-if：条件性渲染，条件为false时元素不存在于DOM中-->
<!--v-show：始终渲染，只是通过CSS的display控制显示隐藏-->

<script>
export default {
  name: 'CommandIf',
  data() {
    return {
      message: 'Command If',
      type: 'A',          // 控制第一个条件渲染示例
      loginType: 'email'  // 控制第二个条件渲染示例
    }
  },
  methods: {
    changeMessage() {
      this.message = '消息已改变';
      // 切换type值演示条件变化
      this.type = this.type === 'A' ? 'B' : 'C';
      // 切换loginType演示template渲染
      this.loginType = this.loginType === 'username' ? 'email' : 'username';
    }
  }
}
</script>

<style scoped>
h1 {
  color: red;
}

button {
  background-color: blue;
  color: white;
}

/* 为新增元素添加基础样式 */
label {
  display: block;
  margin-top: 10px;
}
input {
  padding: 5px;
  margin: 5px 0;
}
</style>