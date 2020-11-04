<template>
    <div class="post">
        <div class="entete">
            <h3> {{ title }}</h3>
        </div>
        <div class="corps">
            <img src="../assets/paysage1.jpg" width="200">
            <p> dsjsusd dhzudhed duehduehd d eudhuejdh dejnduhd  duhdue </p>
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
    props: ['title'],
}
</script>


<!------ Add "scoped" attribute to limit CSS to this component only ------>
<style scoped lang="scss">
.post {
    margin: 10px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    background-color:silver;
}
.entete {
    background-color:rgb(241, 243, 108);
}
.corps {
    display: flex;
    flex-direction: row;
    background-color:rgb(191, 243, 108);
}
.pied {
    background-color:rgb(248, 121, 248);    
}
</style>