<template>
    <div  v-if="(this.$store.state.UserDisplay === this.createurId) || (this.$store.state.UserDisplay === 0)" class="post">        <!-- affiche post suivant UserDisplay -->
    <!--div class="post"-->
        <div class="entete">
            <!--p class="bordure">id : {{ id }}</p-->
            <p class="bordure">{{ createurPseudo }}{{ dateCreation }}</p>
        </div>
        <div class="corps">
            <img v-if="image !== 'aucune'" v-bind:src="image" width="200">           
            <p class="bordure">{{ texte }}</p>
        </div>
        <div class ="pied">
            <!--button v-on:click="$emit('remove')">Remove</button-->
            <button @click="suppPost">Supprimer</button>
        </div>
    </div>
</template>


<!------------------------------------------------------------------------>
<script>
const axios = require('axios');

export default {
    name: 'ItemPost',
    props: ['id','texte','image','dateCreation','createurId','createurPseudo'],
    created() {
        console.log('création');

    },
    methods: {
        suppPost: function () {

            axios
            .delete(`http://localhost:3000/Post/${this.id}`)
            .then(response => {
                console.log('response requête delete : ',response.data.message); 
                this.$store.dispatch('requete_get_publication');              
            });
            //this.$forceUpdate();
        }
    }

}
</script>


<!------ Add "scoped" attribute to limit CSS to this component only ------>
<style scoped lang="scss">
.post {
    margin: 20px 0px 0px 0px;
    padding: 0px 0px;
    display: flex;
    flex-direction: column;
    background-color:white;
    border-width:1px;
    border-style:solid;
    border-color:black;
}
.entete {
    background-color:rgb(241, 243, 108);
}
.corps {
    margin: 0px 0px;
    //display: flex;
    //flex-direction: row;
    //background-color:rgb(216, 248, 249);
}
img {
    width: 100%;
}
//.pied {
    //background-color:rgb(248, 121, 248);    
//}
.bordure {
    text-align: justify;
    margin-top: 0px;
    margin: auto;
    padding: 5px;
    background-color:white;
    width: 97%;
    //height: 70px;
    //border-width:1px;
    //border-style:solid;
    //border-color:black;
}
.pied {
    margin-bottom: 10px;
}
</style>