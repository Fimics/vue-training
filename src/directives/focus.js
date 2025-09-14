// src/directives/focus.js
export default {
    inserted(el, { value = true }) {
        value && setTimeout(() => el.focus(), 0)
    },
    update(el, { value, oldValue }) {
        if (value && value !== oldValue) {
            setTimeout(() => el.focus(), 0)
        }
    }
}