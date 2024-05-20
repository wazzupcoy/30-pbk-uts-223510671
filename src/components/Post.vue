<template>
  <div>
    <h1>Daftar Postingan</h1>
    <label for="userSelect">Pilih Pengguna:</label>
    <select id="userSelect" v-model="selectedUser" @change="filterPosts">
      <option value="">Semua Pengguna</option>
      <option v-for="user in users" :key="user.id" :value="user.id">{{ user.name }}</option>
    </select>
    <div v-for="post in filteredPosts" :key="post.id">
      <h3>{{ post.title }}</h3>
      <p>{{ post.body }}</p>
      <hr />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedUser: '',
      users: [],
      posts: []
    }
  },
  mounted() {
    this.getUsers()
    this.getPosts()
  },
  computed: {
    filteredPosts() {
      if (!this.selectedUser) {
        return this.posts
      }
      return this.posts.filter((post) => post.userId === parseInt(this.selectedUser))
    }
  },
  methods: {
    async getUsers() {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        this.users = data
      } catch (error) {
        console.error('Error fetching users:', error)
      }
    },
    async getPosts() {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await response.json()
        this.posts = data
      } catch (error) {
        console.error('Error fetching posts:', error)
      }
    }
  }
}
</script>

<style scoped>
/* Add necessary styles here */
</style>
