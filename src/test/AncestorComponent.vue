<template>
  <div class="component">
    <h3>{{message}}</h3>
    <h2>祖先组件</h2>
    <p>当前主题: {{ theme }}</p>
    <p>当前用户: {{ user.name }} ({{ user.role }})</p>
    <p>响应式数据: {{ reactiveData }}</p>

    <button @click="changeTheme">切换主题</button>
    <button @click="changeUser">修改用户</button>
    <button @click="updateReactiveData">更新响应式数据</button>

    <!-- 传递属性和事件给子组件 -->
    <middle-component
        :custom-prop="'来自祖先的自定义属性'"
        @custom-event="handleCustomEvent"
    />
  </div>
</template>

<script>
import MiddleComponent from './MiddleComponent.vue'

export default {
  name: 'AncestorComponent',
  components: {
    MiddleComponent
  },
  // 提供数据给后代组件
  provide() {
    return {
      // 提供静态值
      theme: this.theme,
      // 提供对象引用（注意：对象内部变化不会自动响应）
      user: this.user,
      // 提供响应式数据的getter函数
      getReactiveData: () => this.reactiveData,
      // 提供修改响应式数据的方法
      updateReactiveData: this.updateReactiveData
    }
  },
  data() {
    return {
      message:"跨级组件通信",
      theme: 'dark',
      user: { name: '张三', role: 'admin' },
      reactiveData: '初始数据'
    }
  },
  methods: {
    // 切换主题
    changeTheme() {
      this.theme = this.theme === 'dark' ? 'light' : 'dark'
      console.log('主题已切换为:', this.theme)
    },
    // 修改用户信息
    changeUser() {
      this.user.name = this.user.name === '张三' ? '李四' : '张三'
      this.user.role = this.user.role === 'admin' ? 'user' : 'admin'
      console.log('用户信息已更新:', this.user)
    },
    // 更新响应式数据
    updateReactiveData() {
      this.reactiveData = `更新后的数据 ${new Date().toLocaleTimeString()}`
      console.log('响应式数据已更新:', this.reactiveData)
    },
    // 处理自定义事件
    handleCustomEvent(payload) {
      console.log('祖先组件收到自定义事件:', payload)
      alert(`祖先组件收到来自后代的事件: ${payload}`)
    }
  }
}
</script>

<style scoped>
.ancestor {
  border: 2px solid #333;
  padding: 20px;
  margin: 10px;
  background-color: #f0f0f0;
}
</style>

<!--这个示例展示了两种跨级组件通信的方式：-->
<!--provide/inject-->

<!--祖先组件通过 provide提供数据-->

<!--后代组件通过 inject注入数据-->

<!--对于响应式数据，提供了getter函数来确保能获取最新值-->

<!--attrs/listener-->

<!--中间组件通过 $attrs和 $listeners透传属性和事件-->

<!--使用 inheritAttrs: false防止属性自动继承到DOM元素-->

<!--使用说明-->
<!--点击"切换主题"按钮会修改注入的主题值-->

<!--点击"修改用户"按钮会更新用户信息-->

<!--点击"更新响应式数据"按钮会更新响应式数据-->

<!--后代组件中的按钮可以触发透传的事件-->

<!--这个示例展示了如何在Vue中实现跨越多层组件的通信，避免了props的层层传递。-->

