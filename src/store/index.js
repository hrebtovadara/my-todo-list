import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    data: {
      boards: [
        {
          id: 1,
          name: 'Досочка 1',
          icon: '',
          link: '/tasknumone',
          tasks: []
        }
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
