import Vue from 'vue'
import Vuex from 'vuex'
const axios = require('axios');
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    UserLogin: 0,
    token: null,
    UserDisplay: 0,
    publication: [],
    commentaire: []
  },
  /*getters: {
    isAuthenticated(state) {
      return state.token != null
    }
  },*/
  mutations: {
    SET_USERLOGIN(state, payload) {
      state.UserLogin = payload
      localStorage.setItem("groupomania_userId", payload)
    },
    SET_TOKEN(state, payload) {
      state.token = payload
      localStorage.setItem("groupomania_token", payload)
    },
    SET_USERDISPLAY(state, payload) {
      state.UserDisplay = payload
      localStorage.setItem("groupomania_userDisplay", payload)
    },
    CLEAR_USERLOGIN(state) {
      state.UserLogin = null
      localStorage.removeItem("groupomania_userId")
    },
    CLEAR_TOKEN(state) {
      state.token = null
      localStorage.removeItem("groupomania_token")
    },
    CLEAR_USERDISPLAY(state) {
      state.UserDisplay = null
      localStorage.removeItem("groupomania_userDisplay")
    },
    SET_PUBLICATION(state,data) {
      state.publication = data;
    },
    SET_COMMENTAIRE(state,data) {
      state.commentaire = data;
    },
  },
  actions: {
    requete_get_publication(context) {
      axios.get('http://localhost:3000/post')
      .then( function(res) {
        context.commit('SET_PUBLICATION', res.data);
      })
    },

    requete_get_post_comm(context) {

      let axiosConfig = {
        headers: {
          'Authorization': `token ${this.state.token}` 
        }
      };
      function get_publication() {
        return  axios.get('http://localhost:3000/post', axiosConfig)
      }       
      function get_commentaire() {
        return axios.get('http://localhost:3000/comm', axiosConfig)
      }
      Promise.all([get_publication(), get_commentaire()])
      .then(function (results) {
        context.commit('SET_PUBLICATION', results[0].data);
        context.commit('SET_COMMENTAIRE', results[1].data);
      });
    }
  },
  modules: {
  }
})
/*             axios.post('http://localhost:3000/Comm', {
                texte: this.newrequete,
                publication: this.PostId,
            })*/