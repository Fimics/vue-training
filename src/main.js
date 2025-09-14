import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// 全局注册组件
Vue.component('button-counter', {
    data() {
        return {
            count: 0
        }
    },
    template: `
    <button @click="count++">
      您点击了 {{ count }} 次 (全局组件)
    </button>
  `
})

new Vue({
  render: h => h(App),
}).$mount('#app')
