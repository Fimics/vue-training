<template>
  <div>
    <input v-focus="shouldFocus">
    <button @click="toggleFocus">切换焦点状态</button>
  </div>
</template>

<script>
export default {
  data: () => ({ shouldFocus: true }),
  methods: {
    toggleFocus() {
      this.shouldFocus = !this.shouldFocus
    }
  }
}
</script>