<template>
  <div>
    <div v-demo:[arg].modifier="color" class="demo-box">
      指令演示元素 (当前颜色: {{ color }})
    </div>
    <button @click="changeColor">切换颜色</button>
    <button @click="toggleElement">移除/添加元素</button>
  </div>
</template>

<script>
export default {
  data: () => ({
    color: 'yellow',
    show: true,
    arg: 'top'
  }),
  methods: {
    changeColor() {
      this.color = this.color === 'yellow' ? 'lightblue' : 'yellow'
    },
    toggleElement() {
      this.show = !this.show
    }
  }
}
</script>

<style>
.demo-box {
  width: 200px;
  height: 100px;
  margin: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.3s;
}
</style>

<!--指令参数详解-->

<!--Vue.directive('demo', {-->
<!--bind(el, binding, vnode) {-->
<!--console.log('指令名:', binding.name)      // demo-->
<!--console.log('指令值:', binding.value)     // 指令绑定的值-->
<!--console.log('旧值:', binding.oldValue)    // 前一个值-->
<!--console.log('表达式:', binding.expression) // 字符串形式的指令表达式-->
<!--console.log('参数:', binding.arg)         // 传给指令的参数-->
<!--console.log('修饰符:', binding.modifiers) // 修饰符对象-->
<!--console.log('VNode:', vnode)             // Vue编译生成的虚拟节点-->
<!--}-->
<!--})-->

<!--&lt;!&ndash; 使用示例 &ndash;&gt;-->
<!--<div v-demo:foo.a.b="message"></div>-->