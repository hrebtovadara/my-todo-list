<template lang="pug">
.board
  .board__title(v-if="!viewChangeBoard")
    p.board__title-text(@click="viewChangeBoard = true") {{boardName.name}}
    button.new-list__btn.dont-close(@click="$refs.addNewList.openAddList()")
  .board__title.opacity-btn(v-if="viewChangeBoard")
    input.board__title-text.input-self.input-self--board(:value="boardName.name" style="width: 100%" @input="nameBoard = $event.target.value" @blur="blur($event)" @keydown="KeyValue($event)" maxlength="72" v-focus)
  .board__container
    AddNewList(:boardId="$route.params.id" ref="addNewList")
    List(v-for="list in Lists" :key="list.id" :list="list" :widthPage="widthPage")
    .board__img(@click="catSayMeow()" v-if="widthPage > 1210")
      img(src="@/assets/image/Screenshot.png" width="200px" height="200px")
      .cat-eyes.cat-eyes--left
        .cat-eyeball
      .cat-eyes.cat-eyes--right
        .cat-eyeball
    img(src="@/assets/image/cat-meow.png" width="60px" :class="SayMeow? 'cat-meow': 'cat-meow__not'")

</template>

<script>
import List from '@/components/List'
import AddNewList from '@/components/AddNewList'

export default {
  data: () => ({
    viewChangeBoard: false,
    nameBoard: '',
    SayMeow: false,
    widthPage: window.innerWidth,
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
    catSayMeow() {
      this.SayMeow = true
      setTimeout(() => (this.SayMeow = false), 2000)
    },
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
    updateWidth() {
      this.widthPage = window.innerWidth
    },
  },
  mounted() {
    window.addEventListener('resize', this.updateWidth)
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
  @media screen and ($mobile)
    padding: 0 10px
    margin: 0
  &__container
    display: flex
    align-items: flex-start
    overflow: auto
    width: auto
    min-width: 620px
    height: 620px
    margin-left: 200px
    @media screen and ($tablet)

      justify-content: flex-start
    @media screen and ($mobile)

      align-items: flex-start
      min-width: 220px
      width: auto
      height: 620px
      margin-left: 0px
      margin-right: 10px

  &__title
    display: flex
    align-items: center
    justify-content: space-between
    height: 50px
    @media screen and ($mobile)
      margin: 10px 15px
    &-text
      color: $color-brown
      font-size: 28px
      font-weight: bold
      height: 50px
      display: flex
      align-items: center
      cursor: pointer
      @media screen and ($mobile)
         font-size: 18px
  &__img
    position: absolute
    bottom: 100px
    right: 100px
    @media screen and ($tablet)
      display: none


.cat-eyes
  position: absolute
  width: 12px
  height: 12px
  border-radius: 50%
  background-color: $color-white
  &--left
    top: 53px
    left: 85px
    animation: catsWink 6s infinite 4.3s
  &--right
    top: 53px
    left: 113px
    animation: catsWink 6s infinite 4s
.cat-meow__not
  display: none
.cat-meow
  position: absolute
  display: block
  bottom: 280px
  right: 120px
  transform: rotate(20deg)
  opacity: 0
  animation: catSayMeow 2s
.cat-eyeball
  position: absolute
  top: 4px
  left: 4px
  border-radius: 50%
  width: 4px
  height: 4px
  background: $color-black
</style>
