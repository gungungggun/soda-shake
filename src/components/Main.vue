<template lang="pug">
  div.main
    walk-through(:isWalk="isWalk")
    p main
    p shake {{ count }}
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
    nShake.start()
    fShake.start()
    lShake.start()
  },
  components: {
    WalkThrough
  },
  name: 'main',
  data () {
    return {
      isWalk: true,
      count: 0,
      threshold: 10
    }
  },
  methods: {
    shake: function () {
      this.count ++
      if (this.count >= this.threshold) {
        this.count = 0
        navigator.vibrate([200, 100, 200, 100, 100, 100, 2000])
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
