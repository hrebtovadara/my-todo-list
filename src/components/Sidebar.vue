<template lang="pug">
.nav
  .nav__container
    router-link.nav__item.nav__item--home.nav__title(to="/home") home
    router-link.nav__item.nav__item--board(v-for="board in $store.state.boards" :to="'/board/' + board.id" )
      .circle(:style="'background-color:' + color[board.id]")
      p {{board.name}}
      button.btn-icon.nav__btn-del(@click="$store.commit('deleteTask', {task, boardId: $route.params.id})")
    button.nav__item.nav__item--home(@click="newBoardView = true" style="color: #c6c4b9") Add new board +
  newBoard(v-if="newBoardView" @closePopup="closePopup")
</template>

<script>
import newBoard from '@/components/NewBoard'
export default {
  data: () => ({
    newBoardView: false,
    color: {
      1: '#d2ceff',
      2: '#ffcece',
      3: '#fff9de',
      4: '#daf2d6',
    },
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
  height: 660px
  margin-top: 118px
  padding: 20px 10px 20px 64px
  position: absolute
  display: flex
  flex-direction: column
  align-items: center
  justify-content: space-between
  z-index: 4
  background: $color-white
  @media screen and ($mobile)
    width: 100%
    min-height: 100px
    margin-top: 60px
    padding: 20px
    align-items: flex-start

  &__btn-del
    width: 20px
    height: 20px
    position: relative
    transform: rotate(45deg)
    &:before
      position: absolute
      content: ""
      width: 14px
      height: 2px
      top: 6px
      left: 0px
      background-color: $color-brown
      border-radius: 3px
    &:after
      position: absolute
      content: ""
      width: 2px
      height: 14px
      top: 0
      left: 6px
      background-color: $color-brown
      border-radius: 3px

  &__container
    display: flex
    flex-direction: column
    align-items: flex-start
    justify-content: flex-start

  &__item
    margin-bottom: 20px
    color: $color-brown
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
