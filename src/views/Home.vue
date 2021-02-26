<template lang="pug">
.home-page
  img(src="@/assets/image/cat-home.png" width="200px" )
  h1.home-page__title Welcome to cat's board
  p.home-page__subtitle Настоящий кот норовит прожить свою жизнь мирно - так, чтобы люди как можно меньше в его жизнь вмешивались. В этом <i>настоящие</i> коты очень похожи на <i>настоящих</i> людей.
  .home-page__container
    .home-page__board(v-for="(board, index) in $store.state.boards" :key="index" @click="$router.push({ path: `/board/${board.id}` })") {{board.name}}
</template>

<script>
export default {
  name: 'Home.vue',
}
</script>

<style scoped lang="sass">
.home-page
  padding: 35px 60px 45px 186px
  color: #7b776b
  background-color: $color-white
  min-width: 600px
  border-radius: 10px
  margin: 60px
  @media screen and ($mobile)
    padding: 20px
    min-width: 280px
    margin: 0

  & img
    margin-bottom: 30px
  &__title
    text-transform: uppercase
    font-size: 50px
    padding: 20px
    font-family: 'Clean', sans-serif
    @media screen and ($mobile)
      font-size: 30px
      line-height: 30px
      padding: 10px 0


  &__subtitle
    margin: 0 auto
    font-size: 20px
    padding: 20px 0
    width: 650px
    font-family: 'Clean', sans-serif
    @media screen and ($mobile)
      font-size: 15px
      width: 240px
      padding: 10px 0


  &__container
    margin: 30px 0
    display: flex
    align-items: flex-start
    justify-content: center
    flex-wrap: wrap
    @media screen and ($mobile)
      margin: 0

  &__board
    width: 180px
    height: 100px
    background-color: $color-white
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
    @media screen and ($mobile)
      width: 60px
      height: 60px
      margin: 10px
      font-size: 10px
</style>
