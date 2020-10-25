<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Saisie/>
    <ListeTest/>
    <input type='text' v-model="message2">
    <p>Le message 2 est : {{ message2 }}</p>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Saisie from './components/Saisie.vue'
import ListeTest from './components/ListeTest.vue'

export default {
  name: 'App',
      data: function () {
    return {
      message2: 'test'
    }
  },   
  components: {
    HelloWorld,
    Saisie,
    ListeTest
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
