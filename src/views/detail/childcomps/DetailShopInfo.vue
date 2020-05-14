<template>
  <div class="detaill-shop-info">
    <div class="shop-top" >
      <img :src="shops.logo" alt="" v-if="shops.logo">
      <span>{{ shops.name }}</span>
    </div>
    <div class="shop-content">
      <div class="shop-content-one">
        <div>
          <span>{{sells}}</span>
          <span>总销量</span>
        </div>
        <div>
          <span>{{goodsCount}}</span>
          <span>全部宝贝</span>
        </div>
      </div>
      <div class="shop-content-two">
        <div v-for="(item, index) in shops.score" :key="index">
          <span>{{item.name}}</span>
          <span :style="item.isBetter?{ color:'red' }:{ color:'#74b34e' }">{{item.score}}</span>
          <span :style="item.isBetter?{ backgroundColor:'#f13e3a', color:'#ffff' }:{ backgroundColor:'#74b34e', color:'#ffff' }">{{item.isBetter? '高' : '低' }}</span>
        </div>
      </div>
    </div>
    <div class="shop-bottom">
      <span>进店逛逛</span>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      shops: {
        type: Object, 
        default() {
          return {}
        }
      }
    },
    data() {
      return {

      }
    },
    components: {},
    computed: {
      goodsCount() {
        if(this.shops.goodsCount > 100000) {
          return (this.shops.goodsCount/10000).toFixed(2) + "万"
        }
        else {
          return this.shops.goodsCount
        }
      },
      sells() {
        if(this.shops.sells>10000) {
          return (this.shops.sells/100000).toFixed(2) + "万"
        }
        else {
          return this.shops.sells
        }
      }
    }
  }
</script>

<style lang="less" scoped>
  .detaill-shop-info {
    border-bottom: 5px solid #f2f5f8;
    display: flex;
    flex-direction: column;
    padding: 0px 8px;
    padding-bottom: 20px;
    .shop-top {
      margin-top: 15px;
      border: 0px solid red;
      display: flex;
      flex-direction: row;
      align-items: center;
      img {
        border-radius: 50%;
        border: 1px solid #ccc;
        width: 40px;
        margin-right: 5px;
        height: 40px;
      }
    }
    .shop-content {
      border:0px solid red;
      margin-top: 20px;
      display: flex;
      flex-direction: row;
      align-items: center;
      .shop-content-one {
        width: 140px;
        padding-right:15px;
        border-right: 1px solid #ccc;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        div {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;

          :nth-child(1) {
            font-size: 20px;
            margin-bottom: 8px;
          }

          :nth-child(2) {
            font-size: 13px;
          }
        }
      }
      .shop-content-two {
        flex: 1;
        border: 0px solid pink;
        margin-left: 30px;

        div {
          border: 0px solid red;
          height: 20px;
          line-height: 20px;
          font-size: 13px;
          span {
            display: inline-block;
          }
          :nth-child(1) {
            margin-left: 15px;
            margin-right: 10px;
          }

          :nth-child(2) {
            width: 30px;
            margin-right: 5px;
          }

          :nth-child(3) {
            text-align: center;
            width: 15px;
            border: 0px solid pink;
          }
        }
        div:not(:last-child) {
          margin-bottom: 5px;
        }
        
      }
    }
    .shop-bottom {
      margin-top: 20px;
      span {
        width: 150px;
        height: 30px;
        border-radius: 13px 13px 13px 13px;
        line-height: 30px;
        text-align: center;
        display: inline-block;
        border: 0px solid red;
        background-color: #f2f5f8;
      }
      text-align: center;
    }
  }
</style>
