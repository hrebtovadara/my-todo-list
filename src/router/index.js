import Vue from 'vue'
import VueRouter from 'vue-router'
import Todo from '../views/Todo.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'home',
    component: Todo
  },
  {
    path: '/board',
    name: 'todo',
    component: Todo
  }
]

const router = new VueRouter({
  routes
})

export default router
