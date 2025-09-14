<template>
  <div class="component">
    <h3>{{message}}</h3>
    <!-- .lazy 修饰符 -->
    <input v-model.lazy="msg" placeholder="失去焦点时更新">
    <p>消息：{{ msg }}</p>

    <!-- .number 修饰符 -->
    <input v-model.number="age" type="number" placeholder="输入年龄">
    <p>年龄类型：{{ typeof age }}，值：{{ age }}</p>

    <!-- .trim 修饰符 -->
    <input v-model.trim="trimmedMsg" placeholder="自动去除首尾空格">
    <p>去空格后：'{{ trimmedMsg }}'</p>

    <!-- 组合使用修饰符 -->
    <input v-model.lazy.trim="combinedMsg" placeholder="组合修饰符">
    <p>组合结果：'{{ combinedMsg }}'</p>
  </div>
</template>

<script>
export default {
  name: "ModifierDemo",
  data() {
    return {
      message: "修饰符",
      msg: '',
      age: null,
      trimmedMsg: '',
      combinedMsg: ''
    }
  }
}
</script>