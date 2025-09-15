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


<!-- 在双花括号中 -->
<!--{{ message | capitalize }}-->

<!-- 在 v-bind 中 -->
<!--<div v-bind:id="rawId | formatId"></div>-->
//2.
<!--过滤器链-->
<!--{{ message | filterA | filterB }}-->
//3.
<!--Vue.filter('truncate', function (value, length = 10, suffix = '...') {-->
<!--if (!value) return ''-->
<!--if (value.length <= length) return value-->
<!--return value.substring(0, length) + suffix-->
<!--})-->

<!-- 使用参数 -->
<!--{{ message | truncate(20, '..') }}-->

// 数字格式化
<!--Vue.filter('currency', function (value, currency = '¥') {-->
<!--if (!value) return ''-->
<!--return currency + value.toFixed(2)-->
<!--})-->

<!--// 日期格式化-->
<!--Vue.filter('date', function (value, format = 'YYYY-MM-DD') {-->
<!--if (!value) return ''-->
<!--return moment(value).format(format)-->
<!--})-->

<!--// 文件大小格式化-->
<!--Vue.filter('fileSize', function (bytes) {-->
<!--if (!bytes) return '0 B'-->

<!--const k = 1024-->
<!--const sizes = ['B', 'KB', 'MB', 'GB', 'TB']-->
<!--const i = Math.floor(Math.log(bytes) / Math.log(k))-->

<!--return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]-->
<!--})-->

<!--// 高亮搜索文本-->
<!--Vue.filter('highlight', function (value, search) {-->
<!--if (!search) return value-->
<!--const regex = new RegExp(`(${search})`, 'gi')-->
<!--return value.replace(regex, '<mark>$1</mark>')-->
<!--})-->

<!--// 数组连接-->
<!--Vue.filter('join', function (value, separator = ', ') {-->
<!--if (!Array.isArray(value)) return value-->
<!--return value.join(separator)-->
<!--})-->

<!--&lt;!&ndash; 使用示例 &ndash;&gt;-->
<!--<p>价格: {{ price | currency('$') }}</p>-->
<!--<p>日期: {{ date | date('YYYY年MM月DD日') }}</p>-->
<!--<p>文件大小: {{ fileSize | fileSize }}</p>-->
<!--<p v-html="content | highlight(searchText)"></p>-->
<!--<p>标签: {{ tags | join(' | ') }}</p>-->