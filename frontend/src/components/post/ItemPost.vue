<template>
    <div  v-if="(this.$store.state.UserDisplay == this.createurId) || (this.$store.state.UserDisplay == 0)" class="post">        <!-- affiche post suivant UserDisplay -->
        <!--h3>ItemPost</h3-->
        <div class="entete">
            <p>Posted by <span>{{ createurPseudo }}</span>le {{ conversionDate }} </p>
            <!--p>test : {{this.$store.state.UserLogin}} {{this.createurId}}</p-->
            <button v-if="this.$store.state.UserLogin == this.createurId" @click="suppPost" class="btn"><i class="fa fa-trash"></i></button>
            <!--p>{{ dateCreation }}</p-->
            <!--button v-if="this.$store.state.UserLogin === this.createurId" @click="suppPost">D</button-->
        </div>
        <div class="corps">
            <img v-if="image !== 'aucune'" v-bind:src="image" width="200">           
            <p class="bordure">{{ texte }}</p>
            <ListComm v-bind:PostId="id"/>
        </div>
        <div class ="pied">
            <!--p>this.$store.state.UserLogin  {{this.$store.state.UserLogin}}</p-->
            <!--p>createurId  {{createurId}}</p-->
            <!--button v-if="this.$store.state.UserLogin === this.createurId" @click="suppPost">Supprimer publication</button-->
        </div>
    </div>
</template>


<!------------------------------------------------------------------------>
<script>
const axios = require('axios');
import ListComm from '@/components/commentaire/ListComm.vue'

export default {
    name: 'ItemPost',
    components: {
        ListComm
    },
    data: function() {
        return {
        }
    },
    computed: {
        // un accesseur (getter) calculé
        conversionDate: function () {
            const dateFormatee = new Date(this.dateCreation)
            return dateFormatee.toLocaleString();
        },       
    },

    props: ['id','texte','image','dateCreation','createurId','createurPseudo'],
    methods: {
        suppPost: function () {

            const headers = {'Authorization': `token ${this.$store.state.token}`}
            axios.delete(`http://localhost:3000/Post/${this.id}`,{
                headers: headers
            })
            .then(response => {
                console.log('response requête delete : ',response.data.message); 
                //this.$store.dispatch('requete_get_publication');
                this.$store.dispatch('requete_get_post_comm');              
            });
            //this.$forceUpdate();
        }
    }

}
</script>


<!------ Add "scoped" attribute to limit CSS to this component only ------>
<style scoped lang="scss">
.post {
    margin: 20px 0px 0px 0px;
    padding: 0px 0px;
    display: flex;
    flex-direction: column;
    background-color:white;
    border-width:1px;
    border-style:solid;
    border-color:black;
    border-radius: 4px;
}
.entete {
    margin: 3px;
    display: flex;
    justify-content: space-between;
    p {
        margin: 0px;
        font-size: .8em;
        span {
            margin-left: 2px;
            margin-right: 5px;
            font-weight:bold;
            font-size: 2em;
            vertical-align: -1px;
        }
    }
}
.corps {
    margin: 0px 0px;
    //display: flex;
    //flex-direction: row;
    //background-color:rgb(216, 248, 249);
}
img {
    width: 100%;
}
//.pied {
    //background-color:rgb(248, 121, 248);    
//}
.bordure {
    text-align: justify;
    margin-top: 0px;
    margin: auto;
    padding: 5px;
    background-color:white;
    //width: 97%;
    //height: 70px;
    //border-width:1px;
    //border-style:solid;
    //border-color:black;
}
.pied {
    margin-bottom: 10px;
}
h3 { color:rgb(104, 206, 153)}


.btn {
  background-color: DodgerBlue;
  border: none;
  color: white;
  border-radius: 4px;
  padding: 4px 8px;
  font-size: 22px;
  cursor: pointer;
}

/* Darker background on mouse-over */
.btn:hover {
  background-color: rgb(255, 0, 0);
}
</style>