<template>
  <div>
    <h1>{{ message }}</h1>
    <div>
      <p>Ask a yes/no question:
        <input v-model.trim="question" />
      </p>
      <p>{{ answer }}</p>
    </div>
    <div>
      <p>User Name: {{ user.name }}</p>
      <p>User Age: {{ user.profile.age }}</p>
    </div>
    <button @click="changeUserName">Change User Name</button>
  </div>
</template>

<script>
import { debounce } from 'lodash';

export default {
  name: 'FirstVue',
  data() {
    return {
      message: 'Hello World',
      question: '',
      answer: 'I cannot give you an answer until you ask a question!',
      user: {
        name: '张三',
        profile: {
          age: 25
        }
      }
    }
  },
  watch: {
    question: {
      handler(newQuestion, oldQuestion) {
        console.log(`问题从 "${oldQuestion}" 变为 "${newQuestion}"`);
        this.answer = 'Waiting for you to stop typing...';
        this.debouncedGetAnswer();
      },
      immediate: true
    },

    'user.name'(newName, oldName) {
      console.log(`用户名从 "${oldName}" 改为 "${newName}"`);
    },

    user: {
      handler(newUser, oldUser) {
        console.log('用户对象发生变化:', {
          oldUser: oldUser,
          newUser: newUser
        });
      },
      deep: true
    }
  },
  created() {
    this.debouncedGetAnswer = debounce(this.getAnswer, 500);
    this.$once('hook:beforeDestroy', () => {
      this.debouncedGetAnswer.cancel();
    });
  },
  methods: {
    getAnswer() {
      if (this.question.trim() === '') {
        this.answer = 'Please enter a question';
        return;
      }

      if (!this.question.includes('?')) {
        this.answer = 'Questions usually contain a question mark. ;-)';
        return;
      }

      this.answer = 'Thinking...';
      setTimeout(() => {
        this.answer = 'Yes, it is a good question!';
      }, 1000);
    },
    changeUserName() {
      this.user.name = this.user.name === '张三' ? '李四' : '张三';
    }
  }
}
</script>

<style scoped>
h1 {
  color: red;
  margin-bottom: 20px;
}

button {
  background-color: blue;
  color: white;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 10px;
}

button:hover {
  background-color: #0069d9;
}

input {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
</style>