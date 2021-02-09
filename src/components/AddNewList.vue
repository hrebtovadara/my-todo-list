<template lang="pug">
div.new-list.list
  p.list__title Добавить новый список
  button.btn.btn--create(v-show="!viewAdd" @click="openAddList") создать
  .new-list__add(v-show="viewAdd")
    textarea.input.input__list(v-model="newList.name" @blur="blur($event)" ref="textarea3")
    .list__btn-add
      button.btn.btn--cancel(@click="viewAdd = false") Отмена
      button.btn.btn--add(@click="addNewList(boardId)") Добавить
</template>

<script>

export default {
  data: () => ({
    viewAdd: false,
    newList:
      {
        id: '',
        boardsId: '',
        name: '',
        icon: ''
      }
  }),
  props: ['boardId'],
  methods: {
    addNewList(boardId) {
      if (!this.newList.name) return
      this.newList.boardsId = boardId
      this.newList.id = this.$store.state.data.countLists
      this.$store.commit('addNewList', {...this.newList})
      this.newList.name = ''
      this.viewAdd = false
    },
    openAddList() {
      setTimeout(()=>  this.$refs.textarea3.focus(), 10)
      this.viewAdd = true
    },
    blur(e) {
      if (!e.relatedTarget || !e.relatedTarget.classList.contains('btn--add')) this.viewAdd = false
    }
  }
}
</script>

<style lang="sass">
.new-list
  & .list__title
    text-align: center

</style>
