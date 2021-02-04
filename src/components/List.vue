<template lang="pug">
.list
  button(@click="$store.commit('deleteList', list.id)") delete
  button(@click="viewChangeTitle = true") change
  .list-title(v-show="!viewChangeTitle")
    h2 {{list.name}}
  .list-change__title(v-show="viewChangeTitle")
    input( :value="list.name" @change="nameList = $event.target.value")
    button(@click="viewChangeTitle = false") Отмена
    button(@click="changeNameList(list.id)") Добавить
  .list-contaner
    Task(v-for="task in taskList(list.id)" :key="task.id" :task="task")
  button(v-show="!viewAdd" @click="viewAdd = true") Добавить новую финтифлюшку
  .list-add(v-show="viewAdd")
    input(placeholder="что день грядущий нам готовит" v-model="newTask.text")
    button(@click="viewAdd = false") Отмена
    button(@click="addNewTask(list.id)") Добавить
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