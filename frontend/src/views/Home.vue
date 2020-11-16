<template>
  <div  class="home">
    <p>{{ $store.state.day }}/{{ $store.state.month }}/{{ $store.state.year }}
    <p>{{ $store.state.publication }}</p>
    <p>{{ publications }}</p>

    <button @click="changerTexte">changerTexte</button>

    <!--CreaPost @refresh="refresh" :publications="publications" ></CreaPost-->
    <CreaPost @refresh="refresh"></CreaPost>
    <AffPosts :publications="publications"></AffPosts>

  </div>
</template>


<script>
const axios = require('axios');

import CreaPost from '@/components/CreaPost.vue'
import AffPosts from '@/components/AffPosts.vue'

export default {
  name: 'Home',
  components: {
    CreaPost,
    AffPosts
  },
  data: function () {
    return {
        publications: []
    }
  },
  mounted () {
    //this.refresh ()
    axios.get('http://localhost:3000/Post')
    .then(response => (this.publications = response.data))
  },
  methods: {
    refresh () {
      axios.get('http://localhost:3000/Post')
      .then(response => (this.publications = response.data))
    },
    changerTexte() {
      axios.get('http://localhost:3000/Post')
      .then(response => (this.$store.dispatch('changerTexte', response.data)))
      //this.$store.dispatch('changerTexte', this.publications)
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