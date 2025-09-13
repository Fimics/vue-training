<template>
  <div id="app">
<!--    <img alt="Vue logo" src="./assets/logo.png">-->
    <div class="component-grid">
      <FirstVue message="hello world11"/>
      <LifeCycle/>
      <TemplateInterpolation message="TI"/>
      <PropBind message="prop"/>
      <CommandIf message="command if"/>
      <CommandFor message="command for"/>
      <CommandModel message="command model"/>
      <CommandOn message="command on"/>
      <ReactiveDemo message="reactive demo"/>
      <EventClick message="event click"/>
      <EventKey message="event key"/>
      <ComputedDemo message="computed demo"/>
    </div>
  </div>
</template>

<script>

// import HelloWorld from './components/HelloWorld.vue'
import FirstVue from "@/test/FirstVue.vue";
import LifeCycle from "@/test/LifeCycle.vue";
import TemplateInterpolation  from "@/test/TemplateInterpolation.vue";
import PropBind  from "@/test/PropBind.vue";
import CommandIf from "@/test/CommandIf.vue";
import CommandFor  from "@/test/CommandFor.vue";
import CommandModel from "@/test/CommandModel.vue";
import CommandOn from "@/test/CommandOn.vue";
import ReactiveDemo from "@/test/ReactiveDemo.vue";
import EventClick from "@/test/EventClick.vue";
import EventKey from "@/test/EventKey.vue";
import ComputedDemo from "@/test/ComputedDemo.vue";


export default {
  name: 'App',
  // components: {
  //   HelloWorld
  // }
  components: {
    PropBind,
    LifeCycle,
    FirstVue,
    TemplateInterpolation,
    CommandIf,
    CommandFor,
    CommandModel,
    CommandOn,
    ReactiveDemo,
    EventClick,
    EventKey,
    ComputedDemo
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

/* 3列网格布局 */
.component-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3列等宽 */
  gap: 20px; /* 列间距和行间距 */
  padding: 20px;
  max-width: 1200px; /* 限制最大宽度 */
  margin: 0 auto; /* 水平居中 */
}

/* 每个组件卡片样式 */
.component-grid > * {
  background: white;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

/* 响应式：小屏幕改为1列 */
@media (max-width: 768px) {
  .component-grid {
    grid-template-columns: 1fr;
  }
}
</style>
