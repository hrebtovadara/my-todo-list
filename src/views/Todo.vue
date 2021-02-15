<template lang="pug">
div.board
  .board-title(v-if="!viewChangeBoard")
    p.board__title(@click="viewChangeBoard = true") {{boardName.name}}
    button.new-list__btn.dont-close(@click="$refs.addNewList.openAddList()" v-show="!viewAdd")
  .board-title.opacity-btn(v-if="viewChangeBoard")
    input.board__title.input-self.input-self--board(:value="boardName.name" style="width: 100%" @input="nameBoard = $event.target.value" @blur="blur($event)" @keydown="KeyValue($event)" maxlength="72" v-focus)
  .board__container
    AddNewList(:boardId="$route.params.id" ref="addNewList")
    List(v-for="list in Lists" :key="list.id" :list="list")
    .board-img
      img(src="@/assets/image/Screenshot.png")
      .cat-eyes.cat-eyes--left
        .cat-eyeball
      .cat-eyes.cat-eyes--right
        .cat-eyeball

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
.board-img
  position: fixed
  bottom: 120px
  right: 120px
  & img
    width: 200px
    height: 200px
.cat-eyes
    position: absolute
    width: 12px
    height: 12px
    border-radius: 50%
    background-color: #ffffff
    &--left
      top: 53px
      left: 85px
      animation: catsWink 6s infinite .3s
    &--right
      top: 53px
      left: 113px
      animation: catsWink 6s infinite
.cat-eyeball
  position: absolute
  top: 4px
  left: 4px
  border-radius: 50%
  width: 4px
  height: 4px
  background: #000000

@keyframes catsWink
  1%
    top: 60px
    height: 0px
  2%
    top: 53px
    height: 12px


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
    width: 70%
    min-width: 1000px
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
