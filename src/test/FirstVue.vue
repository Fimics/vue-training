<template>
  <div class="component">
    <h3>{{message}}</h3>
    <button @click="changeMessage">Click me</button>
  </div>
</template>

<script>

export default {
  name: 'FirstVue',
  data() {
    return {
      message: 'Hello World'
    }
  },
  methods: {
    changeMessage() {
      this.message = '消息已改变'
    }
  }
}
</script>
