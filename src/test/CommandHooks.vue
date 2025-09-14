<template>
  <div>
    <div v-demo:[arg].modifier="color" class="demo-box">
      指令演示元素 (当前颜色: {{ color }})
    </div>
    <button @click="changeColor">切换颜色</button>
    <button @click="toggleElement">移除/添加元素</button>
  </div>
</template>

<script>
export default {
  data: () => ({
    color: 'yellow',
    show: true,
    arg: 'top'
  }),
  methods: {
    changeColor() {
      this.color = this.color === 'yellow' ? 'lightblue' : 'yellow'
    },
    toggleElement() {
      this.show = !this.show
    }
  }
}
</script>

<style>
.demo-box {
  width: 200px;
  height: 100px;
  margin: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.3s;
}
</style>