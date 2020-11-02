<template>
    <div class="bloc">
        <p> {{ title }}</p>
        <button v-on:click="$emit('remove')">Remove</button>
        
    </div>
</template>

<script>

export default {
    name: 'PostItem',
    props: ['title'],
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.bloc {
    background-color:silver;
}


</style>