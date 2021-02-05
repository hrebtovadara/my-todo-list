<template lang="pug">
div.task
  .task__view(v-show="!viewEdit")
    p.task__text {{task.text}}
    button.btn-icon.btn-icon--change(@click="viewEdit = true") ch
    button.btn-icon.btn-icon--del(@click="$store.commit('deleteTask', task.id)") d
  .task-edit(v-show="viewEdit")
    input.input(:value="task.text" @change="text = $event.target.value")
    button.btn(@click="changeTextTask(task.id)") сох
    button.btn(@click="viewEdit = false") от
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

</style>
