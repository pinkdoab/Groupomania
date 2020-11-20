<template>
    <div>
        <div id="post-list">
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
    name: 'ListPost',
    components: {
        ItemPost
    }
}
</script>

<!------ Add "scoped" attribute to limit CSS to this component only ------>
<style scoped lang="scss">
#post-list {
    width: 70%;
    margin: 10px auto;
    background-color:rgb(114, 176, 27);
}
</style>