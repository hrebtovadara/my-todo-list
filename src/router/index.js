import Vue from 'vue'
import VueRouter from 'vue-router'
import Todo from '../views/Todo.vue'
import Home from '../views/Home.vue'


Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/board/1' },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/board/:id',
    component: Todo,
    name: 'board'
  }
]

const router = new VueRouter({
  routes
})

export default router
