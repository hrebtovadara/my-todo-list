<template>
  <div class="home">
    <new-task
      v-on:add-new-task="addNewTask"
    />
    <task v-for="todo in itemsList"
      :key="todo.id"
      :todo="todo"
      v-on:item-completed="itemCompleted"
      v-on:item-remove="itemRemove"
     />
  </div>
</template>

<script>

import Task from '../components/Task.vue'
import NewTask from '../components/NewTask.vue'

export default {
  name: 'Todo',
  components: {
    Task,
    NewTask
  },
  computed: {
      itemsList() {
        return this.$store.state.itemsList.filter((elem) => elem.status === "todo")
      }
  },
  methods: {
      itemCompleted(todo) {
          this.$store.dispatch('asyncChangeStatus', todo)
          console.log('done ' + todo.id)
      },

      itemRemove(todo) {
          this.$store.dispatch('itemRemove', todo)
          console.log('remove ' + todo.id)
      },

      addNewTask(task) {
          this.$store.dispatch('addNewTask', task)
      }
   }
}

</script>
