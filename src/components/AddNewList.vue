<template lang="pug">
div.new-list.list
  p.list__title Добавить новый список
  button.btn.btn--create(v-show="!viewAdd" @click="viewAdd = true") создать
  .new-list__add(v-show="viewAdd")
    input.input(placeholder="введите название нового списка задач" v-model="newList.name")
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
      this.newList.boardsId = boardId
      this.newList.id = this.$store.state.data.countLists
      this.$store.commit('addNewList', {...this.newList})
      this.newList.name = ''
      this.viewAdd = false
    }
  }
}
</script>

<style lang="sass">
.new-list
  & .list__title
    text-align: center

</style>
