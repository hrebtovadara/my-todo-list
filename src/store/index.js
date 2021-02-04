import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    data: {
      countBoards: 2,
      countLists: 3,
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
    list: [
      {
        id: 1,
        boardsId: 1,
        name: 'Карточка 1',
        icon: ''
      },
      {
        id: 2,
        boardsId: 2,
        name: 'Карточка 2',
        icon: ''
      }
    ],
    tasks: [
      {
        id: 1,
        listId: 1,
        text: 'таск 1',
        status: ' ',
      },
      {
        id: 2,
        listId: 1,
        text: 'таск 2',
        status: ' ',
      },
      {
        id: 3,
        listId: 1,
        text: 'таск 3',
        status: ' ',
      },
      {
        id: 4,
        listId: 2,
        text: 'погладить котика',
        status: ' ',
      },
    ]
  },
  mutations: {
    addNewTask(state, payload) {
      state.tasks.push(payload)
      state.data.countTasks++
    },
    changeTask(state, {id, text}) {
      let index = state.tasks.findIndex(elem => elem.id === id)
      state.tasks[index].text = text
    },
    deleteTask(state, id) {
      state.tasks.splice(state.tasks.findIndex(elem => elem.id === id), 1)
    },
    addNewList(state, payload) {
      state.list.push(payload)
      state.data.countLists++
    },
    changeList(state, {id, name}) {
      let index = state.list.findIndex(elem => elem.id === id)
      state.list[index].name = name
    },
    deleteList(state, id) {
      state.list.splice(state.list.findIndex(elem => elem.id === id), 1)
    }
  },
  actions: {

  },
  modules: {
  }
})
