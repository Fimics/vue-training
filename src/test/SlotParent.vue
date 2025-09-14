<template>
  <div class="parent-container">
    <h2>用户列表展示</h2>

    <div class="example-section">
      <h3>完整语法示例</h3>
      <SlotChild>
        <template v-slot:default="slotProps">
          <div class="user-card">
            <h3>{{ slotProps.user.name }}</h3>
            <p>{{ slotProps.user.email }}</p>
            <p>索引: {{ slotProps.index }}</p>
          </div>
        </template>
      </SlotChild>
    </div>

    <div class="example-section">
      <h3>解构赋值示例</h3>
      <SlotChild>
        <template v-slot:default="{ user, index }">
          <li>{{ index + 1 }}. {{ user.name }} - {{ user.email }}</li>
        </template>
      </SlotChild>
    </div>

    <div class="example-section">
      <h3>缩写语法示例</h3>
      <SlotChild>
        <template #default="{ user }">
          <button class="user-button">{{ user.name }}</button>
        </template>
      </SlotChild>
    </div>
  </div>
</template>

<script>
import SlotChild from "@/test/SlotChild.vue";

export default {
  name: 'SlotParent',
  components: {
    SlotChild
  }
}
</script>

<style scoped>
.parent-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.example-section {
  margin: 30px 0;
  padding: 15px;
  border: 1px dashed #ccc;
  border-radius: 4px;
}

.user-card {
  padding: 10px;
  background-color: #e6f7ff;
  border-radius: 4px;
}

.user-button {
  padding: 5px 10px;
  background-color: #1890ff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.user-button:hover {
  background-color: #40a9ff;
}

li {
  list-style-type: none;
  padding: 5px 0;
}
</style>