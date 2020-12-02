<template>
    <div  v-if="(this.$store.state.UserDisplay == this.createurId) || (this.$store.state.UserDisplay == 0)" class="post">        <!-- affiche post suivant UserDisplay -->
        <!--h3>ItemPost</h3-->
        <div class="entete">
            <p>Posted by <span>{{ createurPseudo }}</span>le {{ conversionDate }} </p>
            {{this.$store.state.moderateur}}
            <!--p>test : {{this.$store.state.UserLogin}} {{this.createurId}}</p-->
            <button v-if="(this.$store.state.UserLogin == this.createurId) || (this.$store.state.moderateur == 'oui')" @click="suppPost" class="btn"><i class="fa fa-trash"></i><i class="fas fa-thumbs-up"></i><i class="fas fa-thumbs-down"></i><i class="far fa-trash-alt"></i><i class="fas fa-power-off"></i><i class="fas fa-angle-up"></i><i class="fas fa-angle-down"></i><i class="fas fa-bell"></i><i class="fas fa-caret-square-down"></i><i class="fas fa-caret-square-up"></i><i class="fas fa-lock"></i><i class="fas fa-lock-open"></i></button>
            <!--p>{{ dateCreation }}</p-->
            <!--button v-if="this.$store.state.UserLogin === this.createurId" @click="suppPost">D</button-->
        </div>
        <div class="corps">
            <img v-if="image !== 'aucune'" v-bind:src="image" width="200">
            
            <p class="bordure">{{ texte }}</p>
            <span>
                <!--button class="btn"><i class="fa fa-trash"></i></button-->
                <button class="btnrouge" @click="avisMoins" >-</button>
                {{ avisDefavorable }}
                <!--button class="btn"><i class="fa fa-trash"></i></button-->
                <button class="btnvert" @click="avisPlus" >+</button>
                {{ avisFavorable }}
                <!--id: {{id}} createurId: {{createurId}} UserLogin: {{this.$store.state.UserLogin}}-->
            </span>
            <button class="btn2" @click="affComm" >Affiche commentaire</button>               
        </div>
        <div v-if="affCommentaire === 'oui'" class ="pied">
 <ListComm v-bind:PostId="id"/>

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
            affCommentaire: 'non'
        }
    },
    computed: {
        // un accesseur (getter) calculé
        conversionDate: function () {
            const dateFormatee = new Date(this.dateCreation)
            return dateFormatee.toLocaleString();
        },       
    },
    //props: ['id','texte','image','dateCreation','createurId','createurPseudo'],
    props: ['id','texte','image','dateCreation','createurId','createurPseudo','avisFavorable','avisDefavorable'],
    methods: {
        affComm: function () {
           if (this.affCommentaire === 'oui') {
               this.affCommentaire = 'non'
           } else this.affCommentaire = 'oui';
        },
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
        },
        avisMoins: function () {
            const headers = {'Authorization': `token ${this.$store.state.token}`}
            axios.post(`http://localhost:3000/like/`, {
                commId: this.id,
                userId: parseInt(this.$store.state.UserLogin, 10),
                avis: -1
            },{
                headers: headers
            })
            .then( () => {
                console.log('Avis négatif');
                this.$store.dispatch('requete_get_post_comm');                             
            });
        },
        avisPlus: function () {
            const headers = {'Authorization': `token ${this.$store.state.token}`}
            axios.post(`http://localhost:3000/like/`, {
                commId: this.id,
                userId: parseInt(this.$store.state.UserLogin, 10),
                avis: 1
            },{
                headers: headers
            })
            .then( () => {
                console.log('Avis positif');
                this.$store.dispatch('requete_get_post_comm');                             
            });
        }              
    }

}
</script>


<!------ Add "scoped" attribute to limit CSS to this component only ------>
<style scoped lang="scss">
.post {
    margin: 1em auto;
    padding: 0px 0px;
    //width: 60em;
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
    margin: 0px 15px 5px 15px;
    padding: 5px;
    background-color:rgb(242, 248, 252);
    //width: 97%;
    //height: 70px;
    border-width:1px;
    border-style:solid;
    border-color:rgb(202, 216, 216);
    border-radius: 4px;
}
.pied {
    margin-bottom: 10px;
}
h3 { color:rgb(104, 206, 153)}


.btnrouge {
  background-color: rgb(255, 71, 30);
  border: none;
  color: white;
  border-radius: 4px;
  padding: 0px 4px;
  font-size: 18px;
  cursor: pointer;
}
.btnvert {
  background-color: rgb(35, 162, 10);
  border: none;
  color: white;
  border-radius: 4px;
  padding: 0px 4px;
  font-size: 18px;
  cursor: pointer;
}
.btn {
  background-color: rgb(26, 49, 252);
  border: none;
  color: white;
  border-radius: 4px;
  padding: 0px 4px;
  font-size: 18px;
  cursor: pointer;
}
/* Darker background on mouse-over */
.btn:hover {
  background-color: rgb(255, 0, 0);
}
.btn2 {
  background-color: rgb(126, 191, 255);
  border: none;
  color: white;
  border-radius: 4px;
  padding: 4px 8px;
  font-size: 10px;
  cursor: pointer;
}
</style>