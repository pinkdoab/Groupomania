<template>
<div v-if="this.$store.state.UserLogin !== 0" id="user-info">
    <!--h3>LoginUser</h3-->
    <!--p>UserLogin : {{ $store.state.UserLogin }}</p-->
    <p>Bonjour {{ pseudo }}</p>
    <p>Votre email : {{ email }}</p>
    <p>Créer le {{ conversionDateCreation }}</p>
    <p>Dernière activite le {{ conversionDateActivite }}</p>
    <!--p>token : {{ $store.state.token }}</p-->
    <button class="bouton" @click="suppressionUser" >Supprimer votre compte</button>
</div>
</template>


<!------------------------------------------------------------------------>
<script>
const axios = require('axios');

export default {
    name: 'LoginUser',
    data: function() {
        return {
            pseudo: 'inconnu',
            email: '',
            dateCreation: '',
            dateDerniereActivite: ''
        }
    },
    computed: {
        // un accesseur (getter) calculé
        conversionDateCreation: function () {
            const dateFormatee = new Date(this.dateCreation)
            return dateFormatee.toLocaleString();
        },
        conversionDateActivite: function () {
            const dateFormatee = new Date(this.dateDerniereActivite)
            return dateFormatee.toLocaleString();
        },
    },
    created() {
        if (this.$store.state.token !== null) {
            const headers = {'Authorization': `token ${this.$store.state.token}`}
            axios.get(`http://localhost:3000/user/${this.$store.state.UserLogin}`,{
                headers: headers
            })
            .then(response => {
                console.log('response requête infoUserLogin : ',response.data);
                this.pseudo = response.data.pseudo;
                this.email = response.data.email;
                this.dateCreation = response.data.date_creation;
               this.dateDerniereActivite = response.data.date_derniere_activite;
            });
        }
    },
    methods: {
        suppressionUser: function () {
            const headers = {'Authorization': `token ${this.$store.state.token}`}
            axios.delete(`http://localhost:3000/user/${this.$store.state.UserLogin}`,{
                headers: headers
            })
            .then(response => {
                console.log('response requête suppression : ',response.data);


                        /*this.$store.commit('CLEAR_USERLOGIN');
                        this.$store.commit('CLEAR_TOKEN');
                        this.$store.commit('CLEAR_USERDISPLAY');*/
                        this.$store.commit('SET_USERLOGIN',0);
                        this.$store.commit('SET_TOKEN', null);
                        this.$store.commit('SET_USERDISPLAY',0);
                        this.$store.dispatch('clearLocalStockage');
            })
        }
    }
}
</script>


<!------ Add "scoped" attribute to limit CSS to this component only ------>
<style scoped lang="scss">
#user-info {
    margin: 10px auto;
    background-color:rgb(206, 252, 228);
}
h3 { color:rgb(104, 206, 153)}
</style>