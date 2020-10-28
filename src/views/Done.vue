<template>
  <div class="done">
      <task v-for="todo in itemsList"
            :key="todo.id"
            :todo="todo"
            v-on:item-completed="itemCompleted"
            v-on:item-remove="itemRemove"
      />
  </div>
</template>

<script>
  // @ is an alias to /src
  import Task from '../components/Task.vue'

  export default {
    name: 'Todo',
    components: {
      Task
    },
    computed: {
      itemsList() {
        return this.$store.state.itemsList.filter((elem) => elem.status == "done")
      }
    },
      methods: {
          itemCompleted(todo) {
              this.$store.dispatch('asyncChangeStatus', todo)
          },
          itemRemove(todo) {
              this.$store.dispatch('itemRemove', todo)
          }
      }
  }

</script>

