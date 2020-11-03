<template>
  <div class="home">
    <!--img alt="Vue logo" src="../assets/logo.png"-->
    <!--HelloWorld msg="Welcome to Your Vue.js App"/-->
    <ListPosts/>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
import ListPosts from '@/components/ListPosts.vue'

export default {
  name: 'Home',
  components: {
    //HelloWorld,
    ListPosts
  }
}
</script>
