<template lang="pug">
.new-board
  h2.new-board__title Введите название доски:
  input.input(v-model="newBoard.name")
  button.btn.btn--add(@click="addNewBoard") Добавить
  button.btn-icon.btn-icon--close(@click="$emit('closePopup')") Отмена

</template>

<script>
export default {
  data: () => ({
    newBoard: {
      id: '',
      name: '',
      color: '#f1e1eb'
    }}),
  methods: {
    addNewBoard() {
      this.newBoard.id = this.$store.state.data.countBoards
      console.log(this.newBoard.name)
      this.$store.commit('addNewBoard', {...this.newBoard})
      this.$emit('closePopup')
      this.newBoard.name = ''
    }
  }
}
</script>

<style lang="sass">
.new-board
  position: fixed
  top: 20%
  left: 0
  right: 0
  margin: 0 auto
  z-index: 2
  width: 300px
  height: 300px
  background-color: white
</style>