<template lang="pug">
.list
  button.list__btn.btn-icon.btn-icon--del(@click="$store.commit('deleteList', list.id)" ) d
  button.list__btn.btn-icon.btn-icon--change(@click="viewChangeTitle = true") c
  .list__title(v-show="!viewChangeTitle")
    h2.list__title {{list.name}}
  .list__title-change(v-show="viewChangeTitle")
    input.input( :value="list.name" @change="nameList = $event.target.value")
    button.btn.btn--cancel(@click="viewChangeTitle = false") Отм
    button.btn.btn--add(@click="changeNameList(list.id)") Доб
  .list__task
    Task(v-for="task in taskList(list.id)" :key="task.id" :task="task")
  button.btn-add(v-show="!viewAdd" @click="viewAdd = true") Доб
  .list__task-add(v-show="viewAdd")
    input(placeholder="что день грядущий нам готовит" v-model="newTask.text")
    button.btn.btn--cancel(@click="viewAdd = false") Отм
    button.btn.btn--add(@click="addNewTask(list.id)") Доб
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
    }
  }

}
</script>

<style lang="sass">
.list
  width: 300px
  min-height: 100px
  background-color: #ffffff
  border-radius: 10px
  margin: 30px
  padding: 20px
  box-shadow: 0px 0px 40px -25px #95a1c5

</style>