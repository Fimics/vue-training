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
      <ConditionRender message="condition-render"/>
      <ListRender message="listRender"/>
      <ArrayRender message="arrayRender"/>
      <FormBase message="formBase"/>
      <ValueBinding message="valueBinding"/>
      <ModifierDemo message="modifier-demo"/>
    </div>
  </div>
</template>

<script>
import "/src/assets/styles/App.css";
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
import ConditionRender from "@/test/ConditionRender.vue";
import ListRender from "@/test/ListRender.vue";
import ArrayRender  from "@/test/ArrayRender.vue";
import FormBase from "@/test/FormBase.vue";
import ValueBinding from "@/test/ValueBinding.vue";
import ModifierDemo from "@/test/ModifierDemo.vue";
// 导入外部样式文件（保留原CSS中的所有注释）

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
    WatchDemo,
    ConditionRender,
    ListRender,
    ArrayRender,
    FormBase,
    ValueBinding,
    ModifierDemo
  }
}
</script>
