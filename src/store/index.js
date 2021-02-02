import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    data: {
      countBoards: 2,
      countTasks: 4,
      boards: [
        {
          id: 1,
          name: 'Досочка 1',
          icon: ''
        }
      ],
      tasks: [
        {
          id: 1,
          boardId: 1,
          text: 'погладить котика',
          status: ' ',
        },
        {
          id: 2,
          boardId: 1,
          text: 'погладить котика',
          status: ' ',
        },
        {
          id: 3,
          boardId: 1,
          text: 'погладить котика',
          status: ' ',
        },
      ]
    }
  },
  mutations: {

  },
  actions: {

  },
  modules: {
  }
})
