<template lang="pug">
div.board
  .board__title(v-if="!viewChangeBoard")
    p.board__title-text(@click="viewChangeBoard = true") {{boardName.name}}
    button.new-list__btn.dont-close(@click="$refs.addNewList.openAddList()")
  .board__title.opacity-btn(v-if="viewChangeBoard")
    input.board__title-text.input-self.input-self--board(:value="boardName.name" style="width: 100%" @input="nameBoard = $event.target.value" @blur="blur($event)" @keydown="KeyValue($event)" maxlength="72" v-focus)
  .board__container
    AddNewList(:boardId="$route.params.id" ref="addNewList")
    List(v-for="list in Lists" :key="list.id" :list="list")
    .board__img
      img(src="@/assets/image/Screenshot.png" )
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
      this.nameBoard = ''
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
  background-color: $color-scrollbar
  border-radius: 9px
  opacity: .8

.board
  padding: 60px 68px
  position: relative
  z-index: 3
  background-color: $color-white
  &__container
    display: flex
    align-items: flex-start
    overflow-x: auto
    width: auto
    min-width: 620px
    height: 620px
    margin-left: 260px

  &__title
    display: flex
    align-items: center
    justify-content: space-between
    height: 50px

    &-text
      color: $color-brown
      font-size: 28px
      font-weight: bold
      height: 50px
      display: flex
      align-items: center
      cursor: pointer

  &__img
    position: absolute
    bottom: 100px
    right: 100px
    & img
      width: 200px
      height: 200px

.cat-eyes
  position: absolute
  width: 12px
  height: 12px
  border-radius: 50%
  background-color: $color-white
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
  background: $color-black
</style>
