<template>
  <div class="container">
    <header>
      <slot name="header"></slot>
    </header>

    <main>
      <slot>
        <p>默认内容，当没有提供内容时显示</p>
      </slot>
    </main>

    <footer>
      <slot name="footer"></slot>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'BaseLayout'
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  height: auto; /* 改为自动高度 */
  min-height: 100vh; /* 可选，根据需要保留或删除 */
}

header {
  background-color: #f5f5f5;
  padding: 20px;
  text-align: center;
  flex-shrink: 0; /* 防止header被压缩 */
}

main {
  flex: 0.5; /* 改为1而不是10，更合理的分配比例 */
  padding: 20px;
  overflow-y: auto; /* 添加滚动条如果内容过多 */
}

footer {
  background-color: #f5f5f5;
  padding: 10px;
  text-align: center;
  flex-shrink: 0; /* 防止footer被压缩 */
}
</style>