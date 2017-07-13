<template lang="pug">
  div
    div.walk
      slick(ref="slick" :options="slickOptions" @afterChange="afterChange")
        div.inner.walk1
          div
            p.step STEP1
            h1 ウォークスルー
              br
              | サンプル
            p slick使って簡単に作るよ
        div.inner.walk2
          div
            p.step STEP2
            h1 スタイルシートが肝
            p あれこれ凝ればもっといい感じになる
        div.inner.walk3
          div
            p.step STEP3
            h1 アニメーションも
            p 時間があればアニメーションをくわえるとなお良い感じになる
      div.skip
        button(@click="comp()") スキップ
      transition(name="fade")
        div.comp(v-if="complete")
          button(@click="comp()") 完了
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
      number: 2,
      complete: false,
      slickOptions: {
        dots: true,
        arrows: false,
        infinite: false,
        edgeFriction: 0,
        speed: 100,
        swipeToSlide: true
      }
    }
  },
  methods: {
    comp: function () {
      this.$router.replace('main')
    },
    afterChange: function (e, s, c) {
      if (c === this.number) {
        this.complete = true
      } else {
        this.complete = false
      }
    }
  }
}
</script>

<style lang="stylus">
.fade-enter-active, .fade-leave-active
  transition opacity .3s
.fade-enter, .fade-leave-to
  opacity 0
.walk
  width 100%
  height 100vh
  .inner
    display flex
    box-sizing border-box
    padding 20px
    color #fff
    height 100vh
    justify-content center
    > div
      margin-top 25vh
      .step
        font-size 20px
        font-weight bold
  .walk1
    background #005cce
  .walk2
    background #009e5d
  .walk3
    background #08abd0
  .slick-dots
    border-top 1px solid #fff
    margin 0 auto
    padding 10px 0 20px
    list-style none
    position fixed
    bottom 0
    display flex
    justify-content center
    align-items center
    width 100%
    li
      width 30px
      text-align center
      &.slick-active
        button
          background #49a7c3
      button
        background #fff
        border none
        width 12px
        height 12px
        cursor pointer
        border-radius 50%
        font-size 0
        outline none
  .comp
    position fixed
    bottom 10px
    right 10px
    button
      background none
      border none
      cursor pointer
      outline none
      color #fff
      font-size 14px
  .skip
    position fixed
    bottom 10px
    left 10px
    button
      background none
      border none
      cursor pointer
      outline none
      color #fff
      font-size 14px
</style>
