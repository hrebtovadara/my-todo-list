<template>
    <form class="new-task" @submit="addNewTask">
        <input type="text" class="new-task__text" v-model="newTask">
        <button class="new-task__add" type="submit">ADD</button>
    </form>
</template>

<script>
    export default {
        data() {
            return {
                newTask: ""
            }
        },
        methods: {
            addNewTask() {
                if (this.newTask !== "") {
                    let Task = {
                        id: this.$store.state.counter,
                        status: "todo",
                        text: this.newTask
                    }
                    this.$emit('add-new-task', Task)
                    this.newTask = ""
                    this.$store.state.counter++
                }
            }
        }
    }
</script>

<style lang="sass">
.new-task
  width: 768px
  min-height: 70px
  display: flex
  justify-content: space-between
  box-sizing: border-box
  padding: 20px

.new-task__text
  box-sizing: border-box
  width: 560px
  min-height: 70px
  border: none
  background-color: #d1e2f3ab
  margin: 0
  padding: 10px
  box-shadow: inset 6px 4px -4px rgba(0, 0, 0, 0.2)
  border-radius: 10px

.new-task__add
  width: 150px
  border: none
  color: white
  font-weight: bold
  color: #ffffff
  font-size: 25px
  background-color: #488e87
  border-radius: 10px

  &:hover
    background-color: #488e87

</style>