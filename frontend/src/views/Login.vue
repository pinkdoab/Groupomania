<template>
  <div class="about">
    <h1>Connection de l'utilisateur</h1>
    <form>
    <label for="util">Pseudo</label>
    <input id="util" type="text" v-model="pseudo"/>
    <label for="pass">Password</label>
    <input id="pass" type="text" v-model="password"/>

    <button class="bouton" @click="connection">Connection</button>
    </form>

    <p>UserActif : {{ $store.state.UserActif }}</p>

  </div>
</template>

<script>
const axios = require('axios');

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

      axios.post('http://localhost:3000/auth/login/', {
          pseudo: this.pseudo,
          password: this.password,
      })
      .then(response => {
        this.$store.commit('CHG_USER', response.data.pseudo)
      })
      .catch(function (error) {
          console.log(error);
      });
    }
  }
}
</script>