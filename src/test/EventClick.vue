<template>
  <div>
    <h1>{{message}}</h1>
    <!-- 内联处理器 -->
    <button @click="counter += 1">Add 1</button>
    <p>按钮被点击了 {{ counter }} 次</p>

    <!-- 方法处理器 -->
    <button @click="greet">Greet</button>

    <!-- 传递参数 -->
    <button @click="say('hello')">Say hello</button>
    <button @click="say('goodbye')">Say goodbye</button>
  </div>
</template>

<script>

export default {
  name: 'EventClick',
  data() {
    return {
      message: 'Event Click',
      counter: 0,
      name: 'Vue.js'
    }
  },
  methods: {
    greet(event) {
      alert('Hello ' + this.name + '!')
      // event 是原生 DOM 事件
      if (event) {
        alert(event.target.tagName)
      }
    },
    say(message) {
      alert(message)
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