<template lang="pug">
div.task
  .task__view(v-show="!viewEdit" :class="{active}")
    input.checkbox(type="checkbox" :id="'checkbox-'+ task.id" v-model="active")
    label.task__text.label(:for="'checkbox-'+ task.id" :style="'text-decoration:' + (active?'line-through': 'none')") {{task.text}}
    button.btn-icon.btn-icon--change(@click="openChangeTask()" title="change")
  .task-edit(v-show="viewEdit")
    textarea.input.input__task(:value="task.text" @change="text = $event.target.value" @blur="blur($event)" ref="textarea" autofocus)
    .task__btn-change
      button.btn-icon.btn-icon--check.dont-close(@click="changeTextTask(task)" )
      button.btn-icon.btn-icon--del.dont-close(@click="$store.commit('deleteTask', {task, idBoard: $route.params})" title="delete")
      button.btn-icon.btn-icon--close

</template>

<script>
export default {
  data: () => ({
    viewEdit: false,
    text: '',
    viewbutton: false,
    active: false
  }),
  props: ['task'],
  methods: {
    openChangeTask() {
      setTimeout(()=>  this.$refs.textarea.focus(), 10)
      this.viewEdit = true
    },
    changeTextTask(task) {
      if(!this.task.text) return
      this.$store.commit('changeTask', {task, text: this.text, idBoard: this.$route.params})
      this.viewEdit = false
    },
    blur(e) {
      if (!e.relatedTarget || !e.relatedTarget.classList.contains('dont-close'))this.viewEdit = false
    }
  }

}
</script>

<style scoped lang="sass">
.task
  color: #69665c
  margin-right: 15px
  padding: 10px 0
  text-align: left
  position: relative
  &:hover
    font-weight: 600
  &__view
    display: flex
    align-items: center
    justify-content: space-between
    min-height: 30px
    padding: 5px

  &__text
    font-size: 14px
    width: 228px
    font-family: 'Clean', sans-serif
    min-height: 16px
    padding-top: 2px

  &__edit
    width: 230px

  & input
    margin: 0
    margin-right: 10px

.task__btn-change
  display: flex
  align-items: center
  justify-content: flex-end
.active
  font-weight: 600
</style>