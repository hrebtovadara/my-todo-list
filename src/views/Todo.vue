<template lang="pug">
div.board
  .board-title(v-if="!viewChangeBoard")
    p.board__title {{boardName.name}}
    button.btn-icon.btn-icon--change(@click="viewChangeBoard = true")
  .board-change.opacity-btn(v-if="viewChangeBoard")
    textarea.input-self.input-self--board(:value="(boardName.name).toUpperCase()" @change="nameBoard = $event.target.value" :cols="nameBoard.length")
    button.btn-icon.btn-icon--check(@click="changeNameBoard(boardName.id)")
    button.btn-icon.btn-icon--close(@click="viewChangeBoard = false")
  .board__container
    List(v-for="list in Lists" :key="list.id" :list="list")
    AddNewList(:boardId="$route.params.id")
</template>

<script>
import List from "@/components/List"
import AddNewList from "@/components/AddNewList"

export default {
  data: () => ({
    viewChangeBoard: false,
    nameBoard: '',
  }),
  components: {List, AddNewList},
  computed: {
    Lists() {
      return this.$store.state.boards.find(elem => elem.id == this.$route.params.id).list
    },
    boardName() {
      return this.$store.state.boards.find(elem => elem.id ==  this.$route.params.id)
    }
  },
  methods: {
    changeNameBoard(id) {
      if(!this.nameBoard) return
      this.$store.commit('changeNameBoard', {id, name: this.nameBoard})
      this.viewChangeBoard = false
    },
  }
}
</script>

<style lang="sass">

::-webkit-scrollbar
  width: 6px /* ширина для вертикального скролла */
  height: 8px /* высота для горизонтального скролла */
  border-radius: 9px
  background-color: transparent
::-webkit-scrollbar-thumb
  background-color: #b2afa1
  border-radius: 9px
  opacity: .8


.board
  padding: 40px 68px
  position: relative
  z-index: 3
  background-color: #ffffff

  &__container
    display: flex
    align-items: flex-start
    overflow-x: auto
    width: 92%
    position: fixed
    top: 100px
    left: 260px
    bottom: 20px

  &__title
    color: #69665c
    font-size: 28px
    font-weight: bold
    height: 50px
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
  justify-content: flex-start


</style>
