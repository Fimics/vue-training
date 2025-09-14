// src/mixins/myMixin.js
export default {
    data() {
        return {
            message: 'hello',
            foo: 'abc'
        }
    },
    created() {
        console.log('混入对象的钩子被调用')
    },
    methods: {
        fooMethod() {  // 修改方法名避免与data属性冲突
            console.log('foo from mixin')
        },
        conflicting() {
            console.log('from mixin')
        }
    }
}