<template lang="pug">
.new-board.opacity-btn
  p.new-board__title Введите название доски:
  textarea.new-board__text(v-model="newBoard.name")
  button.new-board__add(@click="addNewBoard") Добавить
  button.btn-icon.btn-icon--close.new-board__close(@click="$emit('closePopup')")

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
      if(!this.newBoard.name) return
      this.newBoard.id = this.$store.state.data.countBoards
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
  z-index: 3
  width: 300px
  height: 260px
  background-color: white
  box-shadow: 0px 0px 22px -10px #000000
  border-radius: 20px
  padding: 20px
  color: #1f233c
  &__title
    padding: 20px 0
    border-bottom: 1px solid #e7e7e7
  &__text
    border: none
    border: 1px solid #e7e7e7
    border-radius: 3px
    width: 260px
    padding: 5px
    min-height: 30px
    height: 60px
    margin: 20px 0
    padding: 5px
  &__add
    width: 260px
    border: none
    height: 40px
    text-transform: uppercase

  &__close
    position: absolute
    top: 10px
    right: 10px
</style>