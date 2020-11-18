import Vue from 'vue'
import Vuex from 'vuex'
const axios = require('axios');
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    day: 29,
    month: 6,
    year: 1962,
    publication: [],
    utilisateur: '',
    token: ''
  },
  getters: {
    formattedDate: state => {
        return `${state.day}-${state.month}-${state.year}`
    }
  },
  mutations: {
    COPIE_NOM(state, payload) {
      state.publication = payload
    },
    GET_PUBLICATION(state,data) {
      state.publication = data;
    },
  },
  actions: {
    changerTexte(context, payload) {
      context.commit("COPIE_NOM",payload)
    },
    requete_get_publication(context) {
      axios.get('http://localhost:3000/Post')
      .then( function(res) {
        context.commit('GET_PUBLICATION', res.data);
      })
    }
  },
  modules: {
  }
})
