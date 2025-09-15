<template>
  <div class="parent">
    <h1>父组件</h1>
    <nav>
      <router-link :to="{ name: 'ParentDefault' }">默认</router-link>
      <router-link to="/parent/child">子组件</router-link>
    </nav>
    <router-view />
  </div>
</template>