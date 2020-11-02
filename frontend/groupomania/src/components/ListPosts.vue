<template>
    <div>
        <h1>Groupomania</h1>

        <div id="post-list-example">

            <form v-on:submit.prevent="addNewPost">
                <p>{{ requete }}</p>
                <br>

                <h3>Liste de Publications</h3>
                <input v-model="newrequete" id="new-post" placeholder="New post...">
                <button>Add</button>
            </form>

            <ul>
                <li is="ItemPost" 
                    v-for="(req, index) in requete"
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
            requete: '',
            newrequete: ''
        }
    },
    mounted () {
        axios
            .get('http://localhost:3000/Post')
            .then(response => (this.requete = response.data))
    },
    methods: {
        addNewPost: function () {
            axios
            .post('http://localhost:3000/Post', {
                titre: this.newrequete
            })
            .then(response => {
                this.requete.push({
                    id: response.data.id,
                    titre: response.data.titre
                })
            });
            this.newrequete = ''                  
        },
        suppPost: function (aa) {
            console.log(aa)
            console.table(this.requete[aa].id)
            console.log(`http://localhost:3000/Post/${this.requete[aa].id}`);

            axios
            .delete(`http://localhost:3000/Post/${this.requete[aa].id}`)
            .then(response => {
                console.log(response.data);
                this.requete.splice(aa,1)                   
            });
        }
    }
}
</script>


<!------ Add "scoped" attribute to limit CSS to this component only ------>
<style scoped lang="scss">
</style>