// Vue.directive('permission', {
//     inserted(el, binding) {
//         const { value } = binding
//         const userPermissions = store.getters.permissions
//
//         if (value && !userPermissions.includes(value)) {
//             el.parentNode && el.parentNode.removeChild(el)
//         }
//     },
//     update(el, binding) {
//         const { value, oldValue } = binding
//         if (value !== oldValue) {
//             const userPermissions = store.getters.permissions
//             if (value && !userPermissions.includes(value)) {
//                 el.parentNode && el.parentNode.removeChild(el)
//             }
//         }
//     }
// })