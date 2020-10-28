import Vue from 'vue'
import VueRouter from 'vue-router'
import Todo from '../views/Todo.vue'
import Done from '../views/Done'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'todo',
    component: Todo
  },
  {
    path: '/done',
    name: 'Done',
    component: Done
  }
]

const router = new VueRouter({
  routes
})

export default router
