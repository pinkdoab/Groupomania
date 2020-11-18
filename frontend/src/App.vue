<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/SignIn">Connection</router-link> | 
      <router-link to="/SignUp">Inscription</router-link> |
      <!--router-link to="/about">About</router-link-->
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
  color: #2c3e50;
  //background-color:rgb(193, 223, 43);
  height: 100vh;
}

#nav {
  width: 50vw;
  margin: auto;
  background-color:rgb(137, 216, 247);
  color: #42b983;
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>