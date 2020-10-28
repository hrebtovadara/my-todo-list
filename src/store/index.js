import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    itemsList: [
      {
        id: 1,
        status: "todo",
        text: "погладить котика"
      },
      {
        id: 2,
        status:"todo",
        text: "танцевать с котиком"
      },
      {
        id: 3,
        status: "done",
        text: "быть поцарапанным котиком"
      },
    ],
    counter: 4,
  },
  mutations: {
    changeStatus(state, payload) {
      let item = state.itemsList.find((elem)=> elem.id === payload.id);
      item.status === "todo"? item.status = "done": item.status = "todo"
    },
    itemRemove(state, payload) {
      let item = state.itemsList.indexOf(payload);
      state.itemsList.splice(item, 1);
    },
    addNewTask(state, payload) {
      state.itemsList.push(payload)
    }
  },
  actions: {
    asyncChangeStatus(context, payload) {
      context.commit('changeStatus', payload)
    },
    itemRemove(context, payload) {
      context.commit('itemRemove', payload)
    },
    addNewTask(context, payload) {
      context.commit('addNewTask', payload)
    }
  },
  modules: {
  }
})
