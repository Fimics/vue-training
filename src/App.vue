<template>
  <div id="app">
    <app-header />
    <div class="main-content">
      <router-view name="sidebar"></router-view>
      <main>
        <router-view />
      </main>
    </div>
    <app-footer />
  </div>
</template>

<script>
import AppHeader from '@/components/layout/AppHeader.vue'
import AppFooter from '@/components/layout/AppFooter.vue'

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter
  }
}
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.main-content {
  display: flex;
  flex: 1;
}
main {
  flex: 1;
  padding: 20px;
}
</style>