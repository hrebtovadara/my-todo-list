<template lang="pug">
div.board
  p.board__title {{boardName.name}}
  .board__container
    List(v-for="list in Lists" :key="list.id" :list="list")
    AddNewList(:boardId="$route.params.id")
</template>

<script>
import List from "@/components/List";
import AddNewList from "@/components/AddNewList";

export default {
  data: () => ({
  }),
  components: {List, AddNewList},
  computed: {
    Lists() {
      return this.$store.state.list.filter(elem => elem.boardsId == this.$route.params.id)
    },
    boardName() {
      return  this.$store.state.boards.find(elem => elem.id = this.$route.params.id)
    }
  }
}
</script>

<style lang="sass">
.board
  padding: 45px 90px

  &__container
    display: flex
    align-items: flex-start
    flex-wrap: wrap

  &__title
    text-transform: uppercase

</style>
