<template>
  <div class="descendant" :style="{ backgroundColor: theme === 'dark' ? '#333' : '#fff', color: theme === 'dark' ? '#fff' : '#333' }">
    <h4>后代组件</h4>

    <!-- 显示从祖先组件注入的数据 -->
    <p>注入的主题: {{ theme }}</p>
    <p>注入的用户: {{ user.name }} ({{ user.role }})</p>
    <p>注入的响应式数据: {{ reactiveData }}</p>

    <button @click="updateData">通过注入方法更新数据</button>

    <!-- 显示透传的属性 -->
    <p v-if="$attrs['custom-prop']">透传的属性: {{ $attrs['custom-prop'] }}</p>

    <!-- 触发透传的事件 -->
    <button @click="triggerEvent">触发透传事件</button>
  </div>
</template>

<script>
export default {
  name: 'DescendantComponent',
  // 注入祖先组件提供的数据
  inject: ['theme', 'user', 'getReactiveData', 'updateReactiveData'],
  data() {
    return {
      // 本地存储注入的响应式数据
      localReactiveData: ''
    }
  },
  computed: {
    // 计算属性获取最新的响应式数据
    reactiveData() {
      return this.getReactiveData()
    }
  },
  created() {
    console.log('后代组件 - 注入的主题:', this.theme)
    console.log('后代组件 - 注入的用户:', this.user)
    console.log('后代组件 - 透传的属性:', this.$attrs)
    console.log('后代组件 - 透传的事件:', this.$listeners)
  },
  methods: {
    // 通过注入的方法更新数据
    updateData() {
      if (this.updateReactiveData) {
        this.updateReactiveData()
      }
    },
    // 触发透传的事件
    triggerEvent() {
      this.$emit('custom-event', '来自后代组件的事件触发')
    }
  }
}
</script>

<style scoped>
.descendant {
  border: 2px solid #999;
  padding: 10px;
  margin: 10px;
}
</style>