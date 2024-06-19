<template>
  <div>
    <header>
      <nav>
        <ul>
          <li @click="selectedTab = 'TodoList'" :class="{ active: selectedTab === 'TodoList' }">
            Todos
          </li>
          <li
            @click="selectedTab = 'PostComponent'"
            :class="{ active: selectedTab === 'PostComponent' }"
          >
            Post
          </li>
          <li @click="selectedTab = 'AlbumList'" :class="{ active: selectedTab === 'AlbumList' }">
            Albums
          </li>
        </ul>
      </nav>
    </header>
    <main>
      <TodoList v-if="selectedTab === 'TodoList'" />
      <PostComponent v-else-if="selectedTab === 'PostComponent'" />
      <AlbumList v-else-if="selectedTab === 'AlbumList'" />
    </main>
  </div>
</template>

<script>
import TodoList from '../components/TodoList.vue'
import PostComponent from '../components/PostComponent.vue'
import AlbumList from '../components/AlbumList.vue'

export default {
  name: 'HomeView', // Ensure component name is multi-word
  components: {
    TodoList,
    PostComponent,
    AlbumList
  },
  data() {
    return {
      selectedTab: 'TodoList'
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
