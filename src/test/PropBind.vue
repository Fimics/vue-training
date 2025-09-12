<template>
  <div>
    <!-- 文本插值 -->
    <h1 :class="titleClass">{{ message }}</h1>

    <!-- 绑定动态ID和类 -->
    <button
        :id="buttonId"
        :class="buttonClass"
        @click="changeMessage"
    >
      Click me
    </button>

    <!-- 动态属性名示例 -->
    <div :[dynamicAttribute]="attributeValue"></div>
  </div>
</template>

<script>
export default {
  name: 'PropBind',
  data() {
    return {
      message: 'PropBind',
      // 绑定属性相关的数据
      titleClass: 'red-title',       // 类名绑定
      buttonId: 'my-button',         // ID绑定
      buttonClass: 'primary-button', // 类名绑定
      dynamicAttribute: 'data-test', // 动态属性名
      attributeValue: '123'          // 动态属性值
    }
  },
  methods: {
    changeMessage() {
      this.message = '消息已改变';
      // 动态修改绑定的属性（演示动态更新）
      this.buttonClass = 'updated-button';
      this.dynamicAttribute = 'data-updated';
    }
  }
}
</script>

<style scoped>
/* 原有的样式 */
h1 {
  color: red;
}

button {
  background-color: blue;
  color: white;
}

/* 新增的绑定类样式 */
.red-title {
  font-size: 2em;
}

.primary-button {
  padding: 10px 20px;
  border-radius: 5px;
}

.updated-button {
  background-color: green; /* 点击后按钮变绿 */
}
</style>