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
    GET_COMMENTAIRE(state,data) {
      state.commentaire = data;
    },
  },
  actions: {
    requete_get_publication(context) {
      axios.get('http://localhost:3000/post')
      .then( function(res) {
        context.commit('GET_PUBLICATION', res.data);
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
        context.commit('GET_PUBLICATION', results[0].data);
        context.commit('GET_COMMENTAIRE', results[1].data);
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