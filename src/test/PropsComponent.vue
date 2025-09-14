<template>
  <div class="props-demo-container">
    <h2>11 章 Props 演示组件</h2>

    <div class="props-display">
      <h3>接收到的 Props：</h3>
      <ul>
        <li><strong>propA</strong> (Number): {{ propA }}</li>
        <li><strong>propB</strong> ([String, Number]): {{ propB }}</li>
        <li><strong>propC</strong> (String, required): {{ propC }}</li>
        <li><strong>propD</strong> (Number, default=100): {{ propD }}</li>
        <li><strong>propE</strong> (Object): {{ propE }}</li>
        <li><strong>propF</strong> (validator): {{ propF }}</li>
        <li><strong>propG</strong> (Function): {{ propG() }}</li>
      </ul>
    </div>

    <div class="usage-example">
      <h3>使用示例：</h3>
      <pre><code>&lt;props-demo
  :prop-a="42"
  prop-b="hello"
  prop-c="required string"
  :prop-e="{ message: 'custom message' }"
  prop-f="success"
  :prop-g="customFunction"&gt;
&lt;/props-demo&gt;</code></pre>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PropsDemo',
  props: {
    // 基础类型检查
    propA: Number,

    // 多个可能的类型
    propB: [String, Number],

    // 必填的字符串
    propC: {
      type: String,
      required: true
    },

    // 带有默认值的数字
    propD: {
      type: Number,
      default: 100
    },

    // 带有默认值的对象
    propE: {
      type: Object,
      default() {
        return { message: 'hello' }
      }
    },

    // 自定义验证函数
    propF: {
      validator(value) {
        return ['success', 'warning', 'danger'].includes(value)
      }
    },

    // 具有默认值的函数
    propG: {
      type: Function,
      default() {
        return 'Default function'
      }
    }
  },
  created() {
    console.log('组件创建，接收到的 Props:', this.$props)
  }
}
</script>

<style scoped>
.props-demo-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #eaeaea;
  border-radius: 5px;
  font-family: Arial, sans-serif;
}

h2 {
  color: #42b983;
  border-bottom: 1px solid #eee;
  padding-bottom: 10px;
}

.props-display {
  margin: 20px 0;
  padding: 15px;
  background-color: #f9f9f9;
  border-radius: 5px;
}

.props-display ul {
  list-style-type: none;
  padding: 0;
}

.props-display li {
  margin: 10px 0;
  padding: 8px;
  background-color: white;
  border-radius: 3px;
}

.usage-example {
  margin-top: 30px;
  padding: 15px;
  background-color: #f5f5f5;
  border-radius: 5px;
}

pre {
  background-color: #2d2d2d;
  color: #f8f8f2;
  padding: 10px;
  border-radius: 3px;
  overflow-x: auto;
}
</style>