<template>
  <swiper class="detail-swiper">
    <swiper-item v-for="(item, index) in topImages" :key="index">
      <img :src="item" alt="">
    </swiper-item>
  </swiper>
</template>

<script>
  import { Swiper, SwiperItem } from 'components/common/swiper';
  export default {
    props: {
      topImages: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data() {
      return {

      }
    },
    components: {
      Swiper,
      SwiperItem
    }
  }
</script>

<style lang="less" scoped>
  .detail-swiper {
    width: 100%;
    height: 280px;
    overflow: hidden;
    border: 1px solid transparent;
    img {
      width: 100%;
      height: 280px;
    }
  }
</style>
