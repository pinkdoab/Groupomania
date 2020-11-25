<template>
<div  id="user-info">
    <!--h3>LoginUser</h3-->
    <!--p>UserLogin : {{ $store.state.UserLogin }}</p-->
    <p>Bonjour {{ pseudo }}</p>
    <p>Votre email : {{ email }}</p>
    <p>Créer le {{ conversionDateCreation }}</p>
    <p>Dernière activite le {{ conversionDateActivite }}</p>
    <!--p>token : {{ $store.state.token }}</p-->
</div>
</template>


<!------------------------------------------------------------------------>
<script>
const axios = require('axios');

export default {
    name: 'LoginUser',
    data: function() {
        return {
            pseudo: '',
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