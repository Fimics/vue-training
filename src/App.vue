<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
<!--    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <FirstVue message ="hello world11"/>
    <LifeCycle/>
    <TemplateInterpolation message="TI"/>
    <PropBind message="prop"/>
    <CommandIf message="command if"/>
    <CommandFor message="command for"/>
    <CommandModel message="command model"/>
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
    CommandModel
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
</style>
