<template lang="pug">
div.nav
  .nav__container
    router-link.nav__item.nav__item--home.nav__title(to="/home") home
    router-link.nav__item.nav__item--board(v-for="board in $store.state.boards" :to="'/board/' + board.id" )
      .circle(:style="'background-color:' + color[board.id]")
      p {{board.name}}
    button.nav__item.nav__item--home(@click="newBoardView = true") Add new board
  newBoard(v-if="newBoardView" @closePopup="closePopup")
</template>

<script>
import newBoard from '@/components/NewBoard'
export default {
  data: () => ({
    newBoardView: false,
    color: { 1: '#d2ceff', 2: '#d1e5f7', 3: '#ffcece', 4: '#daf2d6' },
  }),
  filters: {
    notWide(name, wide) {
      return wide ? name : name[0].toUpperCase()
    },
  },
  components: { newBoard },
  methods: {
    closePopup() {
      this.newBoardView = false
    },
  },
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

  &__item
    margin-bottom: 20px
    color: #69665c
    padding: 5px
    text-align: left
    display: flex
    align-items: center
    justify-content: flex-start
    letter-spacing: 1px
    font-family: 'Clean', sans-serif
    font-size: 14px

    &--home
      margin-bottom: 20px
      &:hover
        font-weight: bold

    & p
      width: 140px
      max-width: 140px
      height: auto
      word-wrap:  break-word


.router-link-active
  font-weight: bold

.circle
  min-width: 30px
  height: 30px
  border-radius: 50%
  margin-right: 10px
</style>
