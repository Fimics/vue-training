<template>
  <div>
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

**重要提醒：**始终为v-for提供key属性，且key应该是唯一的标识符。

<script>
export default {
  name: 'CommandFor',
  data() {
    return {
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