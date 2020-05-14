<template>
  <div class="detaill-goods-info">
    <div class="goods-infor-top">
      <span class="infor-top-icon1"></span>
      <span class="top-content">{{detailInfo.desc}}</span>
    </div>
    <div class="goods-info-content">
      <div class="info-content-items" v-for="(item, index) in detailInfo.detailImage" :key="index">
        <div class="item-title">{{item.key}}</div>
        <div class="item-img" v-for="(img, indey) in item.list" :key="indey">
          <img :src="img" alt @load="detaillImgLoad" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    detailInfo: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  methods: {
    detaillImgLoad() {
      this.$emit('detaillImgLoad')
    }
  },
  data() {
    return {};
  },
  components: {}
};
</script>

<style lang="less" scoped>
  .detaill-goods-info {
    position: relative;
    padding: 0px 10px;
    border-bottom: 5px solid #f2f5f8;

    .goods-infor-top {
      margin-top: 20px;
      border: 0px solid pink;
      .infor-top-icon1 {
        position: absolute;
      }

      .infor-top-icon1::after {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        width: 75px;
        height: 0px;
        border-top: 1px solid #ccc;
      }
      .infor-top-icon1::before {
        content: "";
        position: absolute;
        left: 0px;
        top: -8px;
        height: 6px;
        width: 6px;
        border: 0px solid red;
        background-color: black;
      }
      .top-content {
        display: inline-block;
        margin: 15px 3px;
        line-height: 20px;
        font-size: 14px;
      }
    }
/*     .goods-infor-top::after {
      content: "";
      position: absolute;
      left: 235px;
      top: 6.9%;
      width: 75px;
      height: 0px;
      border-bottom: 1px solid #ccc;
    }
    .goods-infor-top::before {
      content: "";
      position: absolute;
      left: 304px;
      top: 7%;
      height: 6px;
      width: 6px;
      background-color: black;
    } */
    .goods-info-content {
      border: 0px solid red;
      margin-top: 10px;
      .info-content-items {
        .item-title {
          margin-bottom: 13px;
          border: 0px solid pink;
        }
        .item-img {
          border: 0px solid deeppink;
          img {
            width: 100%;
          }
        }
      }
    }
  }
</style>
