<template lang="pug">
.list
  .list__btn.opacity-btn
    button.btn-icon.btn-icon--change(@click="viewChangeTitle = true" title="change list")
    button.btn-icon.btn-icon--close(@click="$store.commit('deleteList', list.id)" title="delete list")
  .list__title(v-show="!viewChangeTitle")
    p {{list.name}}
  .list__title-change.opacity-btn(v-show="viewChangeTitle")
    textarea.input-self.input-self--list( :value="list.name" @change="nameList = $event.target.value")
    button.btn-icon.btn-icon--close(@click="viewChangeTitle = false")
    button.btn-icon.btn-icon--check(@click="changeNameList(list.id)")
  .list__task
    Task(v-for="task in taskList(list.id)" :key="task.id" :task="task")
  button.btn.btn--add(v-show="!viewAdd" @click="openAddTask") Добавить
  .list__task-add(v-show="viewAdd")
    textarea.input.input__list(v-model="newTask.text" @blur="blur($event)" ref="textarea2" autofocus)
    .list__btn-add
      button.btn.btn--cancel(@click="viewAdd = false" title="cancel") Отменить
      button.btn.btn--add(@click="addNewTask(list.id)" title="add") Добавить
</template>

<script>
import Task from '@/components/Task'

export default {
  data: () => ({
    wide: true,
    viewAdd: false,
    viewChangeTitle: false,
    newTask:  {
      id: '',
      listId: '',
      text: '',
      status: '',
    },
    nameList: ''
  }),
  computed: {
    taskList() {
      return (id => this.$store.state.tasks.filter(task => task.listId == id))
    }
  },
  components: {Task},
  props: ['list'],
  methods: {
    addNewTask(listId) {
      let id = this.$store.state.data.countTasks
      this.newTask.id = id
      this.newTask.listId = listId
      this.$store.commit('addNewTask', {...this.newTask})
      this.newTask.text = ''
      this.viewAdd = false
    },
    changeNameList(id) {
      this.$store.commit('changeList', {id, name: this.nameList})
      this.viewChangeTitle = false
    },
    openAddTask() {
      setTimeout(()=>  this.$refs.textarea2.focus(), 10)
      this.viewAdd = true
    },
    blur(e) {
      if (!e.relatedTarget || !e.relatedTarget.classList.contains('btn--add')) this.viewAdd = false
    }
  }

}
</script>

<style lang="sass">
.list
  width: 300px
  min-height: 100px
  background-color: #ffffff
  border-radius: 5px
  margin: 30px
  padding: 30px 20px 30px
  box-shadow: 0px 0px 40px -25px #95a1c5
  position: relative
  color: #1f233c


  &__btn
    position: absolute
    top: 10px
    right: 10px

  &__title
    font-size: 17px
    padding: 10px 0 20px
    text-align: left
    position: relative
    border-bottom: 1px solid #e7e7e7
    &-change
      display: flex
      align-items: center

  &__task
    width: 260px
    border-bottom: 1px solid #e7e7e7

.list__btn-add
  display: flex
  align-items: center
  justify-content: space-between
  width: 200px
  margin: 0 auto



</style>