<template lang="pug">
.home-page
  h1.home-page__title Welcome to your board
  .home-page__line
  p.home-page__subtitle Семь колец - искусным гномам во дворце подгорном. Девять- людям Средиземья, на смерть обреченным. А одно - владыке тьмы на престоле черном, в Мордоре, где ночь и день - суть одно и то же.
  .home-page__container
    .home-page__board(v-for="board in $store.state.boards" :key="board.id" @click="$router.push({ path: `/board/${board.id}` })") {{board.name}}
</template>

<script>
export default {
name: "Home.vue"
}
</script>

<style scoped lang="sass">
.home-page
  padding: 45px 60px 45px 150px
  color: #7b776b
  width: 100%
  height: 100vh
  background-color: #ffffff
  &__title
    text-transform: uppercase
    font-size: 50px
    padding: 20px
    font-family: 'Clean', sans-serif

  &__subtitle
    margin: 0 auto
    font-size: 20px
    padding: 20px 0
    width: 700px
    font-family: 'Clean', sans-serif

  &__container
    margin: 30px 0
    display: flex
    align-items: flex-start
    justify-content: center

  &__board
    width: 180px
    height: 100px
    background-color: white
    margin: 30px 15px
    display: flex
    align-items: center
    justify-content: center
    text-transform: uppercase
    font-size: 16px
    border-radius: 3px
    padding: 20px
    &:hover
      background: #e3dec7

  &__line
    width: 100px
    height: 2px
    background-color: #7b776b
    margin: 0 auto


</style>