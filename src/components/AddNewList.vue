<template lang="pug">
div.new-list.list
  h2.list-title Добавить новый список
  button(v-show="!viewAdd" @click="viewAdd = true") создать
  .new-list__add(v-show="viewAdd")
    input(placeholder="введите название нового списка задач")
    button(@click="viewAdd = false") Отмена
    button Добавить
</template>

<script>

export default {
  data: () => ({
    viewAdd: false
  }),

}
</script>

<style lang="sass">


</style>
