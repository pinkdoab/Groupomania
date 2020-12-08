<template>
<div v-if="this.$store.state.UserLogin !== 0" id="user-list">
   
    <label v-if="this.$store.state.UserDisplay == 0" for="user-select">Utilisateurs affichés:</label>
    <label v-if="this.$store.state.UserDisplay != 0" for="user-select">Utilisateur affiché:</label>
    <select name="user" id="user-select"  v-model="selected" @change="AffUser">
        <option value="0">Tous</option>
        <option v-for="user in listeUser" v-bind:key="user.id" v-bind:value="user.userId">{{ user.pseudo }}</option>
    </select>

</div>
</template>

<!------------------------------------------------------------------------>
<script>
const axios = require('axios');
//import ItemPost from './ItemPost.vue'

export default {
    name: 'ChgUser',
    data: function() {
        return {
            listeUser: [],
            selected: '0'
        }
    },
    methods: {
        AffUser: function () {
            this.$store.commit('SET_USERDISPLAY', this.selected)
            localStorage.setItem("groupomania_userDisplay",this.selected)      
        }
    },
    created() {

        if (this.$store.state.token !== null) {
            this.selected = this.$store.state.UserDisplay
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
    width: 90%;
    margin: 10px auto;
    background-color:white;
    border-width:1px;
    border-style:solid;
    border-color:black;
    border-radius: 4px;
}
h3 { color:rgb(104, 206, 153)}
@media screen and (max-width: 700px) {
  #user-list {
    width: 100%;
  }
}

</style>