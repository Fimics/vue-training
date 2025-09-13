<template>
  <div id="app">
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
      <WatchDemo message="watch-demo"/>
    </div>
  </div>
</template>

<script>
import FirstVue from "@/test/FirstVue.vue";
import LifeCycle from "@/test/LifeCycle.vue";
import TemplateInterpolation from "@/test/TemplateInterpolation.vue";
import PropBind from "@/test/PropBind.vue";
import CommandIf from "@/test/CommandIf.vue";
import CommandFor from "@/test/CommandFor.vue";
import CommandModel from "@/test/CommandModel.vue";
import CommandOn from "@/test/CommandOn.vue";
import ReactiveDemo from "@/test/ReactiveDemo.vue";
import EventClick from "@/test/EventClick.vue";
import EventKey from "@/test/EventKey.vue";
import ComputedDemo from "@/test/ComputedDemo.vue";
import WatchDemo from "@/test/WatchDemo.vue";

export default {
  name: 'App',
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
    ComputedDemo,
    WatchDemo
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
  width: 100%; /* 确保宽度占满整个浏览器 */
  max-width: 100%; /* 移除最大宽度限制 */
  padding: 0 20px; /* 添加左右内边距 */
  box-sizing: border-box; /* 确保内边距不影响总宽度 */
}

/* 网格布局 */
.component-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr); /* 5列等宽 */
  gap: 20px;
  width: 100%; /* 占满父容器 */
  max-width: 100%; /* 移除最大宽度限制 */
  margin: 0 auto; /* 水平居中 */
  padding: 20px 0; /* 添加上下内边距 */
}

/* 每个组件卡片样式 */
.component-grid > * {
  background: white;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

/* 响应式调整 */
@media (max-width: 1200px) {
  .component-grid {
    grid-template-columns: repeat(4, 1fr); /* 中等屏幕4列 */
  }
}

@media (max-width: 992px) {
  .component-grid {
    grid-template-columns: repeat(3, 1fr); /* 小屏幕3列 */
  }
}

@media (max-width: 768px) {
  .component-grid {
    grid-template-columns: repeat(2, 1fr); /* 平板设备2列 */
  }
}

@media (max-width: 576px) {
  .component-grid {
    grid-template-columns: 1fr; /* 手机设备1列 */
  }
}
</style>