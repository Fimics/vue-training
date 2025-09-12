<template>
  <div>
    <h1>{{message}}</h1>
    <!-- 键码 -->
    <input @keyup.13="submit">

    <!-- 键名 -->
    <input @keyup.enter="submit">
    <input @keyup.page-down="onPageDown">

    <!-- 组合键 -->
    <input @keyup.ctrl.67="copy">
    <input @click.ctrl="doSomething">

    <!-- 精确修饰符 -->
    <button @click.ctrl.exact="onCtrlClick">A</button>
    <button @click.exact="onClick">A</button>
  </div>
</template>

<script>

export default {
  name: 'EventCustom',
  data() {
    return {
      message: 'Event Custom'
    }
  },
  methods: {
    submit() {
      console.log('提交表单')
    },
    onPageDown() {
      console.log('Page Down 键被按下')
    },
    copy() {
      console.log('Ctrl + C 被按下')
    },
    doSomething() {
      console.log('Ctrl + 点击')
    },
    onCtrlClick() {
      console.log('只有Ctrl被按下时的点击')
    },
    onClick() {
      console.log('没有任何修饰键的点击')
    }
  }
}

// 自定义事件
// // 子组件
// export default {
//   name: 'ChildComponent',
//   methods: {
//     handleClick() {
//       // 触发自定义事件
//       this.$emit('custom-event', '传递的数据')
//     }
//   }
// }
//
// // 父组件
// export default {
//   methods: {
//     handleCustomEvent(data) {
//       console.log('收到子组件的数据:', data)
//     }
//   }
// }
</script>



<style scoped>
 h1 {
  color: red;
 }

 button {
  background-color: blue;
  color: white;
 }

</style>