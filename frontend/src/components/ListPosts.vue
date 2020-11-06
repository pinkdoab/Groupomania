<template>
    <div>
        <h1>Groupomania 1</h1>
<router-link to="/CreaPost">Page créa post</router-link>

        <div id="post-list-example">
            

            <form v-on:submit.prevent="addNewPost">
                <p>{{ publications }}</p>
                <br>

                <h3>Liste de Publications</h3>
                <input v-model="newpublication" id="new-post" placeholder="New post...">
                <button>Add</button>
            </form>
            <button>Création</button>
            <ul>
                <li is="ItemPost" 
                    v-for="(req, index) in publications"
                    v-bind:key="req.id" 
                    v-bind:title="req.titre"
                    v-on:remove="suppPost(index)"
                >
                    <ItemPost/>
                </li>
            </ul>

        </div>
    </div>
</template>


<!------------------------------------------------------------------------>
<script>
import ItemPost from './ItemPost.vue'
const axios = require('axios');

export default {
    name: 'ListPosts',
    components: {
        ItemPost
    },
    data () {
        return {
            //publications: '',
            //newpublication: ''
        }
    },
    props: {
        publications: []
    },
    /*mounted () {
        axios
            .get('http://localhost:3000/Post')
            .then(response => {
                this.publications = response.data
                //this.$emit('emettrePublications', { message: this.publications})
            })
    },*/
    methods: {
        /*addNewPost: function () {
            axios
            .post('http://localhost:3000/Post', {
                titre: this.newpublication
            })
            .then(response => {
                this.publications.push({
                    id: response.data.id,
                    titre: response.data.titre
                });
                this.$emit('emettrePublications', { message: this.publications})
            });
            this.newpublication = '';
        },*/
        suppPost: function (aa) {
            console.log(aa)
            console.table(this.publications[aa].id)
            console.log(`http://localhost:3000/Post/${this.publications[aa].id}`);

            axios
            .delete(`http://localhost:3000/Post/${this.publications[aa].id}`)
            .then(response => {
                console.log(response.data);
                this.publications.splice(aa,1)                   
            });
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