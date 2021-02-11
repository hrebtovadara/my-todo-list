<template lang="pug">
.list
  .list__btn(v-show="viewMenu" @mouseleave="viewMenu = false")
    p(@click="viewChangeTitle = true") Edit...
    p(@click="$store.commit('deleteList', list)" ) Delete
  .list__title(v-show="!viewChangeTitle")
    p {{list.name}}
    button.btn-icon--menu.btn-menu.list__btn-menu(@click="viewMenu = true")
  .list__title-change.opacity-btn(v-show="viewChangeTitle")
    textarea.input-self.input-self--list( :value="list.name" @change="nameList = $event.target.value")
    button.btn-icon.btn-icon--close(@click="viewChangeTitle = false")
    button.btn-icon.btn-icon--check(@click="changeNameList(list)")
  draggable.list__task(v-model="myList" group="people" @start="drag=true" @end="drag=false")
    Task(v-for="task in myList" :key="task.id" :task="task")
  button.btn.btn--add(v-show="!viewAdd" @click="openAddTask") Добавить
  .list__task-add(v-show="viewAdd")
    textarea.input.input__list(v-model="newTask.text" @blur="blur($event)" ref="textarea2" autofocus)
    .list__btn-add
      button.btn.btn--cancel(@click="viewAdd = false" title="cancel") Отменить
      button.btn.btn--add(@click="addNewTask(list)" title="add") Добавить
</template>

<script>
import Task from '@/components/Task'
import draggable from 'vuedraggable'

export default {
  data: () => ({
    wide: true,
    viewAdd: false,
    viewChangeTitle: false,
    newTask: {
      id: '',
      listId: '',
      text: '',
      status: true,
    },
    nameList: 'name',
    viewMenu: false,
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
        this.$store.commit('changeList', { list: list, name: this.nameList })
        this.viewChangeTitle = false
      }
    },
    openAddTask() {
      setTimeout(() => this.$refs.textarea2.focus(), 10)
      this.viewAdd = true
    },
    blur(e) {
      if (!e.relatedTarget || !e.relatedTarget.classList.contains('btn--add')) this.viewAdd = false
    },
  },
}
</script>

<style lang="sass">
.list
  width: 300px
  min-height: 100px
  background-color: #fff9de
  border-radius: 5px
  margin: 30px 0 30px
  margin-left: 20px
  padding: 15px
  position: relative
  color: #69665c
  flex-basis: 300px
  min-width: 300px

  &__btn
    position: absolute
    top: 10px
    right: 10px
    width: 120px
    border-radius: 6px
    min-height: 80px
    background-color: #ffffff
    z-index: 4
    & p
      width: 100%
      height: 40px
      padding: 15px
      color: #afac9d
      display: flex
      align-items: center
      justify-content: flex-start
      border-bottom: 1px solid #f5f5f5

  &__title
    font-size: 17px
    padding: 10px
    text-align: left
    position: relative
    font-weight: bold
    display: flex
    align-items: center
    justify-content: space-between
    &-change
      display: flex
      align-items: flex-start
      padding: 8px 0 18px


  &__task
    width: 260px
    overflow-y: auto
    max-height: 600px


.list__btn-add
  display: flex
  align-items: center
  justify-content: space-between
  width: 200px
  margin: 0 auto
</style>
