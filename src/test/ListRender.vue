<template>
  <div class="component">
    <!-- 基础列表渲染 -->
    <h3>{{ message }}</h3>
    <ul>
      <li v-for="item in items" :key="item.id">
        {{ item.message }}
      </li>
    </ul>

    <!-- 嵌套循环 -->
    <ul>
      <li v-for="item in items" :key="item.id">
        {{ item.message }}
        <ul>
          <li v-for="subItem in item.children" :key="subItem.id">
            {{ subItem.name }}
          </li>
        </ul>
      </li>
    </ul>

    <!-- 在组件上使用v-for -->
    <my-component
        v-for="item in items"
        :key="item.id"
        :item="item">
    </my-component>

    <!-- 数组更新检测 -->
    <button @click="addItem">添加项目</button>
    <button @click="removeItem">删除项目</button>
    <button @click="updateItem">更新项目</button>
  </div>
</template>

<script>
export default {
  name: "ListRender",
  data() {
    return {
      message: "列表渲染",
      items: [
        {
          id: 1,
          message: 'Foo',
          children: [
            { id: 11, name: 'Child 1' },
            { id: 12, name: 'Child 2' }
          ]
        },
        {
          id: 2,
          message: 'Bar',
          children: [
            { id: 21, name: 'Child 3' }
          ]
        }
      ]
    }
  },
  methods: {
    addItem() {
      this.items.push({
        id: Date.now(),
        message: 'New Item',
        children: []
      })
    },
    removeItem() {
      this.items.pop()
    },
    updateItem() {
      // ✅ 触发更新的方法
      this.items.splice(0, 1, {
        id: 999,
        message: 'Updated Item',
        children: []
      })

      // ❌ 不会触发更新
      // this.items[0] = { id: 999, message: 'Updated Item' }
    }
  }
}
</script>