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
        name: 'Дела на сегодня',
        list: [
          {
            id: 1,
            boardId: 1,
            name: 'Мои делишки',
            tasks: [
              {
                id: 1,
                listId: 1,
                text: 'Разбить что-нибудь',
                active: false,
              },
              {
                id: 2,
                listId: 1,
                text: 'Смотреть в окно на голубя',
                active: false,
              },
              {
                id: 3,
                listId: 1,
                text: 'Поспать',
                active: false,
              },
              {
                id: 4,
                listId: 1,
                text: 'Ещё поспать',
                active: false,
              },
            ],
          },
          {
            id: 2,
            boardId: 1,
            name: 'Уход за человеком',
            icon: '',
            tasks: [
              {
                id: 5,
                listId: 2,
                text: 'Принести человеку нормальную еду',
                active: false,
              },
              {
                id: 6,
                listId: 2,
                text: 'Помочь работать',
                active: false,
              },
              {
                id: 7,
                listId: 2,
                text: 'Куснуть за то, что скинул с колен',
                active: false,
              },
              {
                id: 8,
                listId: 2,
                text: 'Попробовать съесть свою шерсть',
                active: false,
              },
            ],
          },
        ],
      },
      {
        id: 2,
        name: 'Позже',
        list: [
          {
            id: 3,
            boardId: 2,
            name: 'В обозримом будущем',
            tasks: [
              {
                id: 9,
                listId: 3,
                text: 'Залезть на стол и найти вкусненькое',
                active: false,
              },
              {
                id: 10,
                listId: 3,
                text: 'Узнать, кто ворует делишки из лотка',
                active: false,
              },
              {
                id: 11,
                listId: 3,
                text: 'Поработить человечество',
                active: false,
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
      searchIndex(state, { boardId: payload.boardId }).list.push(payload)
      state.data.countLists++
    },
    changeList(state, { list, name }) {
      searchIndex(state, { boardId: list.boardId, listId: list.id }).name = name
    },
    deleteList(state, list) {
      const { board, listIndex } = searchIndex(
        state,
        { boardId: list.boardId, listId: list.id },
        true
      )
      board.list.splice(listIndex, 1)
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
    },
    activeTask(state, { boardId, task }) {
      let taskActive = searchIndex(state, { boardId, listId: task.listId, taskId: task.id })
      taskActive.active = !taskActive.active
    },
  },
  actions: {},
  modules: {},
  plugins: [createPersistedState()],
  strict: process.env.NODE_ENV !== 'production',
})
