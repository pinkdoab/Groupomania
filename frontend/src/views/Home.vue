<template>
  <div class="home">
    <ListPosts/>
    <ListPosts2/>
  </div>
</template>


<script>
import ListPosts from '@/components/ListPosts.vue'
import ListPosts2 from '@/components/ListPosts2.vue'

export default {
  name: 'Home',
  components: {
    ListPosts,
    ListPosts2
  }
}
</script>
