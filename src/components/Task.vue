<template lang="pug">
div.task
  .task__view(v-show="!viewEdit" )
    p.task__text {{task.text}}
    .bnt-container
      button.btn-icon.btn-icon--change(@click="openChangeTask()" title="change")
      button.btn-icon.btn-icon--del(@click="$store.commit('deleteTask', task.id)" title="delete")
  .task-edit(v-show="viewEdit")
    textarea.input.input__task(:value="task.text" @change="text = $event.target.value" @blur="blur($event)" ref="textarea" autofocus)
    .task__btn-change
      button.btn-icon.btn-icon--check(@click="changeTextTask(task.id)" )
      button.btn-icon.btn-icon--close(@click="viewEdit = false")
</template>

<script>
export default {
  data: () => ({
    viewEdit: false,
    text: '',
    viewbutton: false,
  }),
  props: ['task'],
  methods: {
    openChangeTask() {
      setTimeout(()=>  this.$refs.textarea.focus(), 10)
      this.viewEdit = true
    },
    changeTextTask(id) {
      this.$store.commit('changeTask', {id, text: this.text})
      this.viewEdit = false
    },
    blur(e) {
      if (!e.relatedTarget || !e.relatedTarget.classList.contains('btn-icon--check')) this.viewEdit = false
    }
  }

}
</script>

<style scoped lang="sass">
.task
  border-radius: 3px
  border: 1px solid #e3e3e3
  margin: 20px 0
  background-color: #ffffff
  color: #1f233c
  padding: 20px 15px
  text-align: left
  position: relative
  &:hover
    box-shadow: 0px 4px 16px -10px #000000
  &__view
    display: flex
    align-items: center
    justify-content: space-between
    min-height: 30px
    padding: 5px

  &__text
    font-size: 14px
    width: 228px

  &__edit
    width: 230px

.bnt-container
  position: absolute
  top: 5px
  right: 5px

.task__btn-change
  display: flex
  align-items: center
  justify-content: flex-end

</style>