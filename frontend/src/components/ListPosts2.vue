<template>
    <div>
        <h1>Groupomania 2</h1>
<router-link to="/CreaPost">Page créa post</router-link>

        <div id="post-list-example">
            <form v-on:submit.prevent="addNewPost">
                <p>{{ publications }}</p>
                <br>
                <h3>Création de publication</h3>
                <input v-model="newrequete" id="new-post" placeholder="New post...">
                <button>Add</button>
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
        publications: []
    },
    data () {
        return {
            newrequete: ''
        }
    },
    /*mounted () {
        axios
            .get('http://localhost:3000/Post')
            .then(response => (this.publications = response.data))
            //this.$emit('emettrePublications', { message: this.publications})
    },*/
    methods: {
        addNewPost: function () {
            axios
            .post('http://localhost:3000/Post', {
                titre: this.newrequete
            })
            .then(response => {
                this.publications.push({
                    id: response.data.id,
                    titre: response.data.titre
                });
                //this.$emit('emettrePublications', { message: this.publications});
                this.newrequete = '';
            });
            //this.newrequete = ''
        }
    }
}
</script>


<!------ Add "scoped" attribute to limit CSS to this component only ------>
<style scoped lang="scss">
#post-list-example {
    background-color:rgb(206, 243, 252);
}
</style>