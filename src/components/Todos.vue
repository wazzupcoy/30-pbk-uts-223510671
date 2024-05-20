<template>
  <div>
    <h1>Daftar Todos</h1>
    <input type="text" v-model="newTodoText" placeholder="Tambah kegiatan baru..." />
    <button @click="addTodo">Tambah</button>
    <div
      v-for="(todo, index) in todos"
      :key="index"
      class="todo-item"
      :class="{ completed: todo.completed }"
    >
      <input type="checkbox" v-model="todo.completed" /> {{ todo.text }}
      <button @click="editTodo(index)">Edit</button>
      <button @click="deleteTodo(index)">Hapus</button>
      <input
        type="text"
        v-model="editedTodoText"
        v-if="todo.editing"
        @keyup.enter="updateTodo(index)"
        @blur="cancelEdit(index)"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newTodoText: '',
      editedTodoText: '',
      todos: []
    }
  },
  methods: {
    addTodo() {
      if (this.newTodoText.trim() !== '') {
        this.todos.push({ text: this.newTodoText, completed: false, editing: false })
        this.newTodoText = ''
      }
    },
    deleteTodo(index) {
      this.todos.splice(index, 1)
    },
    editTodo(index) {
      this.todos[index].editing = true
      this.editedTodoText = this.todos[index].text
    },
    updateTodo(index) {
      if (this.editedTodoText.trim() !== '') {
        this.todos[index].text = this.editedTodoText
        this.todos[index].editing = false
      }
    },
    cancelEdit(index) {
      this.todos[index].editing = false
      this.editedTodoText = ''
    }
  }
}
</script>

<style scoped>
.todo-item {
  margin-bottom: 10px;
}
.completed {
  text-decoration: line-through;
  color: #888;
}
</style>
