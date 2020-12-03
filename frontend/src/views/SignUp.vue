<template>
  <div class="container">
    <!--h1>Réseau social interne</h1-->
    <!--img class="logo"
     src="../assets/logoseul_groupomania.png"
     alt="Grapefruit slice atop a pile of other slices"-->
    <h1>Création du compte</h1>
    <form class="formulaire">
      <label class="label" for="pseudo">
        <p>Pseudo</p>
        <div>
            <input id="pseudo" name="pseudo" type="text" v-model="pseudo" pattern="[A-Za-z0-9 ]+" minlength="4" maxlength="10" v-focus autofocus>
            <p v-if="(this.erreurPseudo !== '')" class="erreur">{{ erreurPseudo }} existe déjà</p>
        </div>
      </label> 

      <label class="label" for="email">
        <p>Email</p>
        <div>
            <input id="email" name="email" type="text" v-model="email" pattern="[A-Za-z0-9 ]+" minlength="4" maxlength="16">
            <p v-if="(this.erreurEmail !== '')" class="erreur">{{ erreurEmail }} existe déjà</p>
        </div>
      </label>

      <label class="label" for="password">
        <p>Password</p>
        <div>
            <input id="password" name="password" type="text" v-model="password" pattern="[A-Za-z0-9 ]+" minlength="4" maxlength="10">
            <!--p class="erreur">{{ errorPassword }}</p-->
        </div>
      </label> 

      <button type="button" class="bouton" value="connection" @click="connection" >Création</button>
    </form>
  </div>
</template>

<script>
const axios = require('axios');

export default {
  name: 'SignUp',
  data: function () {
    return {
      pseudo: '',
      erreurPseudo: '',
      email: '',
      erreurEmail: '',
      password: ''
    }
  },
  directives: {
  focus: {
    inserted: function (el) {
      el.focus()
    }
  }
},
  methods: {
    connection: function () {
      axios.post('http://localhost:3000/user/signup/', {
        nom: this.pseudo,
        email: this.email,
        password: this.password,
      })
      .then( response => {
        console.log('AAAA then AAAAA ',response);
        this.$router.push({name: 'Home'});
      })
      .catch( error => {
        console.log('AAAA catch AAAAA ',error.response.data.messageError);
        this.pseudo= ''
        this.email= ''
        this.password= ''
        if (error.response.data.messageError[0] == 't_user.ind_pseudo') {
          this.erreurPseudo = error.response.data.messageError[1]
        } else {
          if (error.response.data.messageError[0] == 't_user.ind_email') {this.erreurEmail = error.response.data.messageError[1]}
        }
      });
    }
  }
}
</script>
<!------ Add "scoped" attribute to limit CSS to this component only ------>
<style scoped lang="scss">

.container {
  //background-image: url('../assets/fond2.png');
  margin:  6em auto;
  padding: 2em;
  width: 26em;
  background-color:white;
  border-radius: 8px;
  box-shadow: 1px 1px 12px rgb(51, 49, 89);
  h1,h2 {
    margin: 0;
  }
  .logo {
     width: 4em;
  }
  .formulaire {
    margin-top: 2em;
    padding: 1em;
    background-color:rgb(240, 245, 245);
    border-radius: 8px;
    border-width:1px;
    border-style:solid;
    border-color:rgb(202, 216, 216);
    box-shadow: 3px 3px 6px #aaa;
    .label {
      margin: left;
      font-size: 1.2em;
      text-align: left;
      div {
        margin-bottom: 1em;
      }
      input {
        font-size: 1.2em;
        width: 100%;
        border-radius: 5px;
        border-width:1px;
        border-style:solid;
        border-color:rgb(202, 216, 216);
        &:invalid {
          border: 2px solid red;
        }
        //&:valid {
          //border: 2px solid rgb(148, 220, 39);
        //}
      }      
      p {
        margin: 0;
        font-weight: bold;
      }
      .erreur {
        font-size: .8em;
        font-weight:inherit;
        color:red;
      }
    }    
    .bouton {
      padding:6px 0 6px 0;
      font:bold 16px Arial;
      background:rgb(9, 153, 9);
      color:#fff;
      border-radius:4px;
      width:100px;
      border:none;
      &:hover {
      background: rgb(37, 139, 37);
    }
    }
    
    .bouton12 {
	padding:6px 0 6px 0;
	font:bold 16px Arial;
	background:rgb(9, 153, 9);
	color:#fff;
	border-radius:4px;
	width:100px;
	border:none;
}  
  } 
}
</style>