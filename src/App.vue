<template>
<!--  这是 Vue 应用的根容器，通常 Vue 会挂载到这个元素上 id="app"通常对应 main.js中的 new Vue({ el: '#app' }) -->
  <div id="app">
<!--    这是一个自定义组件，代表页面的顶部导航栏（如 Logo、菜单、登录状态等）它会在所有页面中固定显示。-->
    <app-header />
    <div class="main-content">
<!--      <router-view name="sidebar">（侧边栏）-->
<!--      这是一个命名路由视图，用于动态加载侧边栏组件。-->
<!--      name="sidebar"表示它会在 Vue Router 配置中匹配 components: { sidebar: SomeSidebarComponent }-->
      <router-view name="sidebar"></router-view>
<!--      <main>（主内容区）-->
      <main>
<!--        <router-view />是默认路由视图，用于加载当前路由对应的主内容组件（如首页、用户页等）。-->
<!--        如果路由配置没有 name，Vue Router 会自动匹配到 <router-view />-->
        <router-view />
      </main>
    </div>
    <app-footer />
  </div>
</template>

<script>
// 从 @/components/layout/AppHeader.vue导入 AppHeader组件。
// @/是 Vue CLI 的别名，通常指向 src/目录
import AppHeader from '@/components/layout/AppHeader.vue'
import AppFooter from '@/components/layout/AppFooter.vue'

export default {
  // 定义组件名称为 App，便于调试和递归调用
  name: 'App',
  components: {
    // 注册局部组件，使 <app-header>和 <app-footer>可以在模板中使用
    AppHeader,
    AppFooter
  }
}
</script>

<style>
/* 整个应用的根容器样式 */
#app {
  /* 使用 Flexbox 布局 */
  display: flex;
  /* 垂直排列子元素（从上到下） */
  flex-direction: column;
  /* 最小高度为整个视口高度（确保页面占满屏幕） */
  min-height: 100vh;
}

/* 主要内容区域的容器样式 */
.main-content {
  /* 使用 Flexbox 布局 */
  display: flex;
  /* 填充剩余空间（使中间内容区域自动拉伸） */
  flex: 1;
}

/* 主内容区的样式 */
main {
  /* 占据 .main-content 的剩余宽度（与侧边栏左右排列） */
  flex: 1;
  /* 内边距，避免内容贴边 */
  padding: 20px;
}
</style>