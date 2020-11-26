<template>
  <div v-if="this.$store.state.UserLogin != 0" class="home">
    <!--p>commentaire : {{ $store.state.commentaire }}</p-->
    <!--p>publication : {{ $store.state.publication }}</p-->
    <!--p>commentaire : {{ $store.state.token }}</p-->
    <div class="gauche">
      <LoginUser/>
      <!--DisplayUser/-->
      <ListUser/>
    </div>
    <div class="droite">
      <CreaPost/>
      <ListPost/>
    </div>

  </div>
</template>

<script>
//import DisplayUser from '@/components/user/DisplayUser.vue'
import LoginUser from '@/components/user/LoginUser.vue'
import ListUser from '@/components/user/ListUser.vue'
import CreaPost from '@/components/post/CreaPost.vue'
import ListPost from '@/components/post/ListPost.vue'

export default {
  name: 'Home',
  components: {
    //DisplayUser,
    LoginUser,
    ListUser,
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
.home {
  display: flex;
  justify-content: center;
  margin: auto;
  background-color:rgb(193, 223, 43);
}
p {
  width: 50px;
  font-size: 6px;
}
.gauche {
  width: 25%;
  margin-right: 10px;
}
.droite {
  width: 65%;
}
</style>