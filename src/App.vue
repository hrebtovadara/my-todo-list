<template lang="pug">
  div(id="app")
    div.container
      div.nav
        router-link.nav__item(to="/") TODO
      router-view
</template>

<style lang="sass">
#app
  background: linear-gradient(to top right, #b2b8fe, #e1c3f6, #fdd1e1)
  width: 100%
  min-height: 100vh
  padding: 10px 0

.container
  font-family: Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #95a1c5
  width: 90%
  min-height: 700px
  margin: auto
  border-radius: 10px
  background: linear-gradient(to right, #d7e4fe, #e9e3f8, #c7d1fe)
  box-shadow: 0px 8px 45px -1px #909cd1
  padding: 30px

</style>
