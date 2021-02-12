<template lang="pug">
#app
  div.container
    Sidebar
    router-view
    .box-shadow
  .circle-fon.circle-fon--green
  .circle-fon.circle-fon--blue
  .circle-fon.circle-fon--pink
</template>

<script>
import Sidebar from '@/components/Sidebar'

export default {
  components: { Sidebar },
  data: () => ({}),
  mounted() {
    console.log(JSON.stringify(this.$store.state.boards))
  },
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
  width: auto
  min-width: 1300px
  min-height: 80vh
  border-radius: 10px
  background-color: #ffffff
  margin: 90px 60px
  position: relative
  box-shadow: 0px 18px 36px -41px #000000
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
    background-color: #daf2d6
    right: 20px
    bottom: 20px
    animation: goCircleGreen 50s linear infinite
  &--blue
    width: 1000px
    height: 1000px
    background-color: #d1e5f7
    left: -250px
    top: -600px
    animation: goCircleBlue 50s linear infinite
  &--pink
    width: 600px
    height: 600px
    background-color: #ffcece
    right: -50px
    top: -50px
    animation: goCirclePink 30s linear infinite


@keyframes goCircleGreen
    25%
      right: 50%
      bottom: 70%
    50%
      right: 100%
      bottom: 50%
    75%
      right: 50%
      bottom: 75%

@keyframes goCircleBlue
  20%
    left: 20%
    top: 20%
  40%
    left: 50%
    top: -20%
  60%
    left: 60%
    top: 50%
  80%
    left: 30%
    top: 30%

@keyframes goCirclePink
  25%
    right: 0%
    top: 40%
  50%
    right: 60%
    top: 70%
  75%
    right: 40%
    top: 15%
</style>
