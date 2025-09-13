<template>
  <div>
    <h1>{{ message }}</h1>
    <h2>{{ fullName }}</h2>
    <h3>购物车总价: {{ totalPrice }} 元</h3>
    <button @click="changeMessage">改变消息</button>
    <button @click="updateName">更新姓名</button>

    <div v-for="item in items" :key="item.id">
      {{ item.name }} - 单价: {{ item.price }} 元 × {{ item.quantity }} = {{ itemSubtotal(item) }}
    </div>
  </div>
</template>

<!--计算属性 vs 方法的区别：-->

<!--计算属性基于响应式依赖进行缓存，只有依赖发生改变时才会重新求值-->
<!--方法每次调用都会执行函数-->

<script>
export default {
  name: 'ComputedDemo',
  data() {
    return {
      message: 'Computed 计算属性',
      firstName: '张',
      lastName: '三',
      items: [
        { id: 1, name: '苹果', price: 10, quantity: 2 },
        { id: 2, name: '香蕉', price: 5, quantity: 3 }
      ]
    }
  },
  computed: {
    // 计算全名（响应式依赖缓存）
    fullName() {
      return this.firstName + ' ' + this.lastName
    },

    // 计算购物车总价（自动跟踪items变化）
    totalPrice() {
      console.log('计算总价...') // 仅当items变化时才会执行
      return this.items.reduce((total, item) => {
        return total + item.price * item.quantity
      }, 0)
    },

    // 可写计算属性
    fullNameWritable: {
      get() {
        return this.firstName + ' ' + this.lastName
      },
      set(newValue) {
        const names = newValue.split(' ')
        this.firstName = names[0]
        this.lastName = names[names.length - 1] || ''
      }
    }
  },
  methods: {
    changeMessage() {
      this.message = '消息已改变'
    },

    updateName() {
      // 使用可写计算属性
      this.fullNameWritable = '李 四'
    },

    // 方法计算（无缓存，每次渲染都会调用）
    itemSubtotal(item) {
      return item.price * item.quantity
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
  margin: 5px;
}
</style>