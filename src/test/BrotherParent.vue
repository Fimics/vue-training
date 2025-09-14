<template>
  <div class="component">
    <h3>父组件（通信中介） 兄弟组件通信</h3>
    <p>当前共享数据: {{ sharedData }}</p>

    <BrotherA @a-to-b="handleFromA" />
    <BrotherB :received-message="sharedData" />
  </div>
</template>

<script>
import BrotherA from './BrotherA.vue';
import BrotherB from './BrotherB.vue';

export default {
  name: 'ParentComponent',
  components: { BrotherA, BrotherB },
  data() {
    return {
      sharedData: ''
    }
  },
  methods: {
    handleFromA(data) {
      this.sharedData = data;  // 接收A的数据并传递给B
      console.log('中转数据:', data);
    }
  }
}
</script>