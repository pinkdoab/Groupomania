<template>
  <div  class="home">
    <p>{{ $store.state.day }}/{{ $store.state.month }}/{{ $store.state.year }}
    <p>publication NEW :{{ $store.state.publication }}</p>

    <button @click="changerTexte">changerTexte</button>

    <!--CreaPost @refresh="refresh" :publications="publications" ></CreaPost-->
    <CreaPost/>
    <AffPosts/>

  </div>
</template>


<script>

import CreaPost from '@/components/CreaPost.vue'
import AffPosts from '@/components/AffPosts.vue'

export default {
  name: 'Home',
  components: {
    CreaPost,
    AffPosts    
  },
  created() {
    this.$store.dispatch('requete_get_publication')
    },
  methods: {
    changerTexte() {
      this.$store.dispatch('requete_get_publication');
    }
  }
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