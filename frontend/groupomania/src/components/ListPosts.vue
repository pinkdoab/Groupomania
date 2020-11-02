<template>
    <div>
        <h1>Groupomania</h1>

        <div id="post-list-example">
            <form v-on:submit.prevent="addNewPost">
                <p>{{ requete }}</p>
                <br>

                <label for="new-post">Liste de Publications</label>
                <input
                v-model="newrequete"
                id="new-post"
                placeholder="New post..."
                >
                <button>Add</button>
            </form>
            <ul>
                <li
                is="post-item"
                v-for="(req, index) in requete"
                v-bind:key="req.id"
                v-bind:title="req.titre"
                v-on:remove="suppPost(index)"
                >
                    <PostItem/>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import PostItem from './PostItem.vue'
const axios = require('axios');

export default {
    name: 'ListPost',
    components: {
        PostItem
    },
    data () {
        return {
            requete: '',
            newrequete: '',
            itemAjout: '',
            itemSuppresion: '',
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
                    this.itemAjout = response.data;
                    this.requete.push({
                        id: this.itemAjout.id,
                        titre: this.itemAjout.titre

                    })
                });

            this.newrequete = ''                  
        },
        suppPost: function (aa) {
            console.log(aa)
            this.requete.splice(aa,1)
            axios
            .delete('http://localhost:3000/Post/'+ aa)
            .then(response => {
                this.itemSuppresion = response.data;                  
            });
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>