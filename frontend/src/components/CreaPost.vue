<template>
    <div>
        
<!--router-link to="/CreaPost">Page créa post</router-link-->

        <div id="post-list-example">
            <form v-on:submit.prevent="addNewPost">
                <!--p>{{ publications }}</p-->
                <h3 class="titre">Création d'une publication</h3>
                <div class="input">
                    <input type="file" id="avatar" name="avatar" accept="image/png, image/jpeg">
                </div>
                <div>
                    <!--textarea name="nom" v-model="newrequete" id="new-post" rows=4 cols=60></textarea-->
                    <textarea name="nom" v-model="newrequete" id="new-post"></textarea>
                </div>
                <button class="bouton">Publication</button>
            </form>
        </div>
    </div>
</template>


<!------------------------------------------------------------------------>
<script>
const axios = require('axios');

export default {
    name: 'ListPosts2',
    components: {
    },
    props: {
        publications: {
            type: Array
        }
    },
    data () {
        return {
            newrequete: '',
            newimage: '/Users/pink01/Desktop/photoA.png'
        }
    },
    methods: {
        addNewPost: function () {
            const formData = new FormData();
                formData.append('texte', this.newrequete);
                var imagefile = document.querySelector('#avatar');
                console.dir(imagefile.files[0])
                formData.append("image", imagefile.files[0]);

            axios
            .post('http://localhost:3000/Post', formData
            )
            .then(response => {
                console.log(response.data);
                this.publications.push({
                    id: response.data.id,
                    texte: response.data.p_texte,
                    imageUrl: response.data.p_image_url

                });
                this.newrequete = '';
            });
        }
    }
}
</script>


<!------ Add "scoped" attribute to limit CSS to this component only ------>
<style scoped lang="scss">
#post-list-example {
    width: 70%;
    margin: auto;
    background-color:rgb(206, 252, 228);
    border-width:1px;
    border-style:solid;
    border-color:black;
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
</style>