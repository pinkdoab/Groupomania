<template>
<div v-if="this.$store.state.UserLogin !== 0" id="user-list">
    <h3>ListUser</h3>
    <button  @click="AffUser(0)">tous</button>
    <button  @click="AffUser(1)">Pink</button>
    <button  @click="AffUser(2)">Alpha</button>
    <button  @click="AffUser(3)">Bêta</button>
    <button  @click="AffUser(4)">Gamma</button>
    <button  @click="AffUser(5)">Delta</button>
    
</div>
</template>

<!------------------------------------------------------------------------>
<script>
//import ItemPost from './ItemPost.vue'

export default {
    name: 'ListUser',
    methods: {
        AffUser: function (index) {
            this.$store.commit('CHG_USERDISPLAY', index)            
        }
    }
}
</script>

<!------ Add "scoped" attribute to limit CSS to this component only ------>
<style scoped lang="scss">
#user-list {
    //width: 70%;
    margin: 10px auto;
    background-color:rgb(206, 252, 228);
}
</style>