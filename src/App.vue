<template lang="pug">
  div#app
    transition(name="start" mode="out-in")
      router-view
</template>

<script>
import store from 'store'
window.store = store

export default {
  name: 'app'
}
</script>

<style lang="stylus">
body
  margin 0
  padding 0
  width 100%
#app
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

  /*
.start-enter-active
  animation-name enter
  animation-duration 1.5s

.start-leave-active
  animation-name leave
  animation-duration .5s

@keyframes enter
  0%
    opacity 0
  100%
    opacity 1

@keyframes leave
  0%
    opacity 1
  100%
    opacity 0
*/
</style>
