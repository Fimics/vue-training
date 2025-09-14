<template>
  <div class="component">
    <h3>{{message}}</h3>
      <ul>
        <li v-for="(item, index) in items" :key="index">{{ item }}</li>
      </ul>

      <h3>变更方法（会改变原数组）</h3>
      <button @click="pushItem">push('葡萄')</button>
      <button @click="popItem">pop()</button>
      <button @click="shiftItem">shift()</button>
      <button @click="unshiftItem">unshift('柠檬')</button>
      <button @click="spliceItems">splice(1,1,'西瓜')</button>
      <button @click="sortItems">sort()</button>
      <button @click="reverseItems">reverse()</button>

      <h3>替换方法（返回新数组）</h3>
      <button @click="filterItems">filter(包含'果')</button>
      <button @click="concatItems">concat(['芒果','草莓'])</button>
      <button @click="sliceItems">slice(0,2)</button>
  </div>
</template>

<script>
export default {
  name: 'ArrayMethodsDemo',
  data() {
    return {
      message:"数组渲染",
      items: ['苹果', '香蕉', '橙子']
    }
  },
  methods: {
    // 变更方法（会改变原数组）
    pushItem() {
      this.items.push('葡萄')
    },
    popItem() {
      this.items.pop()
    },
    shiftItem() {
      this.items.shift()
    },
    unshiftItem() {
      this.items.unshift('柠檬')
    },
    spliceItems() {
      this.items.splice(1, 1, '西瓜')
    },
    sortItems() {
      this.items.sort()
    },
    reverseItems() {
      this.items.reverse()
    },

    // 替换数组（返回新数组）
    filterItems() {
      this.items = this.items.filter(item => item.includes('果'))
    },
    concatItems() {
      this.items = this.items.concat(['芒果', '草莓'])
    },
    sliceItems() {
      this.items = this.items.slice(0, 2)
    }
  }
}
</script>
