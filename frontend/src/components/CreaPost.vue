<template>
    <div>
        
<!--router-link to="/CreaPost">Page créa post</router-link-->

        <div id="post-list-example">
            <form v-on:submit.prevent="addNewPost">
                <p>{{ publications }}</p>
                <h3>Création de publication</h3>
                <textarea name="nom" v-model="newrequete" id="new-post" rows=4 cols=40></textarea>
                <button>Publication</button>
            </form>
            <input type="file"
                id="avatar" name="avatar"
                accept="image/png, image/jpeg">
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
                formData.append('titre', this.newrequete);
                var imagefile = document.querySelector('#avatar');
                console.dir(imagefile.files[0])
                formData.append("image", imagefile.files[0]);

            axios
            .post('http://localhost:3000/Post', formData
            )
            .then(response => {
                console.log(response);
                this.publications.push({
                    id: response.data.id,
                    titre: response.data.titre,
                    imageUrl: response.data.imageUrl

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
    background-color:rgb(206, 252, 228);
}
</style>