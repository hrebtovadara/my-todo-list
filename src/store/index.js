import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

function searchIndex(state, { boardId, listId, taskId }, returnIndex = false) {
  const boardIndex = state.boards.findIndex((elem) => elem.id == boardId)
  if (!~boardIndex) return
  const board = state.boards[boardIndex]
  if (!listId) return returnIndex ? boardIndex : board
  const listIndex = board.list.findIndex((elem) => elem.id == listId)
  if (!~listIndex) return
  const list = board.list[listIndex]
  if (!taskId) return returnIndex ? { board, listIndex } : list
  const taskIndex = list.tasks.findIndex((elem) => elem.id == taskId)
  if (!~taskIndex) return
  return returnIndex ? { list, taskIndex } : list.tasks[taskIndex]
}

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
                status: false,
              },
              {
                id: 2,
                listId: 1,
                text: 'Помочь Фродо',
                status: false,
              },
              {
                id: 3,
                listId: 1,
                text: 'Найти и спасти Мерри и Пиппина',
                status: false,
              },
              {
                id: 4,
                listId: 1,
                text: 'Принять участие в Битве у Хельмовой Пади',
                status: false,
              },
            ],
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
                status: false,
              },
              {
                id: 6,
                listId: 2,
                text: 'Уничтожить кольцо',
                status: false,
              },
              {
                id: 7,
                listId: 2,
                text: 'Попросить прядь волос Галадриэль',
                status: false,
              },
              {
                id: 8,
                listId: 2,
                text: 'Перебить больше орков, чем эльф',
                status: false,
              },
            ],
          },
        ],
      },
      {
        id: 2,
        name: 'Поход Торина Дубощита',
        list: [
          {
            id: 3,
            boardsId: 2,
            name: 'Бильбо Беггинс',
            icon: '',
            tasks: [
              {
                id: 9,
                listId: 3,
                text: 'Угостить гномов ужином',
                status: false,
              },
              {
                id: 10,
                listId: 3,
                text: 'Не забыть носовой платок!',
                status: false,
              },
              {
                id: 11,
                listId: 3,
                text: 'Отправиться в нежданное путешествие',
                status: false,
              },
            ],
          },
        ],
      },
    ],
  },
  mutations: {
    addNewTask(state, { task, boardId }) {
      searchIndex(state, { boardId, listId: task.listId }).tasks.push(task)
      state.data.countTasks++
    },
    changeTask: (state, { task, text, boardId }) =>
      (searchIndex(state, {
        boardId,
        listId: task.listId,
        taskId: task.id,
      }).text = text),
    deleteTask(state, { task, boardId }) {
      const { list, taskIndex } = searchIndex(
        state,
        { boardId, listId: task.listId, taskId: task.id },
        true
      )
      list.tasks.splice(taskIndex, 1)
    },
    addNewList(state, payload) {
      state.list.push(payload)
      state.data.countLists++
    },
    changeList(state, { list, name }) {
      searchIndex(state, { boardId: list.boardsId, listId: list.id }).name = name
    },
    deleteList(state, list) {
      const iBoard = state.boards.findIndex((elem) => elem.id == list.boardsId)
      const iList = state.boards[iBoard].list.findIndex((elem) => elem.id === list.id)
      state.boards[iBoard].list.splice(iList, 1)
    },
    addNewBoard(state, payload) {
      state.boards.push(payload)
      state.data.countBoards++
    },
    changeNameBoard(state, { id, name }) {
      searchIndex(state, { boardId: id }).name = name
    },
    updateList(state, { value, boardId, listId }) {
      const list = searchIndex(state, { boardId, listId })
      list.tasks = value
      list.tasks.forEach((elem) => (elem.listId = listId))
      console.log(list.tasks)
    },
  },
  actions: {},
  modules: {},
  plugins: [createPersistedState()],
  strict: process.env.NODE_ENV !== 'production',
})
