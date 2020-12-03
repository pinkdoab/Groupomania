<template>
  <div id="app">
    <!--div class="fond"-->
      <div class="nav">
        <div class="menu">
          <router-link to="/">Home</router-link> |
          <router-link to="/login">Connection</router-link> | 
          <router-link to="/SignUp">Inscription</router-link> |
          <button class="bouton" @click="deconnexion" ><i class="fas fa-power-off"></i></button>
        </div>
      </div>
      <div class="main">
        <router-view/>
      </div>
    </div>
  <!--/div-->
</template>

<script>
const axios = require('axios');

export default {
  name: 'App',
  data: function () {
    return {
      pseudo: 'inconnu'
    }
  },
  methods: {
    deconnexion: function () {
      console.log('this.$store.state.UserLogin ' ,this.$store.state.UserLogin)
      console.log('this.$store.state.token ' ,this.$store.state.token)
      if (this.$store.state.token !== null){
        const headers = {'Authorization': `token ${this.$store.state.token}`}
        axios.put(`http://localhost:3000/user/${this.$store.state.UserLogin}`,{
            headers: headers
          },{
            userId: this.$store.state.UserLogin
          })
        .then(response => {
          console.log('OK', response)
                //this.$store.dispatch('requete_get_post_comm'); 

        })
        .catch(response => {
          console.log('KO', response)
        }) 

        this.$store.commit('SET_USERLOGIN',0);
        this.$store.commit('SET_TOKEN', null);
        this.$store.commit('SET_USERDISPLAY',0);
        this.$store.dispatch('clearLocalStockage')
  
      }
    }
  }
}
</script>


<style lang="scss">

* {
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  font-size: 1em;

  //width: 60em;
  max-width: 60em;
  //min-width: 40em;

  margin: auto;



  text-align: center; // A VOIR.................
  //color: #005730;
  //background-size: 100%;
}
#app::before {
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -100;
  background: url('./assets/fond4.png');
  //filter: blur(10px);
  opacity:0.90;
  background-size: cover;
}

.nav {
  position: fixed;
  top: 0px;
  width: 60em;
  height: 5.5em;
  background-image: url('./assets/menu.png');
  background-size: 100%;
  margin: auto;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  //background-color:rgb(121, 109, 252);
  a {
    font-weight: bold;
    text-decoration:none;
    font-size: 1.3em;
    color: white;
    &.router-link-exact-active {
      color: rgb(14, 236, 77);
    }
  }
  .menu {
  margin-right: 2em;
  .bouton {
    font-size: 1.2em;
    background: transparent;
    color:white;
    border: none;
  }
  }
}
.main {
  margin-top: 2em;
  display: flex;
  align-items: center;
  //justify-content: center;
  flex-direction: column;
  min-height: 100vh;
  background: url('/assets/fond2.png');
}
</style>