<template>
  <div class="form-container">
    <h3>{{message}}</h3>

    <!-- 文本输入 -->
    <div class="form-row">
      <div class="form-group">
        <label>消息：</label>
        <input v-model="message" placeholder="请输入消息">
        <p class="preview">消息是：{{ message }}</p>
      </div>

      <!-- 多行文本 -->
      <div class="form-group">
        <label>多行消息：</label>
        <textarea v-model="multilineMessage" placeholder="请输入多行消息"></textarea>
        <p class="preview" style="white-space: pre-line;">{{ multilineMessage }}</p>
      </div>
    </div>

    <!-- 复选框 -->
    <div class="form-row">
      <div class="form-group">
        <label class="checkbox-label">
          <input type="checkbox" v-model="checked">
          <span>复选框状态：{{ checked }}</span>
        </label>
      </div>

      <!-- 多个复选框 -->
      <div class="form-group">
        <label>多选名字：</label>
        <div class="checkbox-group">
          <label class="checkbox-label">
            <input type="checkbox" value="Jack" v-model="checkedNames">
            <span>Jack</span>
          </label>
          <label class="checkbox-label">
            <input type="checkbox" value="John" v-model="checkedNames">
            <span>John</span>
          </label>
          <label class="checkbox-label">
            <input type="checkbox" value="Mike" v-model="checkedNames">
            <span>Mike</span>
          </label>
        </div>
        <p class="preview">选中的名字：{{ checkedNames }}</p>
      </div>
    </div>

    <!-- 单选按钮 -->
    <div class="form-row">
      <div class="form-group">
        <label>单选：</label>
        <div class="radio-group">
          <label class="radio-label">
            <input type="radio" value="One" v-model="picked">
            <span>One</span>
          </label>
          <label class="radio-label">
            <input type="radio" value="Two" v-model="picked">
            <span>Two</span>
          </label>
        </div>
        <p class="preview">选中：{{ picked }}</p>
      </div>

      <!-- 选择框 -->
      <div class="form-group">
        <label>下拉选择：</label>
        <select v-model="selected">
          <option disabled value="">请选择</option>
          <option>A</option>
          <option>B</option>
          <option>C</option>
        </select>
        <p class="preview">选中：{{ selected }}</p>
      </div>
    </div>

    <!-- 多选框 -->
    <div class="form-row">
      <div class="form-group">
        <label>多选下拉：</label>
        <select v-model="selectedMultiple" multiple>
          <option>A</option>
          <option>B</option>
          <option>C</option>
        </select>
        <p class="preview">选中：{{ selectedMultiple }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FormBase",
  data() {
    return {
      message: '表单基础',
      multilineMessage: '',
      checked: false,
      checkedNames: [],
      picked: '',
      selected: '',
      selectedMultiple: []
    }
  }
}
</script>

<style scoped>
.form-container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
}

.form-row {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 20px;
}

.form-group {
  flex: 1;
  min-width: 300px;
  padding: 15px;
  border: 1px solid #eee;
  border-radius: 5px;
  background-color: #f9f9f9;
}

label {
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
}

input[type="text"],
textarea,
select {
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

select[multiple] {
  height: 100px;
}

.checkbox-group, .radio-group {
  display: flex;
  gap: 15px;
  margin-bottom: 10px;
}

.checkbox-label, .radio-label {
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: normal;
  cursor: pointer;
}

.preview {
  margin-top: 10px;
  padding: 8px;
  background-color: #f0f0f0;
  border-radius: 4px;
  font-size: 14px;
}
</style>