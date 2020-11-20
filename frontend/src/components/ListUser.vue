<template>
<div id="user-list">
    <h3>ListUser</h3>
    <button  @click="AffUser(0)">tous</button>
    <button  @click="AffUser(41)">Alpha</button>
    <button  @click="AffUser(45)">Bêta</button>
    <button  @click="AffUser(46)">Gamma</button>
    <button  @click="AffUser(47)">Delta</button>
    
</div>
</template>

<!------------------------------------------------------------------------>
<script>
//import ItemPost from './ItemPost.vue'

export default {
    name: 'ListUser',
    methods: {
        AffUser: function (zzz) {
            console.log("zzz : ", zzz)
            this.$store.commit('CHG_USERDISPLAY', zzz)
            
        }
    }
}
</script>

<!------ Add "scoped" attribute to limit CSS to this component only ------>
<style scoped lang="scss">
#user-list {
    width: 70%;
    margin: 10px auto;
    background-color:rgb(206, 252, 228);
}
</style>