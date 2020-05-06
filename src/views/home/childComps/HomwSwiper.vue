<template>
  <swiper ref="hsSwiper">
    <swiper-item v-for="(item, index) in banners" :key="index" >
      <a :href="item.link">
        <img :src="item.image" alt  @load="swiperImageLoad"/>
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper";
export default {
  props: {
    banners: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      isLoad: false, 
      count: 0
    };
  },
  components: { Swiper, SwiperItem },

  methods: {
    swiperImageLoad() {
      this.count ++
      if(!this.isLoad) {
        this.isLoad = true
        this.$emit('swiperImageLoad')
      }
      if(this.count == this.banners.length) {

        this.$refs.hsSwiper.startCarousel()
      }
    }
  },
};
</script>

<style lang="less" scoped>
</style>
