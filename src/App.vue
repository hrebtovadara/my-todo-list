<template lang="pug">
#app
  .container(ref="container")
    Sidebar(v-if="(widthPage > 910) || viewMenu")
    router-view
    button.btn-icon--menu.btn-menu.container__menu(v-if="widthPage < 910" @click="viewMenu = !viewMenu")
  .circle-fon.circle-fon--green
  .circle-fon.circle-fon--blue
  .circle-fon.circle-fon--pink

</template>

<script>
import Sidebar from '@/components/Sidebar'

export default {
  components: { Sidebar },
  data: () => ({
    viewMenu: false,
    widthPage: window.innerWidth,
  }),
  methods: {
    updateWidth() {
      this.widthPage = window.innerWidth
    },
  },
  mounted() {
    console.log(JSON.stringify(this.$store.state.boards))
    window.addEventListener('resize', this.updateWidth)
  },
}
</script>

<style lang="sass">
#app
  width: 100%
  height: 100vh
  overflow: hidden
  @media screen and ($mobile)
    padding: 10px

.container
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #95a1c5
  width: auto
  min-width: 1050px
  min-height: 80vh
  border-radius: 10px
  background-color: $color-white
  margin: 90px
  position: relative
  box-shadow: 0 0 20px 0 rgba(0,0,0,0.3)
  @media screen and ($mobile)
    min-width: 280px
    margin: 20px auto
    width: 80%
    height: 90vh
  &__menu
    position: absolute
    width: 20px
    height: 20px
    top: 25px
    right: 0
    z-index: 9
    transform: rotate(90deg)


.box-shadow
  position: absolute
  top: 0
  left: 0
  width: 100%
  height: 100%
  background-color: transparent
  box-shadow: inset rgba(0,0,0,.1) -8px -4px 20px
  z-index: 10
  pointer-events: none
.circle-fon
  z-index: -1
  border-radius: 50%
  position: absolute
  &--green
    width: 800px
    height: 800px
    background-color: $color-light-green
    right: 20px
    bottom: 20px
    animation: goCircleGreen 50s linear infinite
    @media screen and ($mobile)
      width: 200px
      height: 200px
  &--blue
    width: 1000px
    height: 1000px
    background-color: $color-light-blue
    left: -250px
    top: -600px
    animation: goCircleBlue 50s linear infinite
    @media screen and ($mobile)
      width: 200px
      height: 200px
      left: 0px
      top: 6px
  &--pink
    width: 600px
    height: 600px
    background-color: $color-light-pink
    right: -50px
    top: -50px
    animation: goCirclePink 30s linear infinite
    @media screen and ($mobile)
      width: 200px
      height: 200px
      right: 0px
      top: 50px
</style>
