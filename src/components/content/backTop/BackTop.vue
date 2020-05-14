<template>
  <div class="back-top" @click="backTopClick">
    <img src="~assets/img/common/top.png" alt="">
  </div>
</template>

<script>
  export default {
    name: "BackTop",
    methods: {
      backTopClick() {
        this.$emit('backClick')
      }
    }
  }
</script>

<style scoped>
  .back-top {
    position: fixed;
    right: 8px;
    bottom: 60px;
  }

  .back-top img {
    width: 40px;
    height: 40px;
  }
</style>
