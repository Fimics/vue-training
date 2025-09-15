<template>
  <!-- 加载动画容器，根据isLoading属性决定是否显示 -->
  <div class="loading" v-if="isLoading">
    <!-- 旋转动画元素 -->
    <div class="spinner"></div>
    <!-- 加载提示文本 -->
    <p>加载中...</p>
  </div>
</template>

<script>
export default {
  // 组件名称
  name: 'LoadingPage',

  // 组件属性定义
  props: {
    // 控制加载动画显示/隐藏的属性
    isLoading: {
      type: Boolean,  // 类型为布尔值
      default: false  // 默认值为false（不显示）
    }
  }
}
</script>

<style scoped>
/* 加载动画容器样式 */
.loading {
  position: fixed;  /* 固定定位，覆盖整个视口 */
  top: 0;          /* 贴紧顶部 */
  left: 0;         /* 贴紧左侧 */
  right: 0;        /* 贴紧右侧 */
  bottom: 0;       /* 贴紧底部 */
  background-color: rgba(255, 255, 255, 0.8);  /* 半透明白色背景 */
  display: flex;   /* 弹性布局 */
  flex-direction: column;  /* 垂直排列子元素 */
  justify-content: center;  /* 垂直居中 */
  align-items: center;      /* 水平居中 */
  z-index: 1000;   /* 确保在最上层 */
}

/* 旋转动画样式 */
.spinner {
  width: 50px;     /* 宽度 */
  height: 50px;    /* 高度 */
  border: 5px solid #f3f3f3;  /* 浅灰色边框 */
  border-top: 5px solid #3498db;  /* 顶部蓝色边框（形成旋转效果） */
  border-radius: 50%;  /* 圆形 */
  animation: spin 1s linear infinite;  /* 应用旋转动画 */
  margin-bottom: 10px;  /* 底部间距 */
}

/* 旋转动画关键帧定义 */
@keyframes spin {
  0% {
    transform: rotate(0deg);  /* 起始角度0度 */
  }
  100% {
    transform: rotate(360deg);  /* 结束角度360度（完整旋转） */
  }
}
</style>