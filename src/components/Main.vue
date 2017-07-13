<template lang="pug">
  div.main
    p main
    p shake {{ count }}
</template>

<script>
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
    nShake.start()
    fShake.start()
    lShake.start()
  },
  name: 'main',
  data () {
    return {
      count: 0,
      threshold: 200
    }
  },
  methods: {
    shake: function () {
      this.count ++
      if (this.count >= this.threshold) {
        this.count = 0
        navigator.notification.vibrate(2000)
      }
    }
  }
}
</script>

<style lang="stylus">
.main
  width 100%
  height 100vh
</style>
