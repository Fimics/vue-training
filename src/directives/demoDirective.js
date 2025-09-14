// src/directives/demoDirective.js
export default {
    bind(el, binding, vnode) {
        console.log('bind', {
            el,
            value: binding.value,
            modifiers: binding.modifiers,
            vnode
        })
        el.style.border = '2px solid red'
    },
    inserted(el) {
        console.log('inserted', el)
        el.style.padding = '10px'
    },
    update(el, binding) {
        console.log('update', binding.value)
        el.style.backgroundColor = binding.value || 'yellow'
    },
    componentUpdated(el) {
        console.log('componentUpdated', el)
    },
    unbind(el) {
        console.log('unbind', el)
        el.style.border = 'none'
        el.style.padding = ''
        el.style.backgroundColor = ''
    }
}