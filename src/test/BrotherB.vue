<template>
  <div class="brother-b">
    <h3>兄弟组件B</h3>
    <p>收到兄弟A的消息: {{ receivedMessage }}</p>
  </div>
</template>

<script>
export default {
  name: 'BrotherB',
  props: ['receivedMessage']  // 通过父组件传递的数据
}
</script>