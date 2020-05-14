<template>
  <div class="categroy-menu">
    <scroll class="menu-scroll" ref="scroll">
      <div class="menu-content" ref="cmenu" >
        <div class="menu-item " @click="categroyClick(index)" :class="{avtive: index == currentIndnx}" v-for="(item, index) in categroyList" :key="index">
          {{item.title}}
        </div>
      </div>
    </scroll>
  </div>
</template>

<script>

  import Scroll from 'components/common/scroll/Scroll'
  import elementResizeDetectorMaker from "element-resize-detector";

  // import { debounce } from 'common/utils'

  export default {
    props: {
      categroyList: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data() {
      return {
        currentIndnx: 0,
        isDy: null, 
        idFd: null
      }
    },
    mounted() {
      let erd = elementResizeDetectorMaker()
      let _this = this;
      erd.listenTo(this.$refs.cmenu, el => {
        this.$nextTick(() => {
          let height = el.offsetHeight
          console.log(height)
          _this.ref()
        }) 
      })
    },
    methods: {
      categroyClick(index) {
        this.currentIndnx = index
        this.$emit('selectItme',index)
      },
      ref() {
        this.$refs.scroll.refresh()
      },
    },
    components: {
      Scroll
    }
  }
</script>

<style lang="less" scoped>
  .categroy-menu {
    width: 100px;
    height: 100%;
    overflow: hidden;
    border: 0px solid red;
    background-color: #f6f6f6;

    .menu-scroll {
      width: 100%;
      height: 100%;
    }

    .menu-item {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 40px;
      border: 0px solid red;
      border-left: 2px solid transparent;
    }

    .avtive {
      border-left: 2px solid #ff5777;
      background-color: #ffffff;
    }
  }
</style>
