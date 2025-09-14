<template>
  <div class="component">
    <h3>兄弟组件B</h3>
    <div v-if="receivedMessage">
      <p>收到消息时间: {{ receivedMessage.timestamp }}</p>
      <p>发送方: {{ receivedMessage.from }}</p>
      <p>内容: {{ receivedMessage.text }}</p>
    </div>
    <p v-else>等待接收消息...</p>
  </div>
</template>

<script>
import { Eventbus } from './eventbus'

export default {
  name: 'BrotherB',
  data() {
    return {
      receivedMessage: null
    }
  },
  created() {
    Eventbus.$on('message-sent', this.handleMessage)
  },
  methods: {
    handleMessage(message) {
      console.log('收到消息:', message)
      this.receivedMessage = message
    }
  },
  beforeDestroy() {
    // 移除特定事件监听
    Eventbus.$off('message-sent', this.handleMessage)
  }
}
</script>
