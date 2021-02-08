import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    data: {
      countBoards: 3,
      countLists: 3,
      countTasks: 5,
    },
    boards: [
      {
        id: 1,
        name: 'Эльфы Средиземья',
        color: '#f1e1eb'
      },
      {
        id: 2,
        name: 'asdfg',
        color: '#c5c3f1'
      }
    ],
    list: [
      {
        id: 1,
        boardsId: 1,
        name: 'Дела Леголаса',
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
        text: 'Принять участие в совете в Ривенделле',
        status: ' ',
      },
      {
        id: 2,
        listId: 1,
        text: 'Помочь Фродо',
        status: ' ',
      },
      {
        id: 3,
        listId: 1,
        text: 'Найти и спасти Мерри и Пиппина',
        status: ' ',
      },
      {
        id: 4,
        listId: 1,
        text: 'Принять участие в Битве у Хельмовой Пади',
        status: ' ',
      },
      {
        id: 4,
        listId: 2,
        text: 'ыффпварпро',
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
    },
    addNewBoard(state, payload) {
      state.boards.push(payload)
      state.data.countBoards++
    },
    changeNameBoard(state, {id, name}) {
      let index = state.boards.findIndex(elem => elem.id === id)
      state.boards[index].name = name

    }
  },
  actions: {
  },
  modules: {
  },
  strict: process.env.NODE_ENV !== 'production'
})


