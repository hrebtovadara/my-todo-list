<template>
    <div class="task-container">
        <input class="task-container__checkbox" type="checkbox" :id="`task${todo.id}`"
               @change="$emit('item-completed', todo)" v-model="todo.status === 'done'">
        <label :for="`task${todo.id}`" class="task-container__text">{{todo.text}}</label>
        <button class="task-container__remove" @click="$emit('item-remove', todo)"><img
                class="task-container__remove-img"  alt="delete"></button>
    </div>
</template>

<script>

    export default {
        data() {
            return {}
        },
        props: {
            todo: {type: Object}
        },
        created: function () {
            console.log('create' + this.todo.id)
        },

    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
.task-container
  width: 600px
  min-height: 50px
  background-color: #f2f1fe
  border-radius: 10px
  margin: 15px auto
  padding: 10px 20px
  display: flex
  align-items: center
  justify-content: space-between
  color: #2c3e50
  font-size: 20px
  font-weight: 700
  position: relative

.task-container__text
  padding-left: 30px
  width: 500px
  text-align: left

.task-container__remove
  height: 20px
  width: 20px
  background-color: transparent
  border: none
  padding: 0

.task-container__checkbox
  display: none
  position: relative

  + label::before
    position: absolute
    content: ""
    top: 25px
    left: 15px
    width: 20px
    height: 20px
    background-color: #2c3e50

  &:checked + label::after
    position: absolute
    content: ""
    top: 30px
    left: 20px
    width: 10px
    height: 10px
    background-color: #d1e2f3ab
</style>
