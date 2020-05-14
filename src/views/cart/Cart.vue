<template>
  <div class="cart">
    <nav-bar class="cart-nav-bar">
      <div slot="center">
        购物车({{getIngth}})
      </div>
    </nav-bar>
    <scroll class="cart-scroll" ref="scroll">
      <cart-list/>
    </scroll>
    <cart-bottom-bar class="bottom"/>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  import NavBar from 'components/common/navbar/NavBar'
  import Scroll from 'components/common/scroll/Scroll'

  import CartList from './childComps/CartList'
  import CartBottomBar from './childComps/CartBottomBar'

  export default {
    data() {
      return {
        scrollRefresh: null
      }
    },
    components: {
      NavBar, 
      Scroll, 
      CartList, 
      CartBottomBar
    },
    computed: {
      ...mapGetters([
        'getIngth'
      ])
    },
    activated() {
      this.$refs.scroll.refresh()
    }
  }
</script>

<style lang="less" scoped>
  .cart {
    height: 100vh;
    overflow: hidden;
    position: relative;
    .cart-nav-bar {
      position: relative;
      z-index: 10;
      color: #ffffff;
      background-color: var(--color-tint);
    }

    .cart-scroll {
      width: 100% ;
      position: absolute;
      top: 44px;
      left: 0px;
      right: 0px;
      bottom: 90px;
      border: 0px solid red;
    }
    .bottom {
      bottom: 50px;
      width: 100%;
      position: absolute;
      border: 0px solid red;
      z-index: 10;
    }
  }
</style>
