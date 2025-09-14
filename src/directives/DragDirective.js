export default {
    bind(el) {  // 去掉 binding 参数
        el.style.position = 'absolute';
        el.style.cursor = 'move';

        let offsetX = 0;
        let offsetY = 0;

        const moveHandler = (e) => {
            el.style.left = (e.clientX - offsetX) + 'px';
            el.style.top = (e.clientY - offsetY) + 'px';
        };

        const upHandler = () => {
            document.removeEventListener('mousemove', moveHandler);
            document.removeEventListener('mouseup', upHandler);
        };

        const downHandler = (e) => {
            const rect = el.getBoundingClientRect();
            offsetX = e.clientX - rect.left;
            offsetY = e.clientY - rect.top;

            document.addEventListener('mousemove', moveHandler);
            document.addEventListener('mouseup', upHandler);
        };

        el.addEventListener('mousedown', downHandler);

        // 存储 handler 以便 unbind 时移除
        el._dragDownHandler = downHandler;
        el._dragMoveHandler = moveHandler;
        el._dragUpHandler = upHandler;
    },

    unbind(el) {
        document.removeEventListener('mousemove', el._dragMoveHandler);
        document.removeEventListener('mouseup', el._dragUpHandler);
        el.removeEventListener('mousedown', el._dragDownHandler);
    }
};