<template>
  <div>
    <h1>{{message}}</h1>
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



<style scoped>
 h1 {
  color: red;
 }

 button {
  background-color: blue;
  color: white;
 }

</style>