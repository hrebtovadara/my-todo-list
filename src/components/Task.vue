<template lang="pug">
div.task
  .task__view(v-show="!viewEdit" :class="task.active? 'active' : ''")
    input.checkbox(type="checkbox" :id="'checkbox-'+ task.id" :checked="task.active" @change="$store.commit('activeTask', {boardId: $route.params.id, task})")
    label.task__text.label(:for="'checkbox-'+ task.id" :style="'text-decoration:' + (task.active ? 'line-through': 'none')") {{task.text}}
    button.btn-icon.btn-icon--change(@click="openChangeTask()" title="change" style="margin-left: 15px")
  .task-edit(v-show="viewEdit")
    textarea.input-self.input-self--task(:value="task.text" @change="text = $event.target.value" @blur="blur($event)" ref="textarea")
    .task__btn-change
      button.btn-icon.btn-icon--check.dont-close(@click="changeTextTask(task)" )
      button.btn-icon.btn-icon--del.dont-close(@click="$store.commit('deleteTask', {task, boardId: $route.params.id})" title="delete")
      button.btn-icon.btn-icon--close

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
      setTimeout(() => this.$refs.textarea.focus(), 10)
      this.viewEdit = true
    },
    changeTextTask(task) {
      if (!this.task.text) return
      this.$store.commit('changeTask', { task, text: this.text, boardId: this.$route.params.id })
      this.viewEdit = false
    },
    blur(e) {
      if (!e.relatedTarget || !e.relatedTarget.classList.contains('dont-close'))
        this.viewEdit = false
    },
  },
}
</script>

<style scoped lang="sass">
.task
  color: #69665c
  padding: 7px 0
  text-align: left
  position: relative
  &:hover
    font-weight: 600
  &__view
    display: flex
    align-items: flex-start
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
