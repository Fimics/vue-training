<template>
  <div class="login-form">
    <h2>用户登录</h2>

    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label>用户名</label>
        <input
            v-model="username"
            type="text"
            :disabled="loading"
            placeholder="请输入用户名">
        <span class="error" v-if="errors.username">{{ errors.username }}</span>
      </div>

      <div class="form-group">
        <label>密码</label>
        <input
            v-model="password"
            type="password"
            :disabled="loading"
            placeholder="请输入密码">
        <span class="error" v-if="errors.password">{{ errors.password }}</span>
      </div>

      <button type="submit" :disabled="loading">
        {{ loading ? '登录中...' : '登录' }}
      </button>

      <div class="error-message" v-if="errors.message">
        {{ errors.message }}
      </div>
    </form>
  </div>
</template>

<script>
import { formMixin } from '@/mixins/formMixin'

export default {
  name: 'LoginForm',
  mixins: [formMixin],
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    apiCall(formData) {
      return this.$http.post('/login', formData)
    },

    onSuccess(response) {
      console.log(response)
      this.$notify.success('登录成功')
      this.$router.push('/dashboard')
    },

    onError(errorData) {
      // 这里绝对不会有 undefined 访问！
      console.log('安全错误数据:', errorData)

      // 显示通知
      this.$notify.error(errorData.message || '登录失败')

      // 设置错误 - 完全安全
      this.errors = errorData.fieldErrors || {}
      if (Object.keys(this.errors).length === 0) {
        this.errors = { message: errorData.message }
      }
    },

    handleSubmit() {
      const formData = {
        username: this.username,
        password: this.password
      }
      this.submitForm(formData)
    }
  }
}
</script>

<style scoped>
.login-form {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #eaeaea;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

h2 {
  text-align: center;
  color: #333;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

input {
  width: 100%;
  padding: 8px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-sizing: border-box;
}

button {
  width: 100%;
  padding: 10px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

button:hover {
  background-color: #35a872;
}

button:disabled {
  background-color: #cccccc;
  cursor: not-allowed;
}

.error {
  color: #ff4d4f;
  font-size: 12px;
}

.error-message {
  margin-top: 10px;
  color: #ff4d4f;
  text-align: center;
}
</style>