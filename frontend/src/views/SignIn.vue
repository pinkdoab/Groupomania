<template>
  <div class="about">
    <h1>Connection utilisateur à Groupomania</h1>
    <form>
    <label for="util">Pseudooooooo</label>
    <input id="util" type="text" v-model="pseudo"/>
    <label for="emai">Email</label>
    <input id="emai" type="text" v-model="email"/>
    <label for="pass">Password</label>
    <input id="pass" type="text" v-model="password"/>

    <button class="bouton" @click="connection">Connection</button>
    </form>
    <p>{{ userId }}   {{ token }}</p>

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
      userId: 'inconnu',
      token: 'inconnu'
    }
  },
  methods: {
    connection: function () {
        console.log('rrrrrrr')
        axios.post('http://localhost:3000/auth/login/', {
            nom: this.pseudo,
            email: this.email,
            password: this.password,
        })
        /*.then(function (response) {
                  console.log('ooooooo', response.data.userId)
                  console.log('ooooooo', response.data.token)
            //console.log(response.data);
            //this.userId = response.data.userId;
            //this.token = response.data.token;
        })*/

      .then(response => (this.userId = response.data.userId))
      .then(response => (this.token = response.data.token))
        
          

        .catch(function (error) {
            console.log(error);
        });

        //this.$router.push({name: 'Home'});
    }
  }
}
</script>