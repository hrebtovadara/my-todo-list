<template lang="pug">
div.board
  p hello
  .board-container
    List
    AddNewList
</template>

<script>
import List from "@/components/List";
import AddNewList from "@/components/AddNewList";

export default {
  data: () => ({
  }),
  components: {List, AddNewList},
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
