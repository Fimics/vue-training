// Vue.directive('lazy', {
//     bind(el, binding) {
//         const observer = new IntersectionObserver((entries) => {
//             entries.forEach(entry => {
//                 if (entry.isIntersecting) {
//                     el.src = binding.value
//                     observer.unobserve(el)
//                 }
//             })
//         })
//         observer.observe(el)
//     }
// })
//
// <!-- 使用指令 -->
// <button v-debounce="handleClick">防抖按钮</button>
// <div v-drag>可拖拽元素</div>
// <button v-permission="'admin'">管理员按钮</button>
// <img v-lazy="imageUrl" src="placeholder.jpg">