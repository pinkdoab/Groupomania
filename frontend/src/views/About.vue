<template>
  <div class="about">
    <h1>Page création utilisateur</h1>
<form action="page cible">
    Pseudo: <input type="text" name="pseudo"><br>
    Email : <input type="text" name="email"><br>
    Mot de passe : <input type="text" name="MdP"><br>
    <input type="submit" value="Envoyer">
</form>
  </div>
</template>

<script>
//const axios = require('axios');

export default {
  name: 'About',
  data: function () {
    return {
      pseudo: '',
      email: '',
      MdP: ''
    }
  },
  methods: {
    //creaUser: function (aa) {
      //console.log(aa)
      //console.table(this.publications[aa].id)
      //console.log(`http://localhost:3000/Post/${this.publications[aa].id}`);

      //axios
      //.post(`http://localhost:3000/Post/${this.publications[aa].id}`)
      //.then(response => {
      //    console.log(response.data);                  
      //});
    //}
  }
}
</script>
