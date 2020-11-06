<template>
  <div class="home">

    <p>{{ publications }}</p>
    <ListPosts @emettrePublications="setPublications" :publications="publications"></ListPosts>
    <ListPosts2 @emettrePublications="setPublications" :publications="publications"></ListPosts2>
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
            //this.$emit('emettrePublications', { message: this.publications})
    },
  /*methods: {
    setPublications(payload) {
      this.publications = payload.message
    }
  }*/
}
</script>
