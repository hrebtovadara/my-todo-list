<template lang="pug">
.new-board-container.opacity-btn
  .dark-theme-fon(@click="$emit('closePopup')")
  .new-board
    p.new-board__title Введите название доски:
    textarea.input.input__list(v-model="newBoard.name" v-focus)
    button.btn(@click="addNewBoard") Добавить
    button.btn-icon.btn-icon--close.new-board__close(@click="$emit('closePopup')")

</template>

<script>
export default {
  data: () => ({
    newBoard: {
      id: '',
      name: '',
      color: '#f1e1eb',
    },
  }),
  methods: {
    addNewBoard() {
      if (!this.newBoard.name) return
      this.newBoard.id = this.$store.state.data.countBoards
      this.$store.commit('addNewBoard', { ...this.newBoard })
      this.$emit('closePopup')
      this.newBoard.name = ''
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
  background-color: #fff9de
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
