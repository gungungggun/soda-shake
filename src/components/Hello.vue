<template lang="pug">
  div
    div.walk
      slick(ref="slick" :options="slickOptions")
        div.walk1
          span Step1
        div.walk2
          span Step2
        div.walk3
          span Step3
</template>

<script>
import Slick from 'vue-slick'
require('slick-carousel/slick/slick.css')
export default {
  name: 'hello',
  components: {
    Slick
  },
  data () {
    return {
      slickOptions: {
        dots: true,
        arrows: false
      }
    }
  }
}
</script>

<style lang="stylus">
.walk
  width 100%
  height 100vh
  .walk1
    height 80vh
    background #f00
  .walk2
    height 80vh
    background #ff0
</style>
