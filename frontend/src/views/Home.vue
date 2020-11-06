<template>
  <div class="home">

    <p>{{ publications }}</p>
    <ListPosts2 @emettrePublications="setPublications" :publications="publications"></ListPosts2>
    <ListPosts @emettrePublications="setPublications" :publications="publications"></ListPosts>
  
  </div>
</template>


<script>
const axios = require('axios');

import ListPosts from '@/components/ListPosts.vue'
import ListPosts2 from '@/components/ListPosts2.vue'

export default {
  name: 'Home',
  components: {
    ListPosts,
    ListPosts2
  },
  data () {
    return {
        publications: 'eee'
    }
  },
  mounted () {
        axios
            .get('http://localhost:3000/Post')
            .then(response => (this.publications = response.data))
    },
}
</script>

<!------ Add "scoped" attribute to limit CSS to this component only ------>
<style scoped lang="scss">
.home {
    background-color:rgb(208, 243, 54);
}
</style>