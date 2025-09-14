<template>
  <div v-drag class="draggable-item">
    <h3>拖我</h3>
    <slot></slot>
  </div>
</template>

<script>
import dragDirective from '@/directives/DragDirective';

export default {
  name: 'dragDirective',
  directives: {
    drag: dragDirective
  }
}
</script>

<style scoped>
.draggable-item {
  user-select: none; /* 防止拖动时选中文本 */
}
</style>