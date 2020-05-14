<template>
  <div  class="detail-tab">
    <nav-bar class="detail-nav-bar">
      <div class="detail-tab-back" slot="left" @click="back">
        <img src="~assets/img/common/back.svg" alt="">
      </div>
      <div class="detail-tab-title" slot="center" v-for="(item, index) in detailTitle" :key="index" @click="itemTab(index)">
        <div class="title-item" :class="{active: index === currentIndex}">{{item}}</div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar"
export default {
  data() {
    return {
      detailTitle: [
        '商品',
        '参数',
        '评论',
        '推荐'
      ],
      currentIndex: 0
    };
  },
  components: {
    NavBar
  },
  methods: {
    itemTab(index) {
      this.currentIndex = index
      this.$emit('detaillTabClick', index)
    },
    back() {
      this.$router.back()
    }
  }
};
</script>

<style lang="less" scoped>
  .detail-tab {
    position: relative;
    z-index: 10;
    background-color: white;
    .detail-nav-bar {
      box-shadow: 0px 1px 1px #ccc;

      .detail-tab-back {
        
        img {
          margin-left: 15px;
          margin-top: 12px;
        }
      }

      .detail-tab-title {
        border:0px solid pink;

        .title-item {
          border:0px solid red;
          font-size: 13px;  
        }
        .active {
          color: var(--color-high-text)
        }
      }
    }
  }
</style>
