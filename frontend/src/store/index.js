import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    day: 29,
    month: 6,
    year: 1962,
    publication: 'rien'
  },
  mutations: {
    COPIE_NOM(state, payload) {
      state.publication = payload
    }
  },
  actions: {
    changerTexte(context, payload) {
      context.commit("COPIE_NOM",payload)
    }

  },
  modules: {
  }
})
