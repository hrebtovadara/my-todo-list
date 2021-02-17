<template lang="pug">
.list(@mouseout="viewAddButton = true" @mouseleave="viewAddButton = false")
  .list__btn(v-show="viewMenu" @mouseleave="viewMenu = false")
    p(@click="openChangeTitle()") Edit...
    p(@click="$store.commit('deleteList', list)" ) Delete
  .list__title(v-show="!viewChangeTitle")
    p.list__title--short(v-show="!viewTitleFull" @click="viewTitleFull = true") {{list.name.length > 20? list.name.slice(0, 20) + '...': list.name}}
    p.list__title--full(v-show="viewTitleFull"  @click="viewTitleFull = false") {{list.name}}
    button.btn-icon--menu.btn-menu.list__btn-menu(@click="viewMenu = true")
  .list__title-change.opacity-btn(v-show="viewChangeTitle")
    input.input-self.input-self--list(:value="list.name" @input="nameList = $event.target.value" @blur="blur($event)" @keydown="KeyValue($event)" ref="inputTitle" )
    button.btn-icon.btn-icon--check.dont-close(@click="changeNameList(list)")
  draggable.list__task(v-model="myList" group="people" @start="drag=true" @end="drag=false")
    Task(v-for="task in myList" :key="task.id" :task="task")
  button.btn.btn--add(v-show="!viewAdd && viewAddButton" @click="openAddTask" style="width: 100%") Add new task
  .list__task-add(v-show="viewAdd")
    textarea.input.input__list(v-model="newTask.text" @blur="blur($event)" ref="textarea2")
    .list__btn-add
      button.btn.btn--cancel(@click="viewAdd = false" title="cancel") Cancel
      button.btn.btn--add.dont-close(@click="addNewTask(list)" title="add") Add

</template>

<script>
import Task from '@/components/Task'
import draggable from 'vuedraggable'

export default {
  data: () => ({
    wide: true,
    viewAdd: false,
    viewAddButton: false,
    viewChangeTitle: false,
    newTask: {
      id: '',
      listId: '',
      text: '',
      active: false,
    },
    nameList: '',
    viewMenu: false,
    viewTitleFull: false,
  }),
  computed: {
    myList: {
      get() {
        return this.list.tasks
      },
      set(value) {
        this.$store.commit('updateList', {
          value,
          boardId: this.$route.params.id,
          listId: this.list.id,
        })
      },
    },
  },
  components: { Task, draggable },
  props: ['list'],
  methods: {
    addNewTask(list) {
      if (!this.newTask.text) return
      this.newTask.id = this.$store.state.data.countTasks
      this.newTask.listId = list.id
      this.$store.commit('addNewTask', {
        task: { ...this.newTask },
        boardId: this.$route.params.id,
      })
      this.newTask.text = ''
      this.viewAdd = false
    },
    changeNameList(list) {
      if (this.nameList) {
        console.log('123' + this.nameList)
        this.$store.commit('changeList', { list: list, name: this.nameList })
        this.viewChangeTitle = false
      }
    },
    openAddTask() {
      setTimeout(() => this.$refs.textarea2.focus(), 10)
      this.viewAdd = true
    },
    openChangeTitle() {
      setTimeout(() => this.$refs.inputTitle.focus(), 10)
      this.viewMenu = false
      this.viewChangeTitle = true
    },
    blur(e) {
      if (!e.relatedTarget || !e.relatedTarget.classList.contains('dont-close')) {
        this.changeNameList(this.list)
        this.viewAdd = false
      }
      this.viewChangeTitle = false
    },
    KeyValue(e) {
      if (e.code == 'Enter') {
        this.changeNameList(this.list)
        console.log('enter')
      } else if (e.code == 'Escape') {
        this.viewChangeTitle = false
      }
    },
  },
  directives: {
    focus: {
      inserted: function (el) {
        el.focus()
      },
    },
  },
}
</script>

<style lang="sass">
.list
  width: 300px
  min-height: 100px
  background-color: $color-light-yellow
  border-radius: 5px
  margin: 30px 0 0 20px
  padding: 15px
  position: relative
  color: $color-brown
  min-width: 300px
  @media screen and ($tablet)
    margin: 30px 0 0 20px
  @media screen and ($mobile)
    margin: 10px
    width: auto
    min-width: 240px
    padding: 5px
  &:last-child
    @media screen and ($mobile)
      margin-right: 20px

  &__btn
    position: absolute
    top: 20px
    right: 20px
    width: 120px
    border-radius: 6px
    min-height: 80px
    background-color: $color-white
    z-index: 4
    border: 1px solid $color-light-gray

    & p
      width: 100%
      height: 40px
      padding: 15px
      color: #afac9d
      font-size: 14px
      display: flex
      align-items: center
      justify-content: flex-start
      border-bottom: 1px solid $color-light-gray
      &:hover
        font-weight: bold

  &__title
    font-size: 17px
    min-height: 14px
    padding: 10px
    text-align: left
    position: relative
    font-weight: bold
    display: flex
    align-items: flex-start
    justify-content: space-between

    &--full
      word-wrap: break-word

    &-change
      display: flex
      align-items: center
      justify-content: space-between
      padding: 10px
      & input
        font-weight: bold
        color: $color-brown
        width: 200px
        margin-right: 10px
    & p
      width: 200px
      padding-top: 3px


  &__task
    width: 260px
    overflow-y: auto
    max-height: 600px
    @media screen and ($mobile)
      width: auto



.list__btn-add
  display: flex
  align-items: center
  justify-content: space-between
  width: 200px
  margin: 0 auto
</style>
