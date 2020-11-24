<template>

  <div class="containerLogin">
    <p>logo</p>
    <h2>Connection chez Groupomania</h2>
    <form class="formulaire">

      <h4 class="texte">Pseudo</h4>
      <input class="element" id="pseudo" type="text" v-model="pseudo"/>

      <h4 class="texte">Password</h4>
      <input class="element"  type="text" v-model="password"/>

      <button type="button" class="element bouton" @click="connection">Connection</button>
    </form>

    <p>UserLogin : {{ $store.state.UserLogin }}</p>
    <p>UserToken : {{ $store.state.token }}</p>
  </div>

</template>

<script>
//const axios = require('axios');

export default {
  name: 'SignIn',
  data: function () {
    return {
      pseudo: '',
      password: ''
    }
  },
  methods: {
    connection: function () {

      this.$store.commit('CHG_USERLOGIN', 1 );
      this.$store.commit('CHG_TOKEN', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTYwNjIxODM2OCwiZXhwIjoxNjA2MzkxMTY4fQ.Uo4vSLBIyO67qSLhYeEV82jtb35fD_SfbDEj_CDCodc')
      //this.$router.push({name: 'Home'});
/*
      axios.post('http://localhost:3000/user/login/', {
          pseudo: this.pseudo,
          password: this.password,
      })
      .then(response => {
        this.$store.commit('CHG_USERLOGIN', response.data.userId);
        this.$store.commit('CHG_TOKEN', response.data.token)
      })
      .catch(function (error) {
          console.log(error);
      });
      this.$router.push({name: 'Home'});
*/
    }    
  }
}
</script>
<!------ Add "scoped" attribute to limit CSS to this component only ------>
<style scoped lang="scss">

.containerLogin {
  //background-image: url('../assets/fond2.png');
  margin:  0em auto;
  width: 26em;
  height: 24em;
  background-color:white;
  border-radius: 8px;

  .formulaire {
    margin: auto;
    padding: 0em 1em 1em 1em;
    width: 70%;
    background-color:rgb(240, 245, 245);
    border-radius: 8px;
    border-width:1px;
    border-style:solid;
    border-color:rgb(202, 216, 216);

    .element {
      margin: auto;
      text-align:center;
      //padding: 0em;
      width: 100%;
      height: 1.7em;
      padding: 0;
      font-size: 1.2em;
      border-radius: 5px;
      border-width:1px;
      border-style:solid;
      border-color:rgb(202, 216, 216);
    }
    .bouton {
      margin-top: 1.5em;
      background-color: rgb(51, 191, 74);
      font-size: 1em;
      font-weight: bold;
      color: white;
      
    }
    h4 {
      text-align: left;
      margin-bottom: .2em;
    }
  } 
}
</style>