<template>
    <div v-if="this.$store.state.UserLogin !== 0">
        <div class="bordure" id="comm-list">
            <!--h3>ListComm</h3-->
            <!--CreaComm v-bind:PostId="PostId"/-->
            <li is="ItemComm"
                v-for="req in $store.state.commentaire"
                v-bind:key="req.c_id"
                v-bind:id="req.c_id"
                v-bind:texte="req.c_texte"
                v-bind:dateCreation="req.c_date_creation"
                v-bind:publication="req.c_publication"
                v-bind:createur="req.c_createur"
                v-bind:createurPseudo="req.createurPseudo"
                v-bind:PostId="PostId"
            >
                <ItemComm/>
            </li>
            <CreaComm class="positionComm" v-bind:PostId="PostId"/>
        </div>
        {{couleurComm}}
    </div>
</template>

<!------------------------------------------------------------------------>
<script>
import ItemComm from './ItemComm.vue'
import CreaComm from './CreaComm.vue'

export default {
    name: 'ListComm',
    components: {
        ItemComm,
        CreaComm
    },
    props: ['PostId', 'couleurComm']
}
</script>

<!------ Add "scoped" attribute to limit CSS to this component only ------>
<style scoped lang="scss">
#comm-list {
    margin: 10px auto;
    width: 95%;

    //background-color:rgb(206, 252, 228);
}
.positionComm {
    margin-top: 2em;
}
.bordure {
    width: 95%;
    text-align: justify;
    margin-top: 0px;
    margin: 0px 15px 5px 15px;
    padding: 5px;
    background-color:rgb(242, 248, 252);
    //width: 97%;
    //height: 70px;
    border-width:1px;
    border-style:solid;
    border-color:rgb(202, 216, 216);
    border-radius: 4px;
}
h3 { color:rgb(104, 206, 153)}
</style>