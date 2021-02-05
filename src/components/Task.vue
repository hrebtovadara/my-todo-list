<template lang="pug">
div.task
  .task__view(v-show="!viewEdit")
    p.task__text {{task.text}}
    .bnt-container
      button.btn-icon.btn-icon--change(@click="viewEdit = true" title="change")
      button.btn-icon.btn-icon--del(@click="$store.commit('deleteTask', task.id)" title="delete")
  .task-edit(v-show="viewEdit")
    input.input(:value="task.text" @change="text = $event.target.value")
    button.btn-icon.btn-icon--check(@click="changeTextTask(task.id)" )
    button.btn-icon.btn-icon--close(@click="viewEdit = false")
</template>

<script>
export default {
  data: () => ({
    viewEdit: false,
    text: ''
  }),
  props: ['task'],
  methods: {
    changeTextTask(id) {
      this.$store.commit('changeTask', {id, text: this.text})
      this.viewEdit = false
    }
  }

}
</script>

<style scoped lang="sass">
.task
  border-radius: 5px
  border: 2px solid #e3e3e3
  margin: 10px 0
  &__view
    display: flex
    align-items: center
    justify-content: space-between
    height: 40px
    padding: 5px

</style>