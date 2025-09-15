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

<script>
export default {
  name: 'ParentPage',
  methods: {
    goBack() {
      if (window.history.length > 1) {
        this.$router.go(-1)
      } else {
        this.$router.push('/')
      }
    }
  }
}
</script>