<template>
  <div  class="home">
    <!--p>publication : {{ $store.state.publication }}</p-->
    <div class="gauche">
      <LoginUser/>
      <DisplayUser/>
      <ListUser/>
      <CreaPost/>
    </div>
    <div class="droite">
      <ListPost/>
    </div>

  </div>
</template>

<script>
import DisplayUser from '@/components/user/DisplayUser.vue'
import LoginUser from '@/components/user/LoginUser.vue'
import ListUser from '@/components/user/ListUser.vue'
import CreaPost from '@/components/post/CreaPost.vue'
import ListPost from '@/components/post/ListPost.vue'

export default {
  name: 'Home',
  components: {
    DisplayUser,
    LoginUser,
    ListUser,
    CreaPost,
    ListPost    
  },
  created() {
    this.$store.dispatch('requete_get_publication')
    },
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
.gauche {
  width: 300px;
  margin-right: 10px;
}
.droite {
  width: 400px;
}
</style>