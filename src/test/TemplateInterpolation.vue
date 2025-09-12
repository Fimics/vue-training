<template>
  <div>
    <!-- 文本插值 -->
    <div><h1>{{ message }}</h1></div>

    <!-- 文本插值 -->
    <div>{{ message }}</div>


    <!-- 表达式 -->
    <div>{{ number + 1 }}</div>
    <div>{{ ok ? 'YES' : 'NO' }}</div>
    <div>{{ message.split('').reverse().join('') }}</div>

    <!-- 调用方法 -->
    <div>{{ formatDate(date) }}</div>
  </div>
</template>


<!--插值表达式只能包含单个表达式-->
<!--不能使用语句（如if语句）-->
<!--不能访问全局变量（如window）-->
<script>

export default {
  name: 'TemplateInterpolation',

  data() {
    return {
      message: 'Template Interpolation',
      number: 10,       // 新增 number 变量
      ok: true,         // 新增 ok 变量
      date: new Date()  // 新增 date 变量
    }
  },
  methods: {
    formatDate(date) {
      return date.toLocaleDateString()
    }
  }

}
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