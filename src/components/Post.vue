<template>
  <div class="post-list-container">
    <h1 class="heading">Daftar Postingan</h1>
    <label for="userSelect" class="user-select-label">Pilih Pengguna:</label>
    <select id="userSelect" v-model="selectedUser" @change="filterPosts" class="user-select">
      <option value="">Semua Pengguna</option>
      <option v-for="user in users" :key="user.id" :value="user.id">{{ user.name }}</option>
    </select>
    <div class="post-list">
      <div v-for="post in filteredPosts" :key="post.id" class="post-item">
        <h3>{{ post.title }}</h3>
        <p>{{ post.body }}</p>
        <hr class="post-divider" />
      </div>
    </div>
  </div>
  <footer class="footer">
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
  name: 'PostListComponent',
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
    },
    filterPosts() {}
  }
}
</script>

<style scoped>
.post-list-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 20px;
  margin-top: 50px;
  background-color: #f0f0f0;
  border-radius: 8px;
}

.heading {
  text-align: center;
  color: #333;
}

.user-select-label {
  display: block;
  margin-bottom: 10px;
  color: #555;
}

.user-select {
  width: 100%;
  padding: 15px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.post-list {
  margin-top: 20px;
}

.post-item {
  background-color: #fff;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 8px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
}

.post-item h3 {
  color: #333;
}

.post-item p {
  color: #666;
}

.post-divider {
  margin-top: 10px;
  margin-bottom: 10px;
  border: 0;
  border-top: 1px solid #ddd;
}

.footer {
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

.footer p:nth-child(1) {
  font-size: 30px;
  color: white;
  margin-bottom: 5px;
  font-weight: bold;
}

.footer p:nth-child(2) {
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
</style>
