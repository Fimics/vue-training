<template>
  <div class="component">
    <h3>{{message}}</h3>
    <!-- 复选框的值绑定 -->
    <input
        type="checkbox"
        v-model="toggle"
        true-value="yes"
        false-value="no">
    <span>当前值：{{ toggle }}</span>

    <!-- 单选框的值绑定 -->
    <input type="radio" v-model="pick" :value="a">
    <span>选中值：{{ pick }}</span>

    <!-- 选择框的值绑定 -->
    <select v-model="selectedObject">
      <option v-for="option in options" :key="option.value" :value="option">
        {{ option.text }}
      </option>
    </select>
    <span>选中对象：{{ selectedObject }}</span>
  </div>
</template>

<script>
export default {
  name: "ValueBinding",
  data() {
    return {
      message:"值绑定",
      toggle: 'no',
      pick: '',
      a: 'a的值',
      selectedObject: {},
      options: [
        { text: 'One', value: 'A' },
        { text: 'Two', value: 'B' },
        { text: 'Three', value: 'C' }
      ]
    }
  }
}
</script>

