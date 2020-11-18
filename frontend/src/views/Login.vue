<template>
  <div class="about">
    <h1>Connection de l'utilisateur</h1>
    <form>
    <label for="util">Pseudooooooo</label>
    <input id="util" type="text" v-model="pseudo"/>
    <label for="emai">Email</label>
    <input id="emai" type="text" v-model="email"/>
    <label for="pass">Password</label>
    <input id="pass" type="text" v-model="password"/>

    <button class="bouton" @click="connection">Connection</button>
    </form>
    <p>{{ userId }}</p>
        <p>utilisateur : {{ $store.state.utilisateur }}</p>

  </div>
</template>

<script>
const axios = require('axios');

export default {
  name: 'SignIn',
  data: function () {
    return {
      pseudo: '',
      email: '',
      password: '',
      userId: [],
    }
  },
  methods: {
    connection: function () {

      axios.post('http://localhost:3000/auth/login/', {
          nom: this.pseudo,
          email: this.email,
          password: this.password,
      })
      .then(response => {
        this.userId = response.data.userId;
        this.$store.commit('CHG_USER', this.userId)
        })
      .catch(function (error) {
          console.log(error);
      });
  
    }
  }
}
</script>