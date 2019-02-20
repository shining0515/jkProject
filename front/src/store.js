import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentPage: 'home'
  },

  mutations: {
    set_page(state, newPage) {
      state.currentPage = newPage
    }
  },
  strict: true
})