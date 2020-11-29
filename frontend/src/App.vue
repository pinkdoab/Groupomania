<template>
  <div id="app">
    <div class="nav">
      <div class="menu">
        <router-link to="/">Home</router-link> |
        <router-link to="/login">Connection</router-link> | 
        <router-link to="/SignUp">Inscription</router-link> |
        <button class="bouton" @click="deconnexion" >Déconnexion</button>
      </div>
    </div>
    <div class="main">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data: function () {
    return {
      pseudo: 'inconnu'
    }
  },
  methods: {
    deconnexion: function () {
      this.$store.commit('CLEAR_USERLOGIN');
      this.$store.commit('CLEAR_TOKEN');
      this.$store.commit('CLEAR_USERDISPLAY');
      this.$store.commit('SET_USERLOGIN',0);
      this.$store.commit('SET_TOKEN', null);
      this.$store.commit('SET_USERDISPLAY',0);
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

  width: 60em;
  //max-width: 60em;
  //min-width: 40em;

  margin: auto;



  text-align: center;
  color: #005730;
  background-color:rgb(108, 130, 157);
  background-image: linear-gradient(to bottom, rgba(230, 236, 239, 0.386), rgba(125, 125, 249, 0.5));
  background-image: url('./assets/fond4.png');
  //filter: blur(4px);
  background-size: 100%;
  //opacity:0.50;
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
}
.menu {
  margin-right: 2em;
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