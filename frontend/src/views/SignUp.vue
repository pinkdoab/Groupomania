<template>
  <div class="about">
    <h1>Inscription de l'utilisateur</h1>

    <label for="util">Pseudo</label>
    <input id="util" type="text" v-model="pseudo"/>
    <label for="emai">Email</label>
    <input id="emai" type="text" v-model="email"/>
    <label for="pass">Password</label>
    <input id="pass" type="text" v-model="password"/>

    <button class="bouton" @click="connection">Inscription</button>

  </div>
</template>

<script>
const axios = require('axios');

export default {
  name: 'SignUp',
  data: function () {
    return {
      pseudo: '',
      email: '',
      password: ''
    }
  },
  methods: {
    connection: function () {

        axios.post('http://localhost:3000/auth/signup/', {
            nom: this.pseudo,
            email: this.email,
            password: this.password,
        })
        .then(function (response) {
            console.log(response);
        })
        /*.catch(function (error) {
            console.log(error);
        });*/
        this.$router.push({name: 'Home'});
    }
  }
}
</script>