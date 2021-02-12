<template lang="pug">
div.board
  .board-title(v-if="!viewChangeBoard")
    p.board__title(@click="viewChangeBoard = true") {{boardName.name}}
    button.new-list__btn(@click="$refs.addNewList.openAddList()" v-show="!viewAdd")
  .board-title.opacity-btn(v-if="viewChangeBoard")
    input.board__title.input-self.input-self--board(:value="boardName.name" style="width: 100%" @input="nameBoard = $event.target.value" @blur="blur($event)" @keydown="KeyValue($event)" maxlength="72" v-focus)
  .board__container
    List(v-for="list in Lists" :key="list.id" :list="list")
    AddNewList(:boardId="$route.params.id" ref="addNewList")
</template>

<script>
import List from '@/components/List'
import AddNewList from '@/components/AddNewList'

export default {
  data: () => ({
    viewChangeBoard: false,
    nameBoard: '',
  }),
  components: { List, AddNewList },
  computed: {
    Lists() {
      return this.$store.state.boards.find((elem) => elem.id == this.$route.params.id).list
    },
    boardName() {
      return this.$store.state.boards.find((elem) => elem.id == this.$route.params.id)
    },
  },
  methods: {
    changeNameBoard(id) {
      if (!this.nameBoard) return
      this.$store.commit('changeNameBoard', { id, name: this.nameBoard })
      this.viewChangeBoard = false
    },
    blur(e) {
      if (!e.relatedTarget || !e.relatedTarget.classList.contains('btn-icon--check')) {
        this.changeNameBoard(this.boardName.id)
        this.viewChangeBoard = false
      }
    },
    KeyValue(e) {
      if (e.code == 'Enter') {
        this.changeNameBoard(this.boardName.id)
      } else if (e.code == 'Escape') {
        this.viewChangeBoard = false
      }
    },
  },
  directives: {
    focus: {
      inserted: function (el) {
        el.focus()
      },
    },
  },
}
</script>

<style lang="sass">

::-webkit-scrollbar
  width: 6px
  height: 8px
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
    width: 75%
    position: fixed
    top: 190px
    left: 320px
    bottom: 110px

  &__title
    color: #69665c
    font-size: 28px
    font-weight: bold
    height: 50px
    display: flex
    align-items: center
    cursor: pointer


.board-change
  margin: 0 auto
  display: flex
  align-items: center
  justify-content: center

.board-title
  display: flex
  align-items: center
  justify-content: space-between
</style>
