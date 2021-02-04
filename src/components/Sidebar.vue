<template lang="pug">
div.nav(:class="{wide}")
  .nav__container
    h2.nav__title(v-show="wide") Your cards
    router-link.nav__item.nav__item--home(to="/home") Home
    router-link.nav__item.nav__item--board(v-for="board in $store.state.boards" :to="'/board/' + board.id" :style="'backgroundColor :'+  board.color") {{board.name | notWide(wide)}}
  button.nav__wide(@click="wide=!wide") click
</template>

<script>
export default {
  data: () => ({
    wide: false
  }),
  filters: {
    notWide(name, wide) {
      return wide ? name : name[0].toUpperCase()
    }
  }
}
</script>

<style lang="sass">
.nav
  width: 230px
  min-height: 100vh
  background-color: #fbfafa
  box-shadow: 15px 0px 40px -25px #95a1c5
  padding: 100px 20px 60px
  text-align: left
  position: absolute
  text-transform: uppercase
  display: flex
  flex-direction: column
  align-items: flex-start
  justify-content: space-between

  &__container
    display: flex
    flex-direction: column
    align-items: flex-start
    justify-content: flex-start

  &__title
    position: absolute
    top: 30px
    padding: 20px 32px

  &__item
    padding: 10px
    width: 180px
    min-height: 60px
    display: flex
    align-items: center
    justify-content: center
    border-radius: 30px
    margin-bottom: 20px


  &__item
    padding: 10px
    width: 180px
    min-height: 60px
    display: flex
    align-items: center
    justify-content: center
    border-radius: 30px
    margin-bottom: 20px

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

    & .router-link-active
      border: 2px solid #786b64

</style>