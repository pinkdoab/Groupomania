<template>
    <div v-if="(this.$store.state.UserDisplay == this.createurId) || (this.$store.state.UserDisplay == 0)" class="post">
        <div class="entete">
            <div>
                <p>Posted by <span>{{ createurPseudo }}</span>le {{ conversionDate }} </p>
                <p class="newPost" v-if="this.dateCreation > this.$store.state.dateDerniereConnexion" ><i class="fas fa-bell animCloche"></i></p>
            </div>
            <div>
                <button v-if="(this.$store.state.UserLogin == this.createurId) || (this.$store.state.moderateur == 'oui')" @click="suppPost" class="poubelle"><i class="far fa-trash-alt"></i></button>
            </div>
        </div>
        <div class="corps">
            <img v-if="image !== 'aucune'" v-bind:src="image" width="200">           
            <p v-if="texte != ''" class="bordure">{{ texte }}</p>
                <div class="legende">
                    <div class="avisplus"><button class="btnvert" @click="avisPlus" ><i class="fas fa-thumbs-up"></i></button>{{ avisFavorable }}</div>
                    <div class="avismoins"><button class="btnrouge" @click="avisMoins" ><i class="fas fa-thumbs-down"></i></button> {{ avisDefavorable }}</div>
                    <button class="btn2" @click="affComm" >Commentaire <!--i class="fas fa-caret-square-down"></i--></button>
                </div>             
        </div>
        <div v-if="affCommentaire === 'oui'" class ="pied">
            <ListComm v-bind:PostId="id"/>
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
            affCommentaire: 'non',
            couleurComm: 'gris'
        }
    },
    computed: {
        // un accesseur (getter) calculé
        conversionDate: function () {
            const dateFormatee = new Date(this.dateCreation)
            return dateFormatee.toLocaleString();
        },       
    },
    props: ['id','texte','image','dateCreation','createurId','createurPseudo','avisFavorable','avisDefavorable' ],
    methods: {
        chgCoulComm: function () {
            //this.couleurComm = 'vert'
        },
        affComm: function () {
           if (this.affCommentaire === 'oui') {
               this.affCommentaire = 'non'
           } else this.affCommentaire = 'oui';
        },

        suppPost: function () {
            axios({
                method: 'delete',
                url: `http://localhost:3000/Post/${this.id}`,
                headers: {'Authorization': `token ${this.$store.state.token}`},
                data: { userId: parseInt(this.$store.state.UserLogin, 10)}
            })
            .then(response => {
                console.log('response requête delete : ',response.data.message); 
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
    margin: 0em auto 1em;
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
    margin: 0 .6em 0 1em;
    display: flex;
    justify-content: space-between;
    p {
        margin: auto 0;
        font-size: 1em;
        span {
            margin-left: 2px;
            margin-right: 5px;
            font-weight:bold;
            font-size: 1.6em;
            vertical-align: -1px;
        }        
    }
    div {
        display: flex;
    }
    .newPost {
            position: relative;
            top: 2px; left: .5em;
            color: rgb(33, 0, 154);
        }
    .poubelle {
        background-color: white;
        border: none;
        color: red;
        border-radius: 4px;
        padding: 0px 4px;
        font-size: 20px;
        cursor: pointer;
    }
}
.legende {
    display: flex;
    align-items: center;
    div {
        margin: 0 0em .2em 1em;
    }
}
.corps {
    margin: 0px 0px;
}
img {
    width: 100%;
}
.bordure {
    font-size: 1.2em;
    text-align: justify;
    margin-top: 0px;
    margin: 0px 15px 5px 15px;
    padding: 5px;
    background-color:rgb(242, 248, 252);
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
    position: relative;
    top: 2px; left: 0px;
    background-color: white;
    border: none;
    color:red;
    border-radius: 4px;
    padding: 0px 4px;
    font-size: 18px;
    cursor: pointer;
}
.btnvert {
    position: relative;
    top: -2px; left: 0px;
    background-color: white;
    border: none;
    color: green;
    border-radius: 4px;
    padding: 0px 4px;
    font-size: 18px;
    cursor: pointer;
}
.btn:hover {
    background-color: rgb(255, 0, 0);
}
.btn2 {
    margin-left: 1em;
    margin-bottom: .4em;
    background-color: white;
    border: none;
    color:black;
    border-radius: 4px;
    padding: 4px 8px;
    font-size: 1em;
    border-width: 1px;
    border-style: solid;
    border-color:black;
    border-radius: 4px;
    cursor: pointer;
}
.animCloche {
   animation: progress-bar 4000ms infinite ;
}
@media screen and (max-width: 700px) {
  .entete {
    font-size: .73em;
  }
}

@keyframes progress-bar{
    0% {
        transform: scaleX(0);
        opacity: .1;
    }
    60%,100% {
        opacity: 1;
    }
    100% {
        transform: scaleX(1);
    }
}
</style>