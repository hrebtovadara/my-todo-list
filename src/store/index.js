import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    data: {
      countBoards: 2,
      countCard: 2,
      countTasks: 5,
    },
    boards: [
      {
        id: 1,
        name: 'Досочка 1',
        icon: ''
      },
      {
        id: 2,
        name: 'Досочка 2',
        icon: ''
      }
    ],
    cards: [
      {
        id: 1,
        boardsId: 1,
        name: 'Карточка 1',
        icon: ''
      }
    ],
    tasks: [
      {
        id: 1,
        cardsId: 1,
        text: 'погладить котика1',
        status: ' ',
      },
      {
        id: 2,
        cardsId: 1,
        text: 'погладить котика2',
        status: ' ',
      },
      {
        id: 3,
        cardsId: 1,
        text: 'погладить котика3',
        status: ' ',
      },
      {
        id: 4,
        cardsId: 2,
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
