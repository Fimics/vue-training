// src/components/ComponentA.vue

<template>
  <div>
    <button @click="message = '组件A被点击了'">
      {{ message }} (局部组件)
    </button>
  </div>
</template>

<script>
export default {
  name: 'LocalComponentA',
  data() {
    return {
      message: '我是组件A'
    }
  }
}
</script>