<template>
    <div v-if="this.PostId === this.publication" class="comm">        <!-- affiche post suivant UserDisplay -->
        <div>
            <!--h3>ItemComm</h3-->
            <!--p>createurId : {{ PostId }}</p-->
            <p>createur : {{ createur }}</p>
            <!--p>{{ id }}</p-->
            <p>{{ texte }}</p>
            <!--p>{{ dateCreation }}</p>
            <p>{{ publication }}</p-->
        </div>
        <div class ="pied">
            <button v-if="this.$store.state.UserLogin == this.createur" @click="suppComm">D</button>
        </div>
    </div>
    
</template>


<!------------------------------------------------------------------------>
<script>
const axios = require('axios');

export default {
    name: 'ItemComm',
    props: ['id','texte','dateCreation','publication','createurId','PostId','createur'],
    methods: {
        suppComm: function () {

            const headers = {'Authorization': `token ${this.$store.state.token}`}
            axios.delete(`http://localhost:3000/comm/${this.id}`,{
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
.comm {
    width: 90%;
    margin: auto;
    padding: 0px 0px;
    display: flex;
    flex-direction: column;
    background-color:white;
    border-width:1px;
    border-style:solid;
    border-color:black;
}
p {
    margin-top: 0px;
    margin-bottom: 0px;
}
h3 { color:rgb(104, 206, 153)}
.entete {
    background-color:rgb(241, 243, 108);
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
</style>