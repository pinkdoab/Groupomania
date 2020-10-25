<template>
    <li>{{ title }} <button v-on:click="$emit('remove')">Supprimer</button></li>
</template>
<script>
export default {
    name: 'ListeTest',
    data: {
        newTodoText: '',
        todos: [
            {
            id: 1,
            title: 'Faire la vaisselle',
            },
            {
            id: 2,
            title: 'Sortir les poubelles',
            },
            {
            id: 3,
            title: 'Tondre la pelouse'
            }
        ],
        nextTodoId: 4
        },
        methods: {
        addNewTodo: function () {
            this.todos.push({
            id: this.nextTodoId++,
            title: this.newTodoText
            })
            this.newTodoText = ''
        },
    props: ['title']
    }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>