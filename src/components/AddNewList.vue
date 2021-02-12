<template lang="pug">
.new-list
  .new-list__add.list(v-show="viewAdd")
    p.new-list__title Add new task list
    textarea.input.input__list(v-model="newNameList" @blur="blur($event)" ref="textarea3")
    .list__btn-add
      button.btn.btn--cancel Cancel
      button.btn.btn--add(@click="addNewList(boardId)") Add
</template>

<script>
export default {
  data: () => ({
    viewAdd: false,
    newNameList: '',
  }),
  props: ['boardId'],
  methods: {
    addNewList(boardId) {
      if (!this.newNameList) return
      let list = {
        id: this.$store.state.data.countLists,
        boardId: boardId,
        name: this.newNameList,
        tasks: [],
      }

      this.$store.commit('addNewList', { ...list })
      this.newNameList = ''
      this.viewAdd = false
    },
    openAddList() {
      setTimeout(() => this.$refs.textarea3.focus(), 10)
      this.viewAdd = true
    },
    blur(e) {
      if (!e.relatedTarget || !e.relatedTarget.classList.contains('btn--add')) this.viewAdd = false
    },
  },
}
</script>

<style lang="sass">
.new-list__btn
  width: 20px
  height: 20px
  position: relative
  margin: 40px 20px


  &:before
    position: absolute
    content: ""
    width: 20px
    height: 4px
    top: 8px
    left: 0px
    background-color: #69665c
    border-radius: 3px
  &:after
    position: absolute
    content: ""
    width: 4px
    height: 20px
    top: 0
    left: 8px
    background-color: #69665c
    border-radius: 3px

.new-list__title
  font-size: 17px
  padding: 10px
  text-align: center
  font-weight: bold
</style>
