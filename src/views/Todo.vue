<template lang="pug">
div.board
  p hello
  .board-container
    List
</template>

<script>
import List from "@/components/List";

export default {
  data: () => ({
  }),
  components: {List},
}
</script>

<style lang="sass">
.board
  padding: 45px 90px

</style>
