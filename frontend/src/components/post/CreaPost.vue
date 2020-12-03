<template>
    <div v-if="this.$store.state.UserLogin != 0">
        <button v-if="this.affichageCreaPost == 'non'" class="filet bouton btn1"  @click="affichage" >Votre nouvelle publication...</button>
        <div v-if="this.affichageCreaPost == 'oui'" id="post-list-example">
                <h2>Votre nouvelle publication...</h2>
            <form  v-on:submit.prevent="addNewPost">
                <!--div class="input">
                    <label for="avatar">{{ texteChoixImage }}</label>
                    <input type="file" id="avatar" name="avatar" @change="previewImage" accept="image/png, image/jpeg">                  
                </div-->
                <div class="image-preview" v-if="imageData.length > 0">
                    <img class="preview" :src="imageData">
                </div>
                <div>
                    <textarea class="bordure" name="nom" v-model="newrequete" id="new-post" placeholder="Votre texte..."></textarea>
                </div>
                <!--div class="input">
                    <label for="avatar">{{ texteChoixImage }}</label>
                    <input type="file" id="avatar" name="avatar" @change="previewImage" accept="image/png, image/jpeg">                  
                </div-->
                <div class="boutonEmplacement">
                    <label for="avatar">{{ texteChoixImage }}</label>
                    <input type="file" id="avatar" name="avatar" @change="previewImage" accept="image/png, image/jpeg">
                    <button class="boutonVert">Publier</button>
                    <button class="boutonRouge" @click="affichage" >Effacer</button>
                </div>
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
            imageData: '',
            texte: '',
            affichageCreaPost: 'non',
            texteChoixImage: 'Choisissez une image...'
        }
    },
    methods: {
         previewImage: function(event) {
            var input = event.target;
            if (input.files && input.files[0]) {
                var reader = new FileReader();
                reader.onload = (e) => {
                    this.imageData = e.target.result;
                }
                reader.readAsDataURL(input.files[0]);
            } else {
                this.imageData= ''
            }
        },
        affichage: function () {
            this.affichageCreaPost =='oui' ? this.affichageCreaPost ='non' : this.affichageCreaPost ='oui';
                            this.imageData= '';
        },
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
                this.imageData= '';
                this.affichageCreaPost ='non'
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
    margin-top: 0em;
    margin-bottom: 5em;
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
img {
    width: 100%;
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
h2 {
    color:rgb(2, 2, 155);
    margin: 0.1em;
    font-size: 1em;
    font-weight: bold;
    cursor: pointer;
}
/*.filet {
    border-width:1px;
    border-style:solid;
    border-color:rgb(202, 216, 216);
    border-radius: 4px;
}*/
.btn1 {
    background-color:white;
    width: 95%;
    border: none;
    color: rgb(2, 2, 155);
    border-radius: 4px;
    padding: 4px 8px;
    font-size: 1em;
    font-weight: bold;
    cursor: pointer;
}
.boutonRouge {
    margin: 0 0 .5em .5em;
    background-color:red;
    border: none;
    color: white;
    border-radius: 4px;
    padding: 4px 8px;
    font-size: 1em;
    font-weight: bold;
    cursor: pointer;
}
.boutonVert {
    margin: 0 .5em .5em 0;
    background-color:green;
    border: none;
    color: white;
    border-radius: 4px;
    padding: 4px 8px;
    font-size: 1em;
    font-weight: bold;
    cursor: pointer;
}
/*#avatar {
    margin: 0 .5em .5em 0;
    background-color:green;
    border: none;
    color: white;
    border-radius: 4px;
    padding: 4px 8px;
    font-size: 1em;
    font-weight: bold;
    cursor: pointer;
}*/
#avatar {
	width: 0.1px;
	height: 0.1px;
	opacity: 0;
	overflow: hidden;
	position: absolute;
	z-index: -1;
}
label {
    margin: 0 .5em .5em 0;
    color: black;
    border-radius: 4px;
    padding: 2px 8px;
    font-size: 1em;
    background-color: white;
    //display: inline-block;
}

label:hover {
    background-color: rgb(176, 182, 176);
}
</style>