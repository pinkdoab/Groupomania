<template>
<div>
    <input type='text' v-model="message">
    <p>Le message 1 est : {{ message }}</p>
    <li v-for='item in liste' :key="item.id">
      {{ item }}
    </li>
</div>
</template>

<script>
export default {
  name: 'Saisie',
    data: function () {
    return {
      message: 'test',
      liste: [1, 2, 3]
    }
  },   
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>