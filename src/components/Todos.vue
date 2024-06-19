<template>
  <div class="back-container">
    <div class="container">
      <h1>Daftar Todos</h1>
      <div class="input-container">
        <input
          type="text"
          v-model="newTodoText"
          placeholder="Tambah kegiatan baru..."
          class="input-todo"
        />
        <button @click="addTodo" class="btn-add">Tambah</button>
      </div>
      <div class="todos-container">
        <div
          v-for="(todo, index) in todos"
          :key="index"
          class="todo-item"
          :class="{ completed: todo.completed }"
        >
          <div class="todo-text">
            <input type="checkbox" v-model="todo.completed" />
            <span>{{ todo.text }}</span>
          </div>
          <div class="todo-actions">
            <button @click="editTodo(index)" class="btn-edit">Edit</button>
            <button @click="deleteTodo(index)" class="btn-delete">Hapus</button>
          </div>
          <input
            type="text"
            v-model="editedTodoText"
            v-if="todo.editing"
            @keyup.enter="updateTodo(index)"
            @blur="cancelEdit(index)"
            class="input-edit"
          />
        </div>
      </div>
    </div>
  </div>

  <footer>
    <p>Farhan Akbar</p>
    <p>Informatika</p>
    <div class="social">
      <a href="https://www.instagram.com/farhnakbar/"><i class="bx bxl-instagram-alt"></i></a>
      <a href="https://discord.gg/XG85DHBx"><i class="bx bxl-discord-alt"></i></a>
      <a href="https://x.com/GreedHan12"><i class="bx bxl-twitter"></i></a>
    </div>
    <p class="end">&copy; Copy right by HAN</p>
  </footer>
</template>

<script>
export default {
  name: 'TodoList', // Ubah nama komponen menjadi TodoList
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
body {
  margin: 0;
  background-color: #333;
}

footer {
  margin-top: 50px;
  position: relative;
  width: 100%;
  height: 200px;
  background: #101010;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
footer p:nth-child(1) {
  font-size: 30px;
  color: white;
  margin-bottom: 5px;
  font-weight: bold;
}
footer p:nth-child(2) {
  color: white;
  font-size: 17px;
  width: 500px;
  text-align: center;
  line-height: 26px;
}

.social {
  display: flex;
}
.social a {
  width: 45px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: #1a2c50;
  margin: 22px 10px;
  color: white;
  text-decoration: none;
  font-size: 20px;
}
.social a:hover {
  transition: 0.4s;
  transform: scale(1.3);
}
.end {
  position: absolute;
  color: #1a2c50;
  margin-bottom: -6px;
  font-size: 14px;
}

.back-container {
  background-color: #333;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.container {
  color: #333;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f7f7f7;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

h1 {
  text-align: center;
}

.input-container {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.input-todo {
  flex-grow: 1;
  padding: 10px;
  font-size: 16px;
  border: 2px solid #ddd;
  border-radius: 4px;
  margin-right: 10px;
}

.btn-add {
  padding: 10px 20px;
  font-size: 16px;
  background-color: #42a5f5;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.btn-add:hover {
  background-color: #1e88e5;
}

.todos-container {
  display: flex;
  flex-direction: column;
}

.todo-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin-bottom: 10px;
  background-color: white;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.todo-text {
  display: flex;
  align-items: center;
}

.todo-actions {
  display: flex;
  align-items: center;
}

.btn-edit,
.btn-delete {
  margin-left: 10px;
  padding: 5px 10px;
  font-size: 14px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.btn-edit {
  background-color: #ffc107;
  color: white;
}

.btn-edit:hover {
  background-color: #e0a800;
}

.btn-delete {
  background-color: #f44336;
  color: white;
}

.btn-delete:hover {
  background-color: #d32f2f;
}

.input-edit {
  width: 100%;
  padding: 10px;
  margin-top: 10px;
  font-size: 16px;
  border: 2px solid #ddd;
  border-radius: 4px;
}

.completed {
  text-decoration: line-through;
  color: #888;
}
</style>
