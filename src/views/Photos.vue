<template>
  <div class="container">
    <h1>{{ album.title }} Photo Gallery</h1>
    <ul class="thumbnails">
      <li v-for="photo in photos" :key="photo.id">
        <div class="thumbnail-wrapper">
          <img
            :src="photo.thumbnailUrl"
            :class="{ selected: selectedPhoto === photo }"
            @click="showFullSize(photo)"
            alt="Thumbnail"
          />
        </div>
      </li>
    </ul>

    <!-- Tampilan foto dalam ukuran sebenarnya -->
    <div class="full-size-container" v-if="selectedPhoto">
      <img :src="selectedPhoto.url" class="full-size" @click="selectedPhoto = null" />
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'PhotoGalleryComponent', // Ensure component name is multi-word
  props: {
    albumId: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      album: {},
      photos: [],
      selectedPhoto: null
    }
  },
  methods: {
    async fetchAlbum() {
      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/albums/${this.albumId}`
        )
        this.album = response.data
      } catch (error) {
        console.error(`Error fetching album ${this.albumId}:`, error)
      }
    },
    async fetchPhotos() {
      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/photos?albumId=${this.albumId}`
        )
        this.photos = response.data
      } catch (error) {
        console.error(`Error fetching photos for album ${this.albumId}:`, error)
      }
    },
    showFullSize(photo) {
      this.selectedPhoto = photo
    }
  },
  watch: {
    albumId: {
      immediate: true,
      handler() {
        this.fetchAlbum()
        this.fetchPhotos()
        this.selectedPhoto = null
      }
    }
  }
}
</script>

<style scoped>
.container {
  margin: 0 auto;
  padding: 20px;
  background-color: #333;
  color: white;
}

h1 {
  text-align: center;
}

.thumbnails {
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.thumbnail-wrapper {
  margin: 10px;
  padding: 10px;
  border: 2px solid #ccc;
  border-radius: 5px;
}

.thumbnail-wrapper:hover {
  cursor: pointer;
}

.thumbnail-wrapper img {
  max-width: 100px;
  transition: transform 0.2s;
}

.thumbnail-wrapper img.selected {
  transform: scale(1.5);
  z-index: 1;
}

.full-size-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
}

.full-size {
  max-width: 90%;
  max-height: 90%;
  object-fit: contain;
  cursor: pointer;
}
</style>
