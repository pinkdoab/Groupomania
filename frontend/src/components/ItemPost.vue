<template>
    <div class="post">
        <div class="entete">
            <p class="bordure">{{ createur }}</p>
        </div>
        <div class="corps">
            <img v-bind:src="image" width="200">
            <p>{{ $store.state.day }}/{{ $store.state.month }}/{{ $store.state.year }}

            <p class="bordure">{{ texte }}</p>
            <p class="bordure">{{ date }}</p>
            <p class="bordure">{{ createur }}</p>
            <p class="bordure">{{ id }}</p>

        </div>
        <div class ="pied">
            <!--button v-on:click="$emit('remove')">Remove</button-->
            <button  @click="suppPost">Remove2</button>
        </div>
    </div>
</template>


<!------------------------------------------------------------------------>
<script>
const axios = require('axios');

export default {
    name: 'ItemPost',
    props: ['texte','image','date','createur','id'],
    methods: {
        suppPost: function () {
            console.log('Id : ', this.id)

            axios
            .delete(`http://localhost:3000/Post/${this.id}`)
            .then(response => {
                console.log('response.data  : ',response.data); 
                this.$store.dispatch('requete_get_publication');
            this.$forceUpdate();                
            });
            this.$store.dispatch('requete_get_publication');
            this.$forceUpdate();
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
}
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
    width: 97%;
    //height: 70px;
    //border-width:1px;
    //border-style:solid;
    //border-color:black;
}
.pied {
    margin-bottom: 10px;
}
</style>