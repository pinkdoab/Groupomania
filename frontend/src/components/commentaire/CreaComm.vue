<template>
    <div v-if="this.$store.state.UserLogin !== 0">
        <div id="comm-list-example">
            <form v-on:submit.prevent="addNewComm">
                <h3>CreaComm</h3>
                <p>publication : {{ PostId }} </p>
                <div>
                    <textarea name="nom" v-model="newrequete" id="new-comm"></textarea>
                </div>
                <button class="bouton">Commentaire</button>
            </form>
        </div>
    </div>
</template>


<!------------------------------------------------------------------------>
<script>
const axios = require('axios');

export default {
    name: 'CreaComm',
    data: function() {
        return {
            newrequete: '',
        }
    },
    props: ['PostId'],
    methods: {

        addNewComm: function () {

            axios.post('http://localhost:3000/Comm', {
                texte: this.newrequete,
                publication: this.PostId,
            })

            .then(response => {
                console.log('response de la requête création post : ',response.data);
                
                this.newrequete = '';
                //this.$store.dispatch('requete_get_publication');
                this.$store.dispatch('requete_get_post_comm'); 
            })
            //this.$forceUpdate();       
        }
    }
}
</script>


<!------ Add "scoped" attribute to limit CSS to this component only ------>
<style scoped lang="scss">
#comm-list-example {
    //width: 70%;
    margin: auto;
    background-color:rgb(206, 252, 228);
    //border-width:1px;
    //border-style:solid;
    //border-color:black;
}
textarea {
    resize: none;
    width: 95%;
}
.titre {
    margin-top: 0;
}
.bouton {
    margin-bottom: 10px;
}
.input {
    margin: 10px;
}
h3 { color:rgb(104, 206, 153)}
</style>