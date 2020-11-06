<template>
    <div>
<!--router-link to="/CreaPost">Page créa post</router-link-->

        <div id="post-list-example">

            <form v-on:submit.prevent="addNewPost">
                <p>{{ publications }}</p>
            </form>
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
    props: {
        publications: []
    },
    methods: {
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