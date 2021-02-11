<template lang="pug">
.new-list.list
  p.new-list__title(@click="openAddList") Add new task list
  .new-list__add(v-show="viewAdd")
    textarea.input.input__list(v-model="newList.name" @blur="blur($event)" ref="textarea3")
    .list__btn-add
      button.btn.btn--cancel Cancel
      button.btn.btn--add(@click="addNewList(boardId)") Add
</template>

<script>
export default {
  data: () => ({
    viewAdd: false,
    newList: {
      id: '',
      boardId: '',
      name: '',
      icon: '',
    },
  }),
  props: ['boardId'],
  methods: {
    addNewList(boardId) {
      if (!this.newList.name) return
      this.newList.boardId = boardId
      this.newList.id = this.$store.state.data.countLists
      this.$store.commit('addNewList', { ...this.newList })
      this.newList.name = ''
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
.new-list__title
  font-size: 17px
  padding: 10px
  text-align: center
  font-weight: bold
</style>
