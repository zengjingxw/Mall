<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  components: {}
};
</script>

<style lang="less" scoped>
  #tab-bar {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 49px;
    position: fixed;
    border: 0px solid red;
    left: 0px;
    right: 0px;
    bottom: 0px;
    background-color: #f6f6f6;
    box-shadow: 0px -1px 1px rgba(100, 100, 100, 0.3);
  }
</style>
