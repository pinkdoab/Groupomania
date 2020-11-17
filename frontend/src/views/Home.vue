<template>
  <div  class="home">
    <p>{{ $store.state.day }}/{{ $store.state.month }}/{{ $store.state.year }}
    <p>publication NEW :{{ $store.state.publication }}</p>

    <button @click="changerTexte">changerTexte</button>

    <!--CreaPost @refresh="refresh" :publications="publications" ></CreaPost-->
    <CreaPost/>
    <AffPosts :key10="componentKey"/>

  </div>
</template>


<script>
//const axios = require('axios');

import CreaPost from '@/components/CreaPost.vue'
import AffPosts from '@/components/AffPosts.vue'

export default {
  name: 'Home',
  components: {
    CreaPost,
    AffPosts    
  },
      data: function() {
        return {
            //renders2: 1,
            componentKey: 1, // à 1 car il y aura forcément 1 rendu
        }
    },
  created() {
    this.$store.dispatch('requete_get_publication')
    //this.$forceUpdate();
    },
  methods: {
    changerTexte() {
      this.$store.dispatch('requete_get_publication');
      //this.$forceUpdate();
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