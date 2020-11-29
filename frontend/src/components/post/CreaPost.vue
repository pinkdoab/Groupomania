<template>
    <div v-if="this.$store.state.UserLogin != 0">
        <div id="post-list-example">
            <form v-on:submit.prevent="addNewPost">
                <h3>CreaPost</h3>
                <!--h3 class="titre">Création d'une publication</h3-->

                <div class="input">
                    <input type="file" id="avatar" name="avatar" accept="image/png, image/jpeg">
                </div>
                <div>
                    <textarea class="bordure" name="nom" v-model="newrequete" id="new-post"></textarea>
                </div>
                <button class="bouton">Publication</button>
                <!--p>{{ avertissement }}</p-->
            </form>
        </div>
    </div>
</template>


<!------------------------------------------------------------------------>
<script>
//import { mapState } from 'vuex' 
const axios = require('axios');

export default {
    name: 'CreaPost',
    data: function() {
        return {
            newrequete: '',
            //avertissement: ''
        }
    },
    //computed: {
    //    ...mapState(['UserLogin'])
    //},
    methods: {

        addNewPost: function () {
            var imagefile = document.querySelector('#avatar');

            /*if (this.$store.state.UserLogin == 0) {
                this.avertissement = 'Attention : aucun login sélectionné';
                return;
                }*/
            const formData = new FormData();
            formData.append('texte', this.newrequete);
            formData.append('createur', this.$store.state.UserLogin);
            if (imagefile.files[0]){
                formData.append('image', imagefile.files[0]);
            }
            
            const headers = {'Authorization': `token ${this.$store.state.token}`}
            axios.post('http://localhost:3000/Post', formData,{
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
#post-list-example {
    width: 95%;
    margin: auto;
    background-color:white;
    border-width:1px;
    border-style:solid;
    border-color:black;
    border-radius: 4px;
}
textarea {
    resize: none;
    width: 95%;
}
.bordure {
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