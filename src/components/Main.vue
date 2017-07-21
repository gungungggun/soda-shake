<template lang="pug">
  div.main
    walk-through
    div.start(v-if="isStart")
      button(@click="start") start
    div.shake
      div.img(:class="shakeClass")
        img(src="static/soda.png")
    div.bomb(v-if="isBomb")
      img(src="../assets/bomb.jpg")
</template>

<script>
import WalkThrough from '@/components/WalkThrough'
import Shake from 'shake.js'
const nShake = new Shake({
  threshold: 3,
  timeout: 300
})
const fShake = new Shake({
  threshold: 1,
  timeout: 50
})
const lShake = new Shake({
  threshold: 15,
  timeout: 5000
})

export default {
  mounted: function () {
    window.addEventListener('shake', this.shake, false)
  },
  components: {
    WalkThrough
  },
  name: 'main',
  data () {
    return {
      shakeClass: {
        shake1: false,
        shake2: false,
        shake3: false,
        shake4: false,
        shake5: false
      },
      isStart: true,
      isBomb: false,
      count: 0,
      threshold: Math.floor(Math.random() * 200)
    }
  },
  methods: {
    start: function () {
      this.isStart = false
      nShake.start()
      fShake.start()
      lShake.start()
    },
    shake: function () {
      this.count ++

      if (this.count % 5 === 0) {
        if (this.shakeClass.shake1) {
          this.shakeClass.shake1 = false
        } else {
          this.shakeClass.shake1 = true
        }
      }

      if (this.count % 5 === 1) {
        if (this.shakeClass.shake2) {
          this.shakeClass.shake2 = false
        } else {
          this.shakeClass.shake2 = true
        }
      }

      if (this.count % 5 === 2) {
        if (this.shakeClass.shake3) {
          this.shakeClass.shake3 = false
        } else {
          this.shakeClass.shake3 = true
        }
      }

      if (this.count % 5 === 3) {
        if (this.shakeClass.shake4) {
          this.shakeClass.shake4 = false
        } else {
          this.shakeClass.shake4 = true
        }
      }

      if (this.count % 5 === 4) {
        if (this.shakeClass.shake5) {
          this.shakeClass.shake5 = false
        } else {
          this.shakeClass.shake5 = true
        }
      }

      if (this.count >= this.threshold) {
        this.count = 0
        this.isBomb = true
        navigator.vibrate([200, 100, 200, 100, 100, 100, 2000])
        nShake.stop()
        fShake.stop()
        lShake.stop()
        var self = this
        setTimeout(function () {
          self.isBomb = false
          self.isStart = true
          self.threshold = Math.floor(Math.random() * 200)
        }, 3000)
      }
    }
  }
}
</script>

<style lang="stylus">
@keyframes shake1
  0%
    left 20px
  33%
    left 0
  66%
    left -20px
  100%
    left 0
@keyframes shake2
  0%
    top 20px
  33%
    top 0
  66%
    top -20px
  100%
    top 0
@keyframes shake3
  0%
    left 20px
  33%
    left 0
  66%
    left -20px
  100%
    left 0
@keyframes shake4
  0%
    top 20px
  33%
    top 0
  66%
    top -20px
  100%
    top 0
@keyframes shake5
  0%
    top 10px
    left 20px
  33%
    top 0
    left 0
  66%
    top -10px
    left -20px
  100%
    top 0
    left 0
@keyframes bomb
  0%
    transform scale(1)
  50%
    transform scale(1.2)
  100%
    transform scale(1)
.main
  width 100%
  height 100vh
  overflow hidden
  .start
    z-index 5
    position fixed
    top 0
    left 0
    width 100%
    height 100vh
    display flex
    background #fff
    justify-content center
    align-items center
    button
      border none
      outline none
      background #00f
      color #fff
      font-size 30px
      padding 5px 55px
  .shake
    width 100%
    height 100vh
    display flex
    background #fff
    justify-content center
    align-items center
    .img
      position relative
      &.shake1
        animation-name shake1
        animation-duration 0.3s
        animation-timing-function ease-out
      &.shake2
        animation-name shake2
        animation-duration 0.3s
        animation-timing-function ease-out
      &.shake3
        animation-name shake4
        animation-duration 0.3s
        animation-timing-function ease-out
      &.shake4
        animation-name shake4
        animation-duration 0.3s
        animation-timing-function ease-out
      &.shake5
        animation-name shake5
        animation-duration 0.3s
        animation-timing-function ease-out
      img
        margin 0 auto
        display block
        width 60%
  .bomb
    z-index 10
    position fixed
    top 0
    left 0
    width 100%
    height 100vh
    display flex
    background #fff
    justify-content center
    align-items center
    animation-name bomb
    animation-duration 0.5s
    animation-timing-function ease-out
    animation-iteration-count infinite
    img
      width 80%
</style>
