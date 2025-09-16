<template>
  <div class="login-form">
    <h2>Login</h2>
    <form @submit.prevent="handleSubmit">
      <!-- 错误消息 -->
      <div v-if="error" class="error-message">
        {{ error }}
      </div>

      <!-- 用户名输入 -->
      <div class="form-group">
        <label for="username">Username</label>
        <input
            id="username"
            v-model="username"
            type="text"
            required
            placeholder="Enter your username"
        />
      </div>

      <!-- 密码输入 -->
      <div class="form-group">
        <label for="password">Password</label>
        <input
            id="password"
            v-model="password"
            type="password"
            required
            placeholder="Enter your password"
        />
      </div>

      <!-- 提交按钮 -->
      <button type="submit" :disabled="isLoading">
        {{ isLoading ? 'Logging in...' : 'Login' }}
      </button>
    </form>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'LoginForm',
  data() {
    return {
      username: '',
      password: ''
    }
  },
  computed: {
    // 映射Vuex状态
    ...mapState('auth', ['error', 'isLoading'])
  },
  methods: {
    // 映射Vuex actions
    ...mapActions('auth', ['login']),

    // 处理表单提交
    async handleSubmit() {
      try {
        await this.login({
          username: this.username,
          password: this.password
        })
        // 登录成功后重定向到首页
        this.$router.push('/')
      } catch (error) {
        // 错误已经在action中处理，这里不需要额外处理
        console.error('Login failed:', error)
      }
    }
  }
}
</script>

<style scoped>
.login-form {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input {
  width: 100%;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

button {
  width: 100%;
  padding: 10px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:disabled {
  background-color: #cccccc;
  cursor: not-allowed;
}

.error-message {
  color: red;
  margin-bottom: 15px;
}
</style>