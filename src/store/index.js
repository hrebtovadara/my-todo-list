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
        list: [
          {
            id: 1,
            boardsId: 1,
            name: 'Дела Леголаса',
            icon: '',
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
              }
            ]
          },
          {
            id: 2,
            boardsId: 1,
            name: 'Гимли, сын Глоина',
            icon: '',
            tasks: [
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
            ]
          }
        ]
      },
      {
        id: 2,
        name: 'Поход Торина Дубощита',
        list: [ {
          id: 3,
          boardsId: 2,
          name: 'Бильбо Беггинс',
          icon: '',
          tasks: [
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
        }]
      }
    ],

  },
  mutations: {
    addNewTask(state, {task, idBoard}) {
      const indexBoard = state.boards.findIndex(elem => elem.id == idBoard.id)
      const indexList = state.boards[indexBoard].list.findIndex(elem => elem.id == task.listId)
      state.boards[indexBoard].list[indexList].tasks.push(task)
      state.data.countTasks++
    },
    changeTask(state, {task, text, idBoard}) {
      const iBoard = state.boards.findIndex(elem => elem.id == idBoard.id)
      const iList = state.boards[iBoard].list.findIndex(elem => elem.id === task.listId)
      let index = state.boards[iBoard].list[iList].tasks.findIndex(elem => elem.id === task.id)
      state.boards[iBoard].list[iList].tasks[index].text = text
    },
    deleteTask(state, {task, idBoard}) {
      const iBoard = state.boards.findIndex(elem => elem.id == idBoard.id)
      const iList = state.boards[iBoard].list.findIndex(elem => elem.id === task.listId)
      let index = state.boards[iBoard].list[iList].tasks.findIndex(elem => elem.id === task.id)
      state.boards[iBoard].list[iList].tasks.splice(index, 1)
    },
    addNewList(state, payload) {
      state.list.push(payload)
      state.data.countLists++
    },
    changeList(state, {list, name}) {
      console.log(list)
      const iBoard = state.boards.findIndex(elem => elem.id == list.boardsId)
      const index = state.boards[iBoard].list.findIndex(elem => elem.id === list.id)
      state.boards[iBoard].list[index].name = name
    },
    deleteList(state, list) {
      const iBoard = state.boards.findIndex(elem => elem.id == list.boardsId)
      const iList= state.boards[iBoard].list.findIndex(elem => elem.id === list.id)
      state.boards[iBoard].list.splice(iList, 1)
    },
    addNewBoard(state, payload) {
      state.boards.push(payload)
      state.data.countBoards++
    },
    changeNameBoard(state, {id, name}) {
      let index = state.boards.findIndex(elem => elem.id === id)
      state.boards[index].name = name
    },
    updateList(state, {value, boardId}) {
      const iBoard = state.boards.findIndex(elem => elem.id == boardId)
      const iList = state.boards[iBoard].list.findIndex(elem => elem.id === value[0].listId)
      state.boards[iBoard].list[iList].tasks = value
    }
  },
  actions: {
  },
  modules: {
  },
  plugins: [createPersistedState()],
  strict: process.env.NODE_ENV !== 'production'
})


