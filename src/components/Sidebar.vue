<template lang="pug">
div.nav
  .nav__container

    router-link.nav__item--home.nav__title(to="/home") home
    router-link.nav__item.nav__item--board(v-for="board in $store.state.boards" :to="'/board/' + board.id" )
      .circle(:style="'background-color:' + color[board.id]")
      span {{board.name}}
    button.btn(@click="newBoardView = true") Добавить
  newBoard(v-if="newBoardView" @closePopup="closePopup")
</template>

<script>
import newBoard from '@/components/NewBoard'
export default {
  data: () => ({
    newBoardView: false,
    color: {1: '#d2ceff', 2: '#d1e5f7', 3: '#ffcece', 4: '#daf2d6'}
  }),
  filters: {
    notWide(name, wide) {
      return wide ? name : name[0].toUpperCase()
    },
  },
  components: {newBoard},
  methods: {
    closePopup() {
      this.newBoardView = false
    }
  }
}
</script>

<style lang="sass">
.nav
  width: 260px
  min-height: 100vh
  margin-top: 118px
  padding: 20px 10px 20px 64px
  position: absolute
  display: flex
  flex-direction: column
  align-items: center
  justify-content: space-between
  z-index: 4
  background: #ffffff

  &__container
    display: flex
    flex-direction: column
    align-items: flex-start
    justify-content: flex-start

  &__title
    color: #69665c
    font-size: 20px
    font-weight: bold

  &__item
    margin-bottom: 20px
    color: #69665c
    padding: 5px
    text-align: left
    font-size: 14px
    display: flex
    align-items: center
    justify-content: flex-start
    &--home
      margin-bottom: 20px
      margin-left: 44px

.nav__btn
  border: none
  background: none
  width: 60px
  height: 60px
  &-add
    background: #95a1c5

.inline-svg-icon
  width: 60px
  height: 60px

.circle
  min-width: 30px
  height: 30px
  border-radius: 50%
  margin-right: 10px


</style>