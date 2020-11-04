<template>
    <div>
        <h1>Groupomania 2</h1>
<router-link to="/CreaPost">Page créa post</router-link>

        <div id="post-list-example">
            

            <form v-on:submit.prevent="addNewPost">
                <p>{{ publications }}</p>
                <br>

                <h3>Liste de Publications</h3>
                <input v-model="newrequete" id="new-post" placeholder="New post...">
                <button>Add</button>
            </form>
            

        </div>
    </div>
</template>


<!------------------------------------------------------------------------>
<script>
//import ItemPost from './ItemPost.vue'
const axios = require('axios');

export default {
    name: 'ListPosts',
    components: {
        //ItemPost
    },
    data () {
        return {
            publications: '',
            newrequete: ''
        }
    },
    mounted () {
        axios
            .get('http://localhost:3000/Post')
            .then(response => (this.publications = response.data))
    },
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
                })
            });
            this.newrequete = ''                  
        },
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