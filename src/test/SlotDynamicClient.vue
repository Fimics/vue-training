<template>
  <div>
    <h3>动态插槽名演示</h3>

    <div class="controls">
      <button @click="dynamicSlotName = 'header'">显示在Header</button>
      <button @click="dynamicSlotName = 'content'">显示在Content</button>
      <button @click="dynamicSlotName = 'footer'">显示在Footer</button>
    </div>

    <SlotDynamic>
      <template v-slot:[dynamicSlotName]>
        <div class="dynamic-content">
          <h3>当前显示在: {{ dynamicSlotName }}</h3>
          <p>这是动态插槽内容，通过点击上方按钮可以改变显示位置</p>
        </div>
      </template>
    </SlotDynamic>
  </div>
</template>

<script>
import SlotDynamic from "@/test/SlotDynamic.vue";
export default {
  name: 'SlotDynamicClient',
  components: {
    SlotDynamic
  },
  data() {
    return {
      dynamicSlotName: 'content' // 默认显示在content区域
    }
  }
}
</script>

