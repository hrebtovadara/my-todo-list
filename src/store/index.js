import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    data: {
      countBoards: 3,
      countLists: 4,
      countTasks: 12,
    },
    boards: [
      {
        id: 1,
        name: 'Братство кольца',
        color: '#f1e1eb'
      },
      {
        id: 2,
        name: 'Поход Торина Дубощита',
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
        boardsId: 1,
        name: 'Гимли, сын Глоина',
        icon: ''
      },
      {
        id: 3,
        boardsId: 2,
        name: 'Бильбо Беггинс',
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
        id: 5,
        listId: 2,
        text: 'Прибыть в Ривенделл',
        status: ' ',
      },
      {
        id: 6,
        listId: 2,
        text: 'Уничтожить кольцо',
        status: ' ',
      },
      {
        id: 7,
        listId: 2,
        text: 'Попросить прядь волос Галадриэль',
        status: ' ',
      },
      {
        id: 8,
        listId: 2,
        text: 'Перебить больше орков, чем эльф',
        status: ' ',
      },
      {
        id: 9,
        listId: 3,
        text: 'Угостить гномов ужином',
        status: ' ',
      },
      {
        id: 10,
        listId: 3,
        text: 'Не забыть носовой платок!',
        status: ' ',
      },
      {
        id: 11,
        listId: 3,
        text: 'Отправиться в нежданное путешествие',
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
  plugins: [createPersistedState()],
  strict: process.env.NODE_ENV !== 'production'
})


