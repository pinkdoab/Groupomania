<template>

  <div class="containerLogin">
    <p>logo</p>
    <h2>Connection</h2>
    <form class="formulaire">

      <h4 class="texte">Pseudo</h4>
      <input class="element" id="pseudo" type="text" v-model="pseudo" pattern="[A-Za-z0-9 ]+" minlength="4" maxlength="10"  autofocus/>
      <p>{{ errorPseudo }}</p>

      <h4 class="texte">Password</h4>
      <input class="element" id="password" type="text" v-model="password" pattern="[A-Za-z0-9 ]+" minlength="4" maxlength="10"/>
      <p>{{ errorPassword }}</p>

      <button type="button" class="element bouton" @click="connection">Connection</button>
    </form>

    <!--p>UserLogin : {{ $store.state.UserLogin }}</p-->
    <!--p>UserToken : {{ $store.state.token }}</p-->
  </div>

</template>

<script>
const axios = require('axios');

export default {
  name: 'SignIn',
  data: function () {
    return {
      pseudo: '',
      errorPseudo: '',
      password: '',
      errorPassword: ''
    }
  },
  methods: {
    connection: function () {
      this.errorPseudo = ''
      this.errorPassword = ''

      axios.post('http://localhost:3000/user/login/', {
        pseudo: this.pseudo,
        password: this.password,
      })
      .then(response => {
        console.log('\n\nrequête url : ', response.config.url);
        console.log('requête method : ', response.config.method);
        console.log('requête data : ', response.config.data);
        console.log('réponse status : ', response.status);
        console.log('réponse data : ', response.data);

        this.$store.commit('SET_USERLOGIN', response.data.userId);
        this.$store.commit('SET_TOKEN', response.data.token);
        this.$store.commit('SET_USERDISPLAY', response.data.userId);
        this.$store.dispatch('setLocalStockage');
        this.$router.push({name: 'Home'});
      })
      .catch(error => {
        if (error.response.status == 401) {
          console.log('messagePseudo : ', error.response.data.messagePseudo)
          this.errorPseudo = error.response.data.messagePseudo
          this.pseudo= ''
          console.log('messagePassword : ', error.response.data.messagePassword)
          this.errorPassword = error.response.data.messagePassword
          this.password= ''
        }
      });

    }    
  }
}
</script>
<!------ Add "scoped" attribute to limit CSS to this component only ------>
<style scoped lang="scss">

.containerLogin {
  //background-image: url('../assets/fond2.png');
  margin:  5em auto;
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

      input:invalid {
        border: 2px dashed red;
      }
      input:valid {
        //border: 2px solid rgb(148, 220, 39);
    }

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