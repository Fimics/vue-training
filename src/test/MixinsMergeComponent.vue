<template>
  <div class="mixin-demo">
    <h1>混入合并演示</h1>
    <p>message: {{ message }}</p>
    <p>foo: {{ foo }}</p>
    <p>bar: {{ bar }}</p>
    <button @click="callAllMethods">执行所有方法</button>
  </div>
</template>

<script>
// 混入定义直接写在组件内（实际项目建议单独文件）
const myMixin = {
  data() {
    return {
      message: 'hello',
      foo: 'abc'
    }
  },
  created() {
    console.log('混入对象的钩子被调用')
  },
  methods: {
    fooMethod() {
      console.log('foo from mixin')
    },
    conflicting() {
      console.log('from mixin')
    }
  }
}

export default {
  name: 'MixinsMergeComponent',
  mixins: [myMixin],
  data() {
    return {
      message: 'goodbye',
      bar: 'def'
    }
  },
  created() {
    console.log('组件钩子被调用')
    console.log('合并后的数据:', this.$data)
  },
  methods: {
    barMethod() {
      console.log('bar from component')
    },
    conflicting() {
      console.log('from component')
    },
    callAllMethods() {
      this.fooMethod()
      this.barMethod()
      this.conflicting()
    }
  }
}
</script>

<style scoped>
.mixin-demo {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #eee;
  border-radius: 8px;
}
button {
  padding: 8px 16px;
  margin-top: 20px;
  background: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>

<!--数据对象：递归合并，组件数据优先-->
<!--生命周期钩子：合并为数组，都会被调用，混入的先调用-->
<!--方法、指令等：组件的选项会覆盖混入的选项-->