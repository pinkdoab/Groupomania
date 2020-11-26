<template>
<div v-if="this.$store.state.UserLogin !== 0" id="user-list">
    <!--h3>ListUser</h3>
    <button  @click="AffUser(0)">tous</button>
    <button  @click="AffUser(12)">Alpha</button>
    <button  @click="AffUser(13)">Bêta</button>
    <button  @click="AffUser(14)">Gamma</button>
    <button  @click="AffUser(15)">Delta</button-->
   
    <label for="user-select">Utilisateur(s) à afficher :</label>
    <select name="user" id="user-select"  v-model="selected">
        <option value="">--Choisissez un utilisateur--</option>
        <option value="0">Tous</option>
        <option v-for="user in listeUser" v-bind:key="user.id" v-bind:value="user.userId">{{ user.pseudo }}</option>
    </select>
    <!--span>Sélectionné : {{ selected }}</span-->
    <button @click="AffUser2">Afficher</button>

</div>
</template>

<!------------------------------------------------------------------------>
<script>
const axios = require('axios');
//import ItemPost from './ItemPost.vue'

export default {
    name: 'ListUser',
    data: function() {
        return {
            listeUser: [],
            selected: ''
        }
    },
    methods: {
        AffUser: function (index) {
            this.$store.commit('SET_USERDISPLAY', index)            
        },
        AffUser2: function () {
            this.$store.commit('SET_USERDISPLAY', this.selected)            
        }
    },
    created() {
        if (this.$store.state.token !== null) {
            const headers = {'Authorization': `token ${this.$store.state.token}`}
            axios.get("http://localhost:3000/user",{
                headers: headers
            })
            .then(response => {
                console.log('response requête listeUser : ',response.data);
                this.listeUser = response.data;
            });
        }
    }
}
</script>

<!------ Add "scoped" attribute to limit CSS to this component only ------>
<style scoped lang="scss">
#user-list {
    //width: 70%;
    margin: 10px auto;
    background-color:rgb(206, 252, 228);
}
h3 { color:rgb(104, 206, 153)}
</style>