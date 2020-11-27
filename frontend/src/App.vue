<template>
  <div id="app">
    <div class="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/login">Connection</router-link> | 
      <router-link to="/SignUp">Inscription</router-link> |
      <button class="bouton" @click="deconnexion" >Déconnexion</button> 
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
  background-image: url('assets/fond2.png');
  background-size: cover;
  //filter: blur(5px);
  font-size: 1em;

  //width: 100%;
  //max-width: 60em;
  //min-width: 40em;
  height: 100vh;

  //margin: auto;



  text-align: center;
  color: #005730;
  //background-color:rgb(61, 43, 223);

}

.nav {
  width: 100%;

  margin: auto;
    background-color:rgb(206, 252, 228);
  a {
    font-weight: bold;
    color: #32cd2d;
    &.router-link-exact-active {
      color: #005730;
    }
  }
}

.main {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 100vh;


  background: url('/assets/fond2.png');
}
</style>