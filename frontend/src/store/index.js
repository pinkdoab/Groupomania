import Vue from 'vue'
import Vuex from 'vuex'
const axios = require('axios');
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    UserLogin: 0,
    token: null,
    publication: [],
    UserDisplay: 0
  },
  getters: {
    formattedDate: state => {
        return `${state.day}-${state.month}-${state.year}`
    }
  },
  mutations: {
    CHG_USERLOGIN(state, payload) {
      state.UserLogin = payload
    },
    CHG_TOKEN(state, payload) {
      state.token = payload
    },
    CHG_USERDISPLAY(state, payload) {
      state.UserDisplay = payload
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
