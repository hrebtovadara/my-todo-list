<template lang="pug">
div.board
  div(v-if="!viewChangeBoard")
    p.board__title {{boardName.name}}
    button(@click="viewChangeBoard = true") изменить
  .board-change(v-if="viewChangeBoard")
    input.input(:value="boardName.name" @change="nameBoard = $event.target.value")
    button.btn.btn--cancel(@click="viewChangeBoard = false") Отм
    button.btn.btn--add(@click="changeNameBoard(boardName.id)") Доб
  .board__container
    List(v-for="list in Lists" :key="list.id" :list="list")
    AddNewList(:boardId="$route.params.id")
</template>

<script>
import List from "@/components/List";
import AddNewList from "@/components/AddNewList";

export default {
  data: () => ({
    viewChangeBoard: false,
    nameBoard: ''
  }),
  components: {List, AddNewList},
  computed: {
    Lists() {
      return this.$store.state.list.filter(elem => elem.boardsId == this.$route.params.id)
    },
    boardName() {
      return this.$store.state.boards.find(elem => elem.id == this.$route.params.id)
    }
  },
  methods: {
    changeNameBoard(id) {
      this.$store.commit('changeNameBoard', {id, name: this.nameBoard})
      this.viewChangeBoard = false
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

.board-change
  width: 300px
  margin: 0 auto

</style>
