<template>
  <div class="home">
    <div v-if="this.$store.state.UserLogin == 0">
      <div  class="container">
        <img class="logo" src="./../assets/icon.png">
        <div>
          <h1>Bienvenue sur le réseau social interne de Groupomania</h1>
        </div>
        <div class="paragraphe">
        <h2>Pour profiter de nos services, veuillez-vous inscrire ou vous connecter.</h2>
        </div>
        <h2 class="remerciement">Merci</h2>
      </div>
    </div>
    <div v-if="this.$store.state.UserLogin != 0" class="home2">
      <!--p>commentaire : {{ $store.state.commentaire }}</p-->
      <!--p>publication : {{ $store.state.publication }}</p-->
      <!--p>commentaire : {{ $store.state.token }}</p-->
      <div class="gauche">
        <InfoUser/>
        <ChgUser/>
      </div>
      <div class="droite">
        <CreaPost/>
        <ListPost/>
      </div>
    </div>
  </div>
</template>

<script>
import InfoUser from '@/components/user/InfoUser.vue'
import ChgUser from '@/components/user/ChgUser.vue'
import CreaPost from '@/components/post/CreaPost.vue'
import ListPost from '@/components/post/ListPost.vue'

export default {
  name: 'Home',
  components: {
    InfoUser,
    ChgUser,
    CreaPost,
    ListPost
  },
  created() {
    const token = localStorage.getItem("groupomania_token")
    const userId = localStorage.getItem("groupomania_userId")
    const userDisplay = localStorage.getItem("groupomania_userDisplay")
    if (token) {
        this.$store.commit('SET_USERLOGIN', userId);
        this.$store.commit('SET_TOKEN', token);
        this.$store.commit('SET_USERDISPLAY', userDisplay);
    }

    if (this.$store.state.token !== null){
      this.$store.dispatch('requete_get_post_comm'); 
    }
  }
}
</script>

<!------ Add "scoped" attribute to limit CSS to this component only ------>
<style scoped lang="scss">
.presentation {
  margin-top: 15em;
}
.home {
  margin-top: 6em;
  width: 100%;
  display: flex;
  justify-content: center;
  .gauche {
    flex: 1;
  }
  .droite {
    flex: 3;
  }
}
.home2 {
  margin-top: 0em;
  width: 100%;
  display: flex;
  justify-content: center;
  .gauche {
    flex: 1;
  }
  .droite {
    flex: 3;
  }
}
.container {
  margin: 1em auto;
  padding: .5em 1em;
  width: 24em;
  background-color:white;
  border-radius: 8px;
  box-shadow: 1px 1px 12px rgb(51, 49, 89);
  h1 {
    margin: auto;
  }
  .logo {
    width: 5em;
  }
  .paragraphe {
    margin-top: 2em;
  }
  .img {
    width: 80%;
  }
  .remerciement {
    margin-top: 1em;
    color: rgb(28, 24, 113)
  }
}
@media screen and (max-width: 700px) {
  .home2 {
    font-size: 1.4em;
    display: block;
  }
}
</style>