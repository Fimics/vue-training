<template>
  <div class="dynamic-slot-container">
    <header v-if="hasHeaderSlot">
      <slot name="header"></slot>
    </header>

    <main>
      <slot name="content">
        <p>默认内容区域</p>
      </slot>
    </main>

    <footer v-if="hasFooterSlot">
      <slot name="footer"></slot>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'SlotDynamic',
  computed: {
    hasHeaderSlot() {
      return !!this.$slots.header
    },
    hasFooterSlot() {
      return !!this.$slots.footer
    }
  }
}
</script>

<style scoped>
.dynamic-slot-container {
  border: 1px solid #eaeaea;
  border-radius: 4px;
  padding: 20px;
  margin: 20px 0;
}

header {
  background-color: #f0f0f0;
  padding: 10px;
  margin-bottom: 15px;
  border-radius: 4px;
}

main {
  padding: 15px;
  background-color: #f9f9f9;
  border-radius: 4px;
  margin-bottom: 15px;
}

footer {
  background-color: #f0f0f0;
  padding: 10px;
  border-radius: 4px;
}
</style>