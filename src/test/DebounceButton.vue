<template>
  <button v-debounce:500.stop="handleClick">防抖按钮</button>
</template>

<script>
import debounceDirective from '@/directives/debounceDirective';

export default {
  directives: {
    debounce: debounceDirective
  },
  methods: {
    handleClick(event) {
      console.log('按钮点击 - 防抖处理', event);
      // 这里可以放置您的点击处理逻辑
      this.$emit('click-debounced');
    }
  }
}
</script>



