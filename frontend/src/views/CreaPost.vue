<template>
  <div class="CreaPost">
    <h1>Créa post</h1>
       <router-link to="/">Home</router-link>  

    <form >
        <input id="new-post" >
        <button v-on:click="$emit('enlarge-text', 0.1)"> crea </button>
        <button v-on:click="$emit('remove')">Remove</button>

    </form>
  </div>

  

</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
//import ListPosts from '@/components/ListPosts.vue'

export default {
  name: 'CreaPost',
  components: {
    //HelloWorld,
    //ListPosts
  }
}
</script>