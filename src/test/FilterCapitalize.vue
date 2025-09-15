<template>
  <div>
    <h2>过滤器演示</h2>
    <p>全局过滤器: {{ message | capitalize }}</p>  <!-- 使用全局过滤器 -->
    <p>局部过滤器: {{ message | capitalizeLocal }}</p>  <!-- 使用局部过滤器 -->
  </div>
</template>

<script>
export default {
  name: 'FilterCapitalize',
  data() {
    return {
      message: '过滤器演示'  // 默认消息
    };
  },
  filters: {
    capitalizeLocal(value) {  // 局部过滤器
      if (!value) return '';
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    }
  }
};
</script>