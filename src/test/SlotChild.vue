<template>
  <div class="user-list">
    <div v-for="(user, index) in users" :key="user.id" class="user-item">
      <!-- 作用域插槽，传递数据给父组件 -->
      <slot :user="user" :index="index">
        <!-- 默认内容 -->
        <span>{{ user.name }}</span>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserList',
  data() {
    return {
      users: [
        { id: 1, name: '张三', email: 'zhangsan@example.com' },
        { id: 2, name: '李四', email: 'lisi@example.com' },
        { id: 3, name: '王五', email: 'wangwu@example.com' }
      ]
    }
  }
}
</script>

<style scoped>
.user-list {
  margin: 20px 0;
  border: 1px solid #eee;
  padding: 10px;
  border-radius: 4px;
}

.user-item {
  margin: 10px 0;
  padding: 10px;
  background-color: #f9f9f9;
}
</style>