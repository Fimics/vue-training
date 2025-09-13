<template>
  <div class="component">
    <h3>{{ message }}</h3>
  </div>
</template>

<script>

export default {
  name: 'LifeCycle',
  data() {
    return {
      message: 'Life Cycle'
    }
  },

// 实例初始化之后，数据观测之前调用
  beforeCreate() {
    console.log('beforeCreate: 实例刚创建，data还未初始化')
  },

// 实例已经创建完成，data已初始化
  created() {
    console.log('created: 数据初始化完成，可以访问data')
    // 适合：发送网络请求、初始化数据
  },

// 挂载开始之前调用
  beforeMount() {
    console.log('beforeMount: 模板编译完成，即将挂载到DOM')
  },

// 实例挂载完成
  mounted() {
    console.log('mounted: DOM挂载完成，可以访问DOM元素')
    // 适合：操作DOM、启动定时器、绑定自定义事件
  },

// 数据更新前调用
  beforeUpdate() {
    console.log('beforeUpdate: 数据更新前')
  },

// 数据更新后调用
  updated() {
    console.log('updated: 数据更新后，DOM已重新渲染')
  },

// 实例销毁前调用
  beforeDestroy() {
    console.log('beforeDestroy: 实例销毁前')
    // 适合：清理定时器、解绑事件、清理订阅
  },

// 实例销毁后调用
  destroyed() {
    console.log('destroyed: 实例已销毁')
  }

}
</script>
