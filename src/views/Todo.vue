<template lang="pug">
div.board
  p board {{$route.params.id}}
  .board-container
    List(v-for="list in Lists" :key="list.id" :list="list")
    AddNewList
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
    }
  }
}
</script>

<style lang="sass">
.board
  padding: 45px 90px

  &-container
    display: flex
    align-items: flex-start
    flex-wrap: wrap

</style>
