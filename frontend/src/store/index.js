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
    UserActif: 41
  },
  getters: {
    formattedDate: state => {
        return `${state.day}-${state.month}-${state.year}`
    }
  },
  mutations: {
    CHG_USER(state, payload) {
      state.UserActif = payload
    },
    GET_PUBLICATION(state,data) {
      state.publication = data;
    },
  },
  actions: {
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
