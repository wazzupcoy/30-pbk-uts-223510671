<template>
  <div>
    <header>
      <nav>
        <ul>
          <li @click="selectedTab = 'Todos'" :class="{ active: selectedTab === 'Todos' }">Todos</li>
          <li @click="selectedTab = 'Post'" :class="{ active: selectedTab === 'Post' }">Post</li>
        </ul>
      </nav>
    </header>
    <main>
      <Todos v-if="selectedTab === 'Todos'" />
      <Posts v-else-if="selectedTab === 'Post'" />
    </main>
  </div>
</template>

<script>
import Todos from './components/Todos.vue'
import Posts from './components/Post.vue'

export default {
  components: {
    Todos,
    Posts
  },
  data() {
    return {
      selectedTab: 'Todos'
    }
  }
}
</script>

<style scoped>
header {
  background-color: #333;
  color: #fff;
  padding: 10px;
}
nav ul {
  list-style-type: none;
  padding: 0;
}
nav ul li {
  display: inline;
  margin-right: 10px;
  cursor: pointer;
}
nav ul li.active {
  font-weight: bold;
}
</style>
