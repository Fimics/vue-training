// src/components/ComponentB.vue

<template>
  <div>
    <button @click="increment">
      点击计数: {{ counter }} (局部组件)
    </button>
  </div>
</template>

<script>
export default {
  name: 'LocalComponentB',
  data() {
    return {
      counter: 0
    }
  },
  methods: {
    increment() {
      this.counter += 1
    }
  }
}
</script>