<template>
  <div class="home">

    <!--p>{{ publications }}</p-->
    <CreaPost  :publications="publications"></CreaPost>
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
  data () {
    return {
        publications: []
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
    width: 60vw;
    margin: auto;
    background-color:rgb(190, 191, 188);
}
</style>