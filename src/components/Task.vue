<template lang="pug">
div.task
  .task-view(v-show="!viewEdit")
    p.task__text {{task.text}}
    button.btn-icon(@click="viewEdit = true") change
    button.btn-icon delete
  .task-edit(v-show="viewEdit")
    input(:value="task.text" @change="text = $event.target.value")
    button(@click="changeTextTask(task.id)") сохранить
    button(@click="viewEdit = false") отмена
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
