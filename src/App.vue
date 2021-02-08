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
  }),
}
</script>

<style lang="sass">
.app
  width: 100%
  height: 100vh
  padding: 10px

.container
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #95a1c5
  width: 100%
  min-height: 100vh
  border-radius: 10px
  background-color: #f6f7fb
  box-shadow: 0px 8px 45px -1px #909cd1

</style>
