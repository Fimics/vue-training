<template>
  <div class="brother-a">
    <h3>兄弟组件A</h3>
    <button @click="sendToBrother">发送数据给兄弟B</button>
  </div>
</template>

<script>
export default {
  name: 'BrotherA',
  data() {
    return {
      message: 'Hello from BrotherA'
    }
  },
  methods: {
    sendToBrother() {
      // 通过父组件中转数据
      this.$emit('a-to-b', this.message);
    }
  }
}
</script>