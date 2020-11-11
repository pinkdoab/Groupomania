<template>
    <div>
        
<!--router-link to="/CreaPost">Page créa post</router-link-->

        <div id="post-list-example">
            <form v-on:submit.prevent="addNewPost">
                <!--p>{{ publications }}</p-->
                <h3>Création de publication</h3>
                <!--input v-model="newrequete" id="new-post" placeholder="New post..."-->
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
                formData.append('titre', 'rrrrrr');
                //formData.append('image', '/Users/pink01/Desktop/sauceA.jpg');
                var imagefile = document.querySelector('#avatar');
                formData.append("image", imagefile.files[0]);

            axios
            .post('http://localhost:3000/Post', formData, {
                headers: {
                'Content-Type': 'multipart/form-data'
                }
            })
            .then(response => {
                console.log(response);
                this.publications.push({
                    id: response.data.id,
                    titre: response.data.titre
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