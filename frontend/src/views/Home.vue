<template>
<!--div-->
    <!--div v-if="this.$store.state.UserLogin == 0" class="presentation">
    <h2>Bienvenue sur le réseau social interne de Groupomania</h2>
    <h2>Pour profiter de nos services. Veuillez-vous connecter</h2>
    </div-->
  <div v-if="this.$store.state.UserLogin != 0" class="home">
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
<!--/div-->
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
  margin-top: 5em;
  width: 100%;
  //width: 40em;
  display: flex;
  justify-content: center;
}
p {
  width: 100px;
  font-size: 6px;
}
.gauche {
  flex: 1;
}
.droite {
    flex: 3;
}
@media screen and (max-width: 700px) {
  .home {
  display: block;
  width: 100%;
  }
}
</style>