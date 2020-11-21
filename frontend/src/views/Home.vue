<template>
  <div  class="home">
    <!--p>publication : {{ $store.state.publication }}</p-->
    <div>
      <LoginUser/>
      <DisplayUser/>
      <ListUser/>
      <CreaPost/>
    </div>
    <div class="gauche">
      <ListPost/>
    </div>

  </div>
</template>

<script>
import DisplayUser from '@/components/DisplayUser.vue'
import LoginUser from '@/components/LoginUser.vue'
import ListUser from '@/components/ListUser.vue'
import CreaPost from '@/components/CreaPost.vue'
import ListPost from '@/components/ListPost.vue'

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
  width: 30%;
}
</style>