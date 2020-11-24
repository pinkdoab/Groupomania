<template>
<div  id="user-info">
    <h3>LoginUser</h3>
    <p>UserLogin : {{ $store.state.UserLogin }}</p>
    <!--p>token : {{ $store.state.token }}</p-->
</div>
</template>


<!------------------------------------------------------------------------>
<script>

export default {
    name: 'LoginUser'
}
</script>


<!------ Add "scoped" attribute to limit CSS to this component only ------>
<style scoped lang="scss">
#user-info {
    margin: 10px auto;
    background-color:rgb(206, 252, 228);
}
h3 { color:rgb(104, 206, 153)}
</style>