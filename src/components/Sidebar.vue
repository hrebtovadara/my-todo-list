<template lang="pug">
div.nav(:class="{wide}")
  .nav__container
    h2.nav__title(v-show="wide") Your cards
    router-link.nav__item.nav__item--home(to="/home") Home
    router-link.nav__item.nav__item--board(v-for="board in $store.state.boards" :to="'/board/' + board.id" ) {{board.name | notWide(wide)}}
    button(@click="newBoardView = true" :class="wide? 'nav__item' : 'nav__btn-add' ") {{wide? ('Добавить').toUpperCase(): ''}}
  button.nav__wide(@click="wide=!wide") click
  newBoard(v-if="newBoardView" @closePopup="closePopup")
</template>

<script>
import newBoard from '@/components/NewBoard'
export default {
  data: () => ({
    wide: false,
    newBoardView: false
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
  width: 230px
  min-height: 100vh
  background-color: #fbfafa
  box-shadow: 15px 0px 40px -25px
  padding: 100px 20px 60px
  position: absolute
  text-transform: uppercase
  display: flex
  flex-direction: column
  align-items: center
  justify-content: space-between
  z-index: 2
  transition: all 0.5s


  &__container
    display: flex
    flex-direction: column
    align-items: flex-start
    justify-content: flex-start

  &__title
    position: absolute
    top: 30px
    padding: 20px 32px
    margin-left: 10px
    border-bottom: 1px solid #e7e7e7
    transition: all 0.4s


  &__item
    padding: 10px
    width: 180px
    min-height: 60px
    display: flex
    align-items: center
    justify-content: center
    border-radius: 30px
    margin-bottom: 20px
    text-align: center
    border: 1px solid #c2baba
    border-bottom: 2px solid #c2baba
    transition: width 0.4s

  &__wide
    width: 60px
    height: 60px
    border-radius: 50%
    background-color: #f2cee2
    border: none

  &:not(.wide)
    width: 90px
    padding: 100px 15px 60px

    & .nav__item
      width: 60px
      min-height: 0
      height: 60px
      display: flex
      align-items: center
      justify-content: center
      border-radius: 50%
      margin-bottom: 20px
      transition: all 0.3s


    & .router-link-active
      border: 2px solid #786b64

    & .nav__btn-add
      background: none
      border-radius: 50%
      width: 60px
      height: 60px
      border: 1px solid #c2baba
      border-bottom: 2px solid #c2baba
      position: relative
      &:after
        position: absolute
        content: ""
        width: 2px
        height: 30px
        background-color: #c2baba
        top: 14px
        left: 28px
      &:before
        position: absolute
        content: ""
        width: 30px
        height: 2px
        background-color: #c2baba
        top: 28px
        left: 14px


.nav__btn
  border: none
  background: none
  width: 60px
  height: 60px

.inline-svg-icon
  width: 60px
  height: 60px




</style>