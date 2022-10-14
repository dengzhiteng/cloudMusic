import { createStore } from 'vuex'

export default createStore({
  state: {
    loginVisible: false
  },
  mutations: {
    getLoginVisible(state, value) {
      state.loginVisible = value
    },
  },
  actions: {
    setLoginVisible(context, value) {
      context.commit('getLoginVisible', value)
    },
  },
  modules: {
  }
})
