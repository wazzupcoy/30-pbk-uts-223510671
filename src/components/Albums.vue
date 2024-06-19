<template>
  <div>
    <h1>Albums</h1>
    <div class="album-grid">
      <div class="header">ID</div>
      <div class="header">Title</div>
      <div v-for="album in albums" :key="album.id" class="album-row" @click="showPhotos(album.id)">
        <div class="cell">{{ album.id }}</div>
        <div class="cell">{{ album.title }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'AlbumList', // Ubah nama komponen menjadi AlbumList
  data() {
    return {
      albums: []
    }
  },
  methods: {
    async fetchAlbums() {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/albums')
        this.albums = response.data
      } catch (error) {
        console.error('Error fetching albums:', error)
      }
    },
    showPhotos(albumId) {
      // Navigasi ke halaman Photos.vue dengan memberikan albumId sebagai parameter
      this.$router.push({ name: 'Photos', params: { albumId } })
    }
  },
  mounted() {
    this.fetchAlbums()
  }
}
</script>

<style scoped>
body {
  background-color: #333;
  font-family: Arial, sans-serif;
}
h1 {
  text-align: center;
  color: #fff;
  margin-top: 20px;
  font-size: 36px;
}

.album-grid {
  display: grid;
  grid-template-columns: 1fr 4fr;
  gap: 1px;
  margin: 20px auto;
  width: 90%;
  background-color: #fff;
}

.header {
  background-color: #444;
  color: #fff;
  padding: 15px;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
}

.album-row {
  display: contents;
  cursor: pointer;
}

.cell {
  background-color: #555;
  color: #fff;
  padding: 15px;
  text-align: center;
  font-size: 16px;
}

.album-row:hover .cell {
  background-color: #666;
}

.album-row:nth-child(odd) .cell {
  background-color: #777;
}
</style>
