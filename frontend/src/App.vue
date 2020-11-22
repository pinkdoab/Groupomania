<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/login">Connection</router-link> | 
      <router-link to="/SignUp">Inscription</router-link> |
    </div>
    <router-view/>
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
  text-align: center;
  color: #005730;
  //background-color:rgb(193, 223, 43);
  //height: 100vh;
}

#nav {
  width: 50vw;
  margin: auto;
    background-color:rgb(206, 252, 228);
  //color: #42b983;
  a {
    font-weight: bold;
    color: #32cd2d;

    &.router-link-exact-active {
      color: #005730;
    }
  }
}
</style>