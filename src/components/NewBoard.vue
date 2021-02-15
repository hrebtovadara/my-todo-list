<template lang="pug">
.new-board-container.opacity-btn
  .dark-theme-fon(@click="$emit('closePopup')")
  .new-board
    p.new-board__title Введите название доски:
    textarea.input.input__list(v-model="newNameBoard" maxlength="72")
    button.btn(@click="addNewBoard") Добавить
    button.btn-icon.btn-icon--close.new-board__close(@click="$emit('closePopup')")

</template>

<script>
export default {
  data: () => ({
    newNameBoard: '',
  }),
  methods: {
    addNewBoard() {
      if (!this.newNameBoard) return
      let board = {
        id: this.$store.state.data.countBoards,
        name: this.newNameBoard,
        list: [],
      }
      console.log('board')
      console.log(board)
      this.$store.commit('addNewBoard', { ...board })
      this.$emit('closePopup')
      this.newNameBoard = ''
    },
  },
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
  min-height: 200px
  background-color: $color-light-yellow
  border-radius: 3px
  padding: 20px
  color: #1f233c
  &__title
    padding: 20px 0
    margin-bottom: 20px
    text-transform: none
  &__close
    position: absolute
    top: 10px
    right: 10px
</style>
