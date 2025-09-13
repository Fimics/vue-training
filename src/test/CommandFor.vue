<template>
  <div class="component">
    <h3>{{ message }}</h3>
    <!-- 遍历数组 -->
    <li v-for="(item, index) in items" :key="item.id">
      {{ index }} - {{ item.name }}
    </li>

    <!-- 遍历对象 -->
    <li v-for="(value, key, index) in object" :key="key">
      {{ index }}. {{ key }}: {{ value }}
    </li>

    <!-- 遍历数字 -->
    <span v-for="n in 10" :key="n">{{ n }}</span>
  </div>
</template>

<script>
import "@/assets/styles/Components.css";

export default {
  name: 'CommandFor',
  data() {
    return {
      message: 'Command For',
      items: [
        { id: 1, name: '苹果' },
        { id: 2, name: '香蕉' }
      ],
      object: {
        title: 'How to do lists in Vue',
        author: 'Jane Doe',
        publishedAt: '2016-04-10'
      }
    }
  }
}
</script>

<style scoped>
/* 可以保留空的style标签用于组件特有样式 */
</style>