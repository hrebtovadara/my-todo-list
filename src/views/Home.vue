<template lang="pug">
.home-page
  h1.home-page__title Welcome to your board
  h3.home-page__subtitle Оба мы необщительны, молчаливы и не желаем раскрывать рта, если не помышляем произнести такое, что потрясет все собранье и будет передаваться из поколенья в поколенье со всем блеском пословицы.
  .home-page__container
    .home-page__board(v-for="board in $store.state.boards" :key="board.id") {{board.name}}
</template>

<script>
export default {
name: "Home.vue"
}
</script>

<style scoped lang="sass">
.home-page
  padding: 45px 60px 45px 150px
  margin: 30px auto
  width: 80%
  &__title
    text-transform: uppercase
    font-size: 50px
    padding: 20px

  &__subtitle
    margin: 0
    font-size: 20px
    padding: 20px 0


  &__container
    margin: 30px 0
    display: flex
    align-items: flex-start
    justify-content: center

  &__board
    width: 180px
    height: 100px
    background-color: white
    margin-bottom: 30px
    margin-left: 30px
    display: flex
    align-items: center
    justify-content: center
    text-transform: uppercase
    font-size: 16px
    border-radius: 10px

</style>