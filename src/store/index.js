import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    data: {
      countBoards: 2,
      countTasks: 5,
    },
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
        text: 'погладить котика1',
        status: ' ',
      },
      {
        id: 2,
        boardId: 1,
        text: 'погладить котика2',
        status: ' ',
      },
      {
        id: 3,
        boardId: 1,
        text: 'погладить котика3',
        status: ' ',
      },
      {
        id: 4,
        boardId: 2,
        text: 'погладить котика',
        status: ' ',
      },
    ]
  },
  mutations: {

  },
  actions: {

  },
  modules: {
  }
})
