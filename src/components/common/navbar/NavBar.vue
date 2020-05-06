<template>
  <div class = 'nav-bar'>
      <slot name="left"></slot>
    <div class="left">
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {

      }
    },
    components: {

    }
  }
</script>

<style lang="less" scoped>
  .nav-bar {
    // background-color: red;
    display: flex;
    flex-direction: row;
    width: 100%;
    line-height: 44px;
    height: 44px;

    .left, .right {
      height: 44px;  
    }
    .left {
      width: 60px;
      // background-color: pink;
    }

    .center {
      flex: 1;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
    }

    .right {
      // background-color: deeppink;
      width: 60px;
    }
  }
</style>
