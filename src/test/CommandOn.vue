<template>
  <div>
    <!-- 完整语法 -->
    <button v-on:click="doThis">点击我</button>

    <!-- 缩写 -->
    <button @click="doThis">点击我</button>

    <!-- 传递参数 -->
    <button @click="say('hi')">Say hi</button>

    <!-- 访问原始DOM事件 -->
    <button @click="warn('Form cannot be submitted yet.', $event)">
      Submit
    </button>
  </div>
</template>

<!-- 在"change"时而非"input"时更新 -->
<!--<input v-model.lazy="msg">-->

<!--&lt;!&ndash; 自动将用户的输入值转为数值类型 &ndash;&gt;-->
<!--<input v-model.number="age" type="number">-->

<!--&lt;!&ndash; 自动过滤用户输入的首尾空白字符 &ndash;&gt;-->
<!--<input v-model.trim="msg">-->


<!--&lt;!&ndash; 阻止单击事件继续传播 &ndash;&gt;-->
<!--<a @click.stop="doThis"></a>-->

<!--&lt;!&ndash; 提交事件不再重载页面 &ndash;&gt;-->
<!--<form @submit.prevent="onSubmit"></form>-->

<!--&lt;!&ndash; 修饰符可以串联 &ndash;&gt;-->
<!--<a @click.stop.prevent="doThat"></a>-->

<!--&lt;!&ndash; 只有修饰符 &ndash;&gt;-->
<!--<form @submit.prevent></form>-->

<!--&lt;!&ndash; 添加事件监听器时使用事件捕获模式 &ndash;&gt;-->
<!--<div @click.capture="doThis">...</div>-->

<!--&lt;!&ndash; 只当在 event.target 是当前元素自身时触发处理函数 &ndash;&gt;-->
<!--<div @click.self="doThat">...</div>-->

<!--&lt;!&ndash; 点击事件将只会触发一次 &ndash;&gt;-->
<!--<a @click.once="doThis"></a>-->

<script>

export default {
  name: 'CommandOn',
  data() {
    return {
      message: 'v-on'
    }
  },
  methods: {
    doThis() {
      console.log('按钮被点击了')
    },
    say(message) {
      alert(message)
    },
    warn(message, event) {
      if (event) {
        event.preventDefault()
      }
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