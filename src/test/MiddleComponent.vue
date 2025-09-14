<template>
  <div class="middle">
    <h3>中间组件</h3>
    <p>这个组件不处理props，只是透传属性和事件</p>

    <!--
      使用v-bind="$attrs"传递所有非prop属性
      使用v-on="$listeners"传递所有事件监听器
    -->
    <descendant-component
        v-bind="$attrs"
        v-on="$listeners"
    />
  </div>
</template>

<script>
import DescendantComponent from './DescendantComponent.vue'

export default {
  name: 'MiddleComponent',
  components: {
    DescendantComponent
  },
  // 禁用自动继承属性到DOM元素
  inheritAttrs: false,
  created() {
    console.log('中间组件 - 透传的属性:', this.$attrs)
    console.log('中间组件 - 透传的事件:', this.$listeners)
  }
}
</script>

<style scoped>
.middle {
  border: 2px solid #666;
  padding: 15px;
  margin: 10px;
  background-color: #e0e0e0;
}
</style>