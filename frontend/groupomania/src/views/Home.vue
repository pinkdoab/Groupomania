<template>
  <div class="home">
    <ListPosts/>
  </div>
</template>


<script>
import ListPosts from '@/components/ListPosts.vue'

export default {
  name: 'Home',
  components: {
    ListPosts
  }
}
</script>
