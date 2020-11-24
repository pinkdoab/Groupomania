<template>
  <div id="app">
    <div class="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/login">Connection</router-link> | 
      <router-link to="/SignUp">Inscription</router-link> |
    </div>
    <div class="corps">
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
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  //background-image: url('assets/fond2.png');
  background-size: cover;
  font-size: 1em;

  width: 100%;
  max-width: 60em;
  min-width: 40em;
  height: 100vh;

  margin: auto;

  text-align: center;
  color: #005730;
  background-color:rgb(193, 223, 43);

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
</style>