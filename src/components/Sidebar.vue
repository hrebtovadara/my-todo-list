<template lang="pug">
div.nav(:class="{wide}")
  h2(v-show="wide") Ваши доски
  router-link.nav__item(to="/") главная
  br
  router-link.nav__item(to="/board") board
  br
  button(@click="wide=!wide") click
</template>

<script>
export default {
  data: () => ({
    wide: true
  }),
}
</script>

<style lang="sass">

.nav
  width: 230px
  min-height: 100vh
  background-color: #fbfafa
  box-shadow: 15px 0px 40px -25px #95a1c5
  padding: 30px 20px
  text-align: left
  position: absolute

  &:not(.wide)
    width: 80px
    padding: 30px 5px

</style>