<template>
  <div class="check-button" :class="{active:isCheck}">
    <img src="~assets/img/cart/tick.svg" alt />
  </div>
</template>

<script>
export default {
  props: {
    isCheck: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {};
  },
  components: {}
};
</script>

<style lang="less" scoped>
  .check-button {
    border: 1px solid #ccc;
    border-radius: 50%;
  }
  .active {
    border-color: red;
    background-color: red;
  }
</style>
