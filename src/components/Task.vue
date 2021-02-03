<template lang="pug">
div.task
  .task-view(v-show="!viewEdit")
    p.task__text {{task.text}}
    button.btn-icon(@click="viewEdit = true") change
    button.btn-icon delete
  .task-edit(v-show="viewEdit")
    input(:value="task.text")
    button сохранить
    button(@click="viewEdit = false") отмена
</template>

<script>
export default {
  data: () => ({
    viewEdit: false
  }),
  props: ['task']

}
</script>

<style scoped lang="sass">

</style>
