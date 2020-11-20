<template>
  <div  class="home">
    <!--p>publication : {{ $store.state.publication }}</p-->

    <DisplayUser/>
    <InfoUser/>
    <ListUser/>
    <CreaPost/>
    <ListPost/>

  </div>
</template>

<script>
import DisplayUser from '@/components/DisplayUser.vue'
import InfoUser from '@/components/InfoUser.vue'
import ListUser from '@/components/ListUser.vue'
import CreaPost from '@/components/CreaPost.vue'
import ListPost from '@/components/ListPost.vue'

export default {
  name: 'Home',
  components: {
    DisplayUser,
    InfoUser,
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
    width: 50vw;
    margin: auto;
    background-color:rgb(193, 223, 43);
}
</style>