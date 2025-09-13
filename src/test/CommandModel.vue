<template>
  <div class="component">
    <h3>{{message}}</h3>
    <div>
      <!-- 输入框 -->
      <input v-model="message" placeholder="请输入">
      <p>{{ message }}</p>

      <!-- 复选框 -->
      <input type="checkbox" v-model="checked">
      <label>{{ checked }}</label>

      <!-- 单选框 -->
      <input type="radio" value="A" v-model="picked">
      <input type="radio" value="B" v-model="picked">
      <span>选择：{{ picked }}</span>

      <!-- 选择框 -->
      <select v-model="selected">
        <option disabled value="">请选择</option>
        <option>A</option>
        <option>B</option>
      </select>
    </div>
  </div>
</template>

<!-- 在"change"时而非"input"时更新 -->
<!--<input v-model.lazy="msg">-->

<!--&lt;!&ndash; 自动将用户的输入值转为数值类型 &ndash;&gt;-->
<!--<input v-model.number="age" type="number">-->

<!--&lt;!&ndash; 自动过滤用户输入的首尾空白字符 &ndash;&gt;-->
<!--<input v-model.trim="msg">-->

<script>

export default {
  name: 'CommandModel',
  data() {
    return {
      message: '输入框 选择框'
    }
  }
}
</script>
