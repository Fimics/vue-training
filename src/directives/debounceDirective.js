// src/directives/debounceDirective.js 防抖指令
export default {
    bind(el, binding) {
        let timer;
        let delay = parseInt(binding.arg) || 1000; // 允许自定义延迟时间

        el.addEventListener('click', (event) => {
            if (timer) {
                clearTimeout(timer);
            }

            // 阻止事件冒泡
            if (binding.modifiers.stop) {
                event.stopPropagation();
            }

            timer = setTimeout(() => {
                binding.value(event); // 传递事件对象
            }, delay);
        });
    },

    unbind(el) {
        // 组件卸载时移除事件监听
        el.removeEventListener('click');
    }
};