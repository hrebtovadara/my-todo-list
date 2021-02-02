<template lang="pug">
#app
  div.container
    Sidebar
    router-view
</template>

<script>
import Sidebar from "@/components/Sidebar";

export default {
  components: {Sidebar},
  data: () => ({
    wide: true
  }),
}
</script>

<style lang="sass">
.app
  width: 100%
  height: 100vh
  padding: 10px

.container
  font-family: Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #95a1c5
  width: 100%
  min-height: 100vh
  border-radius: 10px
  background: linear-gradient(to right, #d7e4fe, #e9e3f8, #c7d1fe)
  box-shadow: 0px 8px 45px -1px #909cd1

.nav
  width: 230px
  min-height: 100vh
  background-color: #fbfafa
  box-shadow: 15px 0px 40px -25px #95a1c5
  padding: 30px 20px
  text-align: left
  position: absolute
</style>
