import { createStore } from 'vuex'

export default createStore({
  state: {
  },
  getters: {
    currentYear: () => {
      return new Date().getFullYear();
    },
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
