// src/components/WindowSizeReporter.vue
<template>
  <div class="window-size">
    <slot :width="windowWidth"
          :height="windowHeight"
          :screenType="screenType">
      <!-- 默认内容 -->
      <p>当前窗口: {{ windowWidth }} × {{ windowHeight }}</p>
      <p>设备类型: {{ screenType }}</p>
    </slot>
  </div>
</template>

<script>
import { windowResizeMixin } from '@/mixins/windowResize'

export default {
  name: 'WindowSizeReporter',
  mixins: [windowResizeMixin]
}
</script>