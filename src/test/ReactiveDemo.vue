<template>
  <div class="component">
    <h3>{{ message }}</h3>
    <p>用户名：{{ user.name }}，年龄：{{ user.age || '未知' }}</p>
    <ul>
      <li v-for="(item, index) in items" :key="index">{{ item }}</li>
    </ul>
    <button @click="changeMessage">修改消息</button>
    <button @click="addUserAge">添加年龄</button>
    <button @click="updateFirstItem">修改第一项</button>
  </div>
</template>

<script>
export default {
  name: 'ReactiveDemo',
  data() {
    return {
      // 这些数据都是响应式的
      message: 'Hello World',
      user: {
        name: '张三'
        // 注意：age属性尚未定义，后续动态添加
      },
      items: ['苹果', '香蕉']
    }
  },
  created() {
    // 生命周期钩子：实例创建后调用
    console.log('组件已创建')

    // 演示响应式数据修改
    setTimeout(() => {
      this.message = '欢迎来到Vue响应式世界'
      this.items.push('橙子') // 使用数组方法触发响应式更新
    }, 2000)
  },
  methods: {
    changeMessage() {
      // 直接修改响应式数据
      this.message = '消息已改变'
    },
    addUserAge() {
      // ❌ 错误方式：直接添加属性不是响应式的
      // this.user.age = 25

      // ✅ 正确方式：使用Vue.set或this.$set
      this.$set(this.user, 'age', 25)
      console.log('已添加响应式年龄属性')
    },
    updateFirstItem() {
      // ❌ 错误方式：直接通过索引修改数组
      // this.items[0] = '猕猴桃'

      // ✅ 正确方式1：使用Vue.set
      this.$set(this.items, 0, '猕猴桃')

      // ✅ 正确方式2：使用数组变异方法
      // this.items.splice(0, 1, '猕猴桃')
    }
  }
}
// Vue 组件里不需要手动实现 ，因为 Vue 已经自动处理了。
// /*
//  * Vue2响应式原理简化版(实际在组件中不需要实现，这里仅作演示说明)
//  */
// function defineReactive(obj, key, val) {
//   Object.defineProperty(obj, key, {
//     get() {
//       console.log(`获取${key}: ${val}`)
//       return val
//     },
//     set(newVal) {
//       if (newVal !== val) {
//         console.log(`设置${key}: ${newVal}`)
//         val = newVal
//         // 触发视图更新
//         updateView()
//       }
//     }
//   })
// }

// function updateView() {
//   console.log('视图更新了')
// }

</script>

