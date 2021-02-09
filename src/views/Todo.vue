<template lang="pug">
div.board
  .board-title(v-if="!viewChangeBoard")
    p.board__title {{boardName.name}}
    button.btn-icon.btn-icon--change(@click="viewChangeBoard = true")
  .board-change.opacity-btn(v-if="viewChangeBoard")
    textarea.input-self.input-self--board(:value="(boardName.name).toUpperCase()" @change="nameBoard = $event.target.value"  :cols="nameBoard.length")
    button.btn-icon.btn-icon--check(@click="changeNameBoard(boardName.id)")
    button.btn-icon.btn-icon--close(@click="viewChangeBoard = false")
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
    nameBoard: '',
    viewbutton: false
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
      if(!this.nameBoard) return
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
    font-size: 20px
    margin-right: 10px
    height: 30px
    display: flex
    align-items: center

.board-change
  margin: 0 auto
  display: flex
  align-items: center
  justify-content: center
.board-title
  display: flex
  align-items: center
  justify-content: center
</style>
