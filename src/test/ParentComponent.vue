<template>
  <div class="component">
    <h3>{{message}}</h3>
    <h2>父组件</h2>
    <p>来自子组件的数据: {{ childData }}</p>
    <button @click="callChildMethod">调用子组件方法</button>

    <!-- 使用子组件并绑定属性和事件 -->
    <ChildComponent
        ref="child"
        :parent-message="parentMessage"
        @child-event="handleChildEvent"
    />
  </div>
</template>

<script>
import ChildComponent from './ChildComponent.vue';  // 导入子组件

export default {
  name: 'ParentComponent',
  components: { ChildComponent },  // 注册子组件
  data() {
    return {
      message: '父子组件通信',
      parentMessage: 'Hello from parent',
      childData: ''
    }
  },
  methods: {
    handleChildEvent(data) {
      this.childData = data;
      console.log('收到子组件数据:', data);
    },
    callChildMethod() {
      this.$refs.child.childMethod();  // 通过 ref 调用子组件方法
    }
  }
}
</script>
