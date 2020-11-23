<template>
    <div v-if="this.$store.state.UserLogin !== 0">
        <div id="comm-list">
            <h3>ListComm</h3>
            <li is="ItemComm"
                v-for="req in $store.state.commentaire"
                v-bind:key="req.c_id"
                v-bind:id="req.c_id"
                v-bind:texte="req.c_texte"
                v-bind:dateCreation="req.c_date_creation"
                v-bind:publication="req.c_publication"
                v-bind:PostId="PostId"
            >
                <ItemComm/>
            </li>
        </div>
    </div>
</template>

<!------------------------------------------------------------------------>
<script>
import ItemComm from './ItemComm.vue'

export default {
    name: 'ListComm',
    components: {
        ItemComm
    },
    props: ['PostId']
}
</script>

<!------ Add "scoped" attribute to limit CSS to this component only ------>
<style scoped lang="scss">
#comm-list {
    margin: 10px auto;

    background-color:rgb(206, 252, 228);
}
h3 { color:rgb(104, 206, 153)}
</style>