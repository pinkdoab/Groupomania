<template>
    <div v-if="this.$store.state.UserLogin !== 0">
        <div id="comm-list-example">
            <form v-on:submit.prevent="addNewComm">
                <!--h3>CreaComm</h3-->
                <!--p>publication : {{ PostId }} </p-->
                <!--div class="text"-->
                    <div class="gauche">
                        <textarea name="nom2" v-model="newrequete" placeholder="Nouveau commentaire..."></textarea>
                    </div>
                    <div class="droite">
                        <button class="btn">Poster</button>
                    </div>
                <!--/div-->
                <!--button class="bouton">Post comment</button-->
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

            const headers = {'Authorization': `token ${this.$store.state.token}`}
            axios.post('http://localhost:3000/Comm',  {
                texte: this.newrequete,
                publication: this.PostId,
                createur: this.$store.state.UserLogin
            },{
                headers: headers
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
    margin: auto;
        width: 95%;
}
form {

    display: flex;
    justify-content: space-between;
}
.btn {
    margin: auto;
    background-color: green;
    border: none;
    font-weight: bold;
    color: white;
    border-radius: 4px;
    padding: 9px 5px;
    font-size: 1em;
    cursor: pointer;
}
.text {
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    width: 100%;
}
textarea {
    resize: vertical;
    width: 99%;
    top: 2em; 
}
.gauche {
    flex: 1;
}
.droite {
    //flex: 2;
    //margin: auto 0px auto 10px;
}
</style>