<template>
  <div class="child">
    <h3>子组件</h3>
    <p>收到父组件消息: {{ parentMessage }}</p>
    <button @click="sendToParent">发送数据到父组件</button>
    <button @click="accessParent">访问父组件数据（不推荐）</button>
  </div>
</template>

<script>
export default {
  name: 'ChildComponent',
  props: ['parentMessage'],  // 接收父组件传递的数据
  data() {
    return {
      childMessage: 'Hello from child'
    }
  },
  methods: {
    sendToParent() {
      this.$emit('child-event', this.childMessage)  // 触发自定义事件
    },
    childMethod() {
      console.log('子组件方法被调用了');
    },
    accessParent() {
      console.log('父组件数据:', this.$parent.parentMessage);  // 不推荐直接访问父组件
    }
  }
}
</script>