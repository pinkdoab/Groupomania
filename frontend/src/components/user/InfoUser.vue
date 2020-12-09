<template>
    <div v-if="this.$store.state.UserLogin !== 0" id="user-info">
        <p class="titre">Bonjour <span class="pseudo">{{ pseudo }}</span><!--i class="fas fa-caret-square-up"></i--></p>
        <button class="btn info" @click="reduire" >{{ texteBoutonBloc }}</button>
        <div v-if="this.reduireBloc === 'non'">
            <p>{{ email }}</p>
            <div class="information">
                <p>Création du compte :</p>
                <p>{{ conversionDateCreation }}</p>
            </div>
            <div class="information">
                <p>Dernière activité :</p>
                <p>{{ conversionDateActivite }}</p>
            </div>
            <p>Modérateur : {{ moderateur }}<!--i class="fas fa-lock"></i><i class="fas fa-lock-open"></i></p--></p>
            <div v-if="this.moderateur == 'oui' ">
                <h3>Activité des membres</h3>
                <h3> ces 15 derniers jours</h3>
                <ul>
                <li 
                    v-for="item in $store.state.stat"
                    v-bind:key="item.id"
                >
                <p v-if="item.post == 1">{{item.pseudo}} {{item.post}} publication</p>
                <p v-if="item.post > 1">{{item.pseudo}} {{item.post}} publications</p>
                </li>
                </ul>
            </div>
            <button class="btn" @click="suppressionUser" >Supprimer votre compte <i class="far fa-trash-alt"></i></button>
        </div>
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
            dateDerniereActivite: '',
            moderateur: 'non',
            reduireBloc: 'oui',
            texteBoutonBloc: 'Plus d\'informations'
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
        }
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
                this.moderateur = response.data.moderateur;

                this.$store.commit('SET_MODERATEUR', response.data.moderateur);
                this.$store.commit('SET_DATECONNECTION', response.data.date_derniere_activite);
            })
            .catch(error => {
                console.log('error.message : ',error.message);
            })

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
        reduire: function () {
            this.reduireBloc =='oui' ? this.reduireBloc ='non' : this.reduireBloc ='oui';
            this.reduireBloc =='oui' ? this.texteBoutonBloc ='Plus d\'informations' : this.texteBoutonBloc ='Moins d\'informations';
        },
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
    width: 90%;
    margin: auto;
    background-color:white;
    border-width:1px;
    border-style:solid;
    border-color:black;
    border-radius: 4px;
    .titre {
        margin: 0;
    }
    p {
        margin: 0 0 .5em 0;
    }
    h3 {
        margin: 0;
    }
    .pseudo {
        font-size: 1.8em;
        font-weight: bold;
    }
    .information {
        p:first-of-type {
            font-weight: bold;
            margin-top: 1.5em;
            margin-bottom: 0;
        }
    }
}
button {
    margin: 0;
}
.btn {
    margin-bottom: 1em;
    background-color: DodgerBlue;
    border: none;
    color: white;
    border-radius: 4px;
    padding: 4px 8px;
    font-size: .8em;
    cursor: pointer;    
    }
    .btn:hover {
        background-color: rgb(255, 0, 0);
    }
    .info:hover {
        background-color: green;
}
@media screen and (max-width: 700px) {
  #user-info {
    width: 100%;
  }
}
</style>