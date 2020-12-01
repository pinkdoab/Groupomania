<template>
<div v-if="this.$store.state.UserLogin !== 0" id="user-info">
    <!--h3>LoginUser</h3-->
    <!--p>UserLogin : {{ $store.state.UserLogin }}</p-->
    <p>Bonjour <span class= "pseudo">{{ pseudo }}</span></p>
    <p>{{ email }}</p>
    <p>Compte activé le :</p>
    <p>{{ conversionDateCreation }}</p>
    <p>Dernière activite le :</p>
    <p>{{ conversionDateActivite }}</p>
    <!--p>{{ this.$store.state.stat }}</p-->
    <li 
        v-for="item in $store.state.stat"
        v-bind:key="item.id"
    >
    <span>{{item.pseudo}} {{item.post}} </span>
    <p> {{item.Date}} </p>
    </li>

    <!--p>token : {{ $store.state.token }}</p-->
    <button class="btn" @click="suppressionUser" ><i class="fa fa-trash"></i></button>
</div>
</template>


<!------------------------------------------------------------------------>
<script>
const axios = require('axios');

export default {
    name: 'InfoUser',
    data: function() {
        return {
            pseudo: 'inconnu',
            email: '',
            dateCreation: '',
            dateDerniereActivite: ''
        }
    },
    computed: {
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
                if (response.status == 401) {
                        console.log('response.message : ', response.message)
                }
                console.log('response requête infoUserLogin : ',response.data);
                console.log(response.message);
                this.pseudo = response.data.pseudo;
                this.email = response.data.email;
                this.dateCreation = response.data.date_creation;
                this.dateDerniereActivite = response.data.date_derniere_activite;
            })
            .catch(error => {
                console.log('error.message : ',error.message);
            })

            //axios.get("http://localhost:3000/stat",{
            axios.get(`http://localhost:3000/stat/${this.$store.state.UserLogin}`,{
                headers: headers
            })
            .then(response => {
                console.log('response.data : ',response.data)
                this.$store.commit('SET_STAT', response.data);
            })
            .catch(error => {
                console.log('error.message : ',error.message);
            })


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
    //position: fixed;
    //top: 3em;
    width: 90%;
    margin: auto;
    background-color:white;
    border-width:1px;
    border-style:solid;
    border-color:black;
    border-radius: 4px;
}
p {
    margin: 0 0 .5em 0;
}
h3 { color:rgb(104, 206, 153)}
.pseudo {
    font-size: 1.8em;
    font-weight: bold;
}
.btn {
  background-color: DodgerBlue;
  border: none;
  color: white;
  border-radius: 4px;
  padding: 4px 8px;
  font-size: .8em;
  cursor: pointer;
}
/* Darker background on mouse-over */
.btn:hover {
  background-color: rgb(255, 0, 0);
}
</style>