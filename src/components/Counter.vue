<template>
  <div class="counter">
    <h2>Counter Example</h2>

    <!-- 显示计数 -->
    <p>Count: {{ count }}</p>
    <p>Double Count: {{ doubleCount }}</p>
    <p>Count + 5: {{ countPlusFive }}</p>

    <!-- 操作按钮 -->
    <div class="buttons">
      <button @click="increment">Increment</button>
      <button @click="incrementBy(5)">Increment by 5</button>
      <button @click="incrementAsync">Increment Async (1s)</button>
      <button @click="reset">Reset</button>
    </div>

    <!-- 双向绑定示例 -->
    <div class="custom-input">
      <label for="customCount">Set Count:</label>
      <input
          id="customCount"
          v-model.number="localCount"
          type="number"
      />
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'

export default {
  name: 'CounterPage',
  computed: {
    // 映射Vuex状态
    ...mapState(['count']),

    // 映射Vuex getters
    ...mapGetters(['doubleCount', 'countPlusParam']),

    // 计算属性
    countPlusFive() {
      return this.countPlusParam(5)
    },

    // 双向绑定的计算属性
    localCount: {
      get() {
        return this.count
      },
      set(value) {
        this.$store.commit('INCREMENT_BY', value - this.count)
      }
    }
  },
  methods: {
    // 映射Vuex mutations
    ...mapMutations(['INCREMENT', 'INCREMENT_BY']),

    // 映射Vuex actions
    ...mapActions(['incrementAsync']),

    // 自定义方法
    increment() {
      this.INCREMENT()
    },

    incrementBy(amount) {
      this.INCREMENT_BY(amount)
    },

    reset() {
      this.INCREMENT_BY(-this.count)
    }
  }
}
</script>

<style scoped>
.counter {
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  text-align: center;
}

.buttons {
  margin: 20px 0;
}

button {
  margin: 0 5px;
  padding: 5px 10px;
}

.custom-input {
  margin-top: 15px;
}

input {
  padding: 5px;
  margin-left: 10px;
}
</style>