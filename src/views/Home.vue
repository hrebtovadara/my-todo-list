<template lang="pug">
.home-page
  h1.home-page__title welcome to your board
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
</style>