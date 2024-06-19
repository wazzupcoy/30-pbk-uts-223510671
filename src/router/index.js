import { createRouter, createWebHistory } from 'vue-router'
import Todos from '../components/Todos.vue'
import Post from '../components/Post.vue'
import Albums from '../components/Albums.vue'
import Photos from '../views/Photos.vue'

const routes = [
  {
    path: '/todos',
    name: 'Todos',
    component: Todos
  },
  {
    path: '/post',
    name: 'Post',
    component: Post
  },
  {
    path: '/albums',
    name: 'Albums',
    component: Albums
  },
  {
    path: '/albums/:albumId/photos',
    name: 'Photos',
    component: Photos,
    props: true
  },
  {
    path: '/',
    redirect: '/albums'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
