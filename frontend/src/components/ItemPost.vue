<template>
    <div class="post">
        <div class="entete">
            <!--h3> {{ title }}</h3-->
        </div>
        <div class="corps">
            <img v-bind:src="image" width="200">
            <p class="bordure">{{ texte }}</p>
        </div>
        <div class ="pied">
            <button v-on:click="$emit('remove')">Remove</button>
        </div>
    </div>
</template>


<!------------------------------------------------------------------------>
<script>
export default {
    name: 'ItemPost',
    props: ['texte','image']
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