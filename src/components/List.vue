<template lang="pug">
.list
  button delete
  button(@click="viewChangeTitle = true") change
  .list-title(v-show="!viewChangeTitle")
    h2 {{list.name}}
  .list-change__title(v-show="viewChangeTitle")
    input(placeholder="изменить название")
    button(@click="viewChangeTitle = false") Отмена
    button Добавить
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