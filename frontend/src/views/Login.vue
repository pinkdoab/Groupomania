<template>
  <div class="about">
    <h1>Connection de l'utilisateur</h1>
    <form>
    <label for="util">userId</label>
    <input id="util" type="text" v-model="userId"/>
    <label for="pass">Password</label>
    <input id="pass" type="text" v-model="password"/>

    <button type="button" class="bouton" @click="connection">Connection</button>
    </form>

    <p>UserLogin : {{ $store.state.UserLogin }}</p>

  </div>
</template>

<script>
const axios = require('axios');

export default {
  name: 'SignIn',
  data: function () {
    return {
      userId: 0,
      password: ''
    }
  },
  methods: {
    connection: function () {

      axios.post('http://localhost:3000/auth/login/', {
          userId: this.userId,
          password: this.password,
      })
      .then(response => {
        this.$store.commit('CHG_USERLOGIN', response.data.userId)
      })
      .catch(function (error) {
          console.log(error);
      });
      this.$router.push({name: 'Home'});
    }
  }
}
</script>