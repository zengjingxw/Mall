<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import Bscroll from 'better-scroll'
  export default {
    props: {
      probeType: {
        type: Number,
        default: 0
      },
      pullUpLoad: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        scroll: null
      }
    },
    components: {

    },
    mounted() {
      this.$nextTick(() => {
        this.scroll = new Bscroll(this.$refs.wrapper,{
          probeType: this.probeType * 1, 
          click: true, 
          pullUpLoad: this.pullUpLoad
        })

        //监听滚动坐标
        this.scroll.on('scroll', position => {
          this.$emit('changScroll', position)
        })

        //监听下拉加载更多
        this.scroll.on('pullingUp', () => {
          this.$emit('pullLoad')
        })
      })
    },
    methods: {
      scrollTo(x, y, time = 500) {
        this.scroll.scrollTo(x,y,time)
      },
      finishPullUp() {
        this.scroll.finishPullUp()
      },
      refresh() {
        this.scroll.refresh()
      }
    }
  }
</script>

<style lang="less" scoped>

</style>
