<template lang="pug">
div.task
  .task__view(v-show="!viewEdit" :class="task.active? 'active' : ''")
    .task__info
      input.checkbox(type="checkbox" :id="'checkbox-'+ task.id" :checked="task.active" @change="$store.commit('activeTask', {boardId: $route.params.id, task})")
      label.label(:for="'checkbox-'+ task.id")
      p.task__text(:style="'text-decoration:' + (task.active ? 'line-through': 'none')" @click="openChangeTask()")  {{task.text}}
    .task__button
      button.btn-icon.btn-icon--del.dont-close(@click="$store.commit('deleteTask', {task, boardId: $route.params.id})" title="delete")
  .task-edit(v-show="viewEdit")
    textarea.input-self.input-self--task(:value="task.text" @input="text = $event.target.value" @blur="blur($event, task)" ref="textarea" @keydown="KeyValue($event, task)")


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
      console.log(this.text)
      if (this.text) {
        this.$store.commit('changeTask', { task, text: this.text, boardId: this.$route.params.id })
      }
      this.viewEdit = false
    },
    blur(e, task) {
      if (!e.relatedTarget || !e.relatedTarget.classList.contains('dont-close')) {
        this.changeTextTask(task)
        this.viewEdit = false
      }
    },
    KeyValue(e, task) {
      if (e.code == 'Enter') {
        this.changeTextTask(task)
      } else if (e.code == 'Escape') {
        this.viewEdit = false
      }
    },
  },
}
</script>

<style scoped lang="sass">
.task
  color: $color-brown
  padding: 7px 0
  text-align: left
  position: relative
  word-wrap:  break-word

  &:hover
    font-weight: 600
  &__view
    display: flex
    align-items: flex-start
    justify-content: space-between
    min-height: 30px
    padding: 5px

  &__info
    display: flex
    align-items: flex-start
    justify-content: flex-start

  &__text
    font-size: 14px
    width: 228px
    font-family: 'Clean', sans-serif
    min-height: 16px
    padding-top: 1px
    @media screen and ($mobile)
      min-width: 160px
      width: auto

  &__edit
    width: 230px

  & input
    margin: 0
    margin-right: 10px
  &__button
    margin-top: -5px

.task__btn-change
  display: flex
  align-items: center
  justify-content: flex-end
.active
  font-weight: 600

.btn-icon--del
  width: 10px
  height: 10px
  position: relative
  transform: rotate(45deg)
  &:before
    position: absolute
    content: ""
    width: 14px
    height: 2px
    top: 6px
    left: 0px
    background-color: $color-brown
    border-radius: 3px
  &:after
    position: absolute
    content: ""
    width: 2px
    height: 14px
    top: 0
    left: 6px
    background-color: $color-brown
    border-radius: 3px
</style>
