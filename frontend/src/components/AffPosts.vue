<template>
<!--router-link to="/CreaPost">Page créa post</router-link-->
<div>
    <div id="post-list-example">
        <p>posteNew</p>
        <li is="ItemPost"
            v-for="req in $store.state.publication"
            v-bind:key="req.id"
            v-bind:id="req.id"
            v-bind:texte="req.texte"
            v-bind:image="req.imageUrl"
            v-bind:date="req.date"
            v-bind:createur="req.createur"
        >
            <ItemPost/>
        </li>
    </div>
</div>
</template>

<!------------------------------------------------------------------------>
<script>
import ItemPost from './ItemPost.vue'

export default {
    name: 'ListPosts',
    components: {
        ItemPost
    }
}
</script>

<!------ Add "scoped" attribute to limit CSS to this component only ------>
<style scoped lang="scss">
#post-list-example {
    width: 70%;
    margin: auto;
    background-color:rgb(193, 223, 43);
}
</style>