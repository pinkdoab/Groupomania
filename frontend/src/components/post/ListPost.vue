<template>
    <div v-if="this.$store.state.UserLogin !== 0">

        <div id="post-list">
            <!--h3>ListPost</h3-->
            <li is="ItemPost"
                v-for="req in $store.state.publication"
                v-bind:key="req.id"
                v-bind:id="req.id"
                v-bind:texte="req.texte"
                v-bind:image="req.imageUrl"
                v-bind:dateCreation="req.dateCreation"
                v-bind:createurId="req.createurId"
                v-bind:createurPseudo="req.createurPseudo"
                v-bind:avisFavorable="req.nbAvisFavorable"
                v-bind:avisDefavorable="req.nbAvisDefavorable"
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
div {
    margin-top: 0;
}
#post-list {
    width: 95%;
    margin: auto;
    margin-top: 0;
    //background-color:rgb(206, 252, 228);
}
@media screen and (max-width: 700px) {
  #post-list {
    width: 100%;
  }
}

h3 { color:rgb(104, 206, 153)}
</style>