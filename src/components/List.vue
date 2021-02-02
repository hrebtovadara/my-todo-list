<template lang="pug">
.list
  h2.list-title Ваш список
  button change
  button delete
  .list-contaner
    Task
    Task
    Task
  button Добавить новую финтифлюшку
</template>

<script>
import Task from '@/components/Task'

export default {
  data: () => ({
    wide: true
  }),
  components: {Task}
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