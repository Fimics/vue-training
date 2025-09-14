<template>
  <div class="component">
    <h3>兄弟组件A</h3>
    <button @click="sendMessage">发送消息给兄弟B</button>
  </div>
</template>

<script>
import { Eventbus } from './eventbus'

export default {
  name: 'BrotherA',
  methods: {
    sendMessage() {
      Eventbus.$emit('message-sent', {
        from: 'ComponentA',
        text: 'Hello from Brother A!',
        timestamp: new Date().toLocaleTimeString()
      })
    }
  },
  beforeDestroy() {
    // 清理事件监听
    Eventbus.$off('message-sent')
  }
}
</script>
