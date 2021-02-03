<template lang="pug">
.list
  h2.list-title {{list.name}}
  button change
  button delete
  .list-contaner
    Task(v-for="task in taskList(list.id)" :key="task.id" :task="task")
  button(v-show="!viewAdd" @click="viewAdd = true") Добавить новую финтифлюшку
  .list-add(v-show="viewAdd")
    input(placeholder="что день грядущий нам готовит")
    button(@click="viewAdd = false") Отмена
    button Добавить
</template>

<script>
import Task from '@/components/Task'

export default {
  data: () => ({
    wide: true,
    viewAdd: false
  }),
  computed: {
    taskList() {
      return (id => this.$store.state.tasks.filter(task => task.cardsId == id))
    }
  },
  components: {Task},
  props: ['list'],

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