<template>
  <div class="detaill-base-info">
    <div class="des">
      <span>{{ goods.title }}</span>
    </div>
    <div class="price">
      <span>{{ goods.newPrice }}</span>
      <span>{{ goods.oldPrice }}</span>
      <span v-if="goods.discount">{{ goods.discount }}</span>
    </div>
    <div class="info">
      <span v-for="(item, index) in goods.columns" :key="index">
        {{ item }}
      </span>
    </div>
    <div class="status">
      <span v-for="(item, index) in character" :key="index">
        <img :src="item.icon" alt="">
        <span>{{ item.name }}</span>
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      goods: {
        type: Object,
        default() {
          return {
            Object
          }
        }
      }
    },
    data() {
      return {

      }
    },
    components: {

    },
    computed: {
      price() {
        return "￥" + this.goods.realPrice + "~" + "￥" + ( this.goods.oldPrice.substring(1) *1  + this.goods.newPrice.substring(1) * 1 )
      },
      character() {
        return this.goods.services 
      }
    }
  }
</script>

<style lang="less" scoped>
  .detaill-base-info {
    margin-top: 20px;
    border-bottom: 5px solid #f2f5f8;
    padding: 0px 8px;
    display: flex;
    padding-bottom: 20px;
    flex-direction: column;
    .des {
      border: 0px solid blue;
      font-size: 15px;
      line-height: 20px;
    }
    .price {
      display: flex;
      flex-direction: row;
      margin-top: 10px;
      border: 0px solid pink;
      align-items: center;
      :nth-child(1) {
        color: #ff5777;
        font-size: 25px;
        margin-right: 10px;
      } 
      :nth-child(2) {
        text-decoration: line-through;
        font-size: 13px;
        opacity: 0.7;
        margin-right: 10px;
      }

      :nth-child(3) {
        display: flex;
        border: 1px solid pink;
        height: 18px;
        width: auto;
        padding: 3px 3px;
        border-radius: 22.5px 22.5px 22.5px 22.5px;
        background-color: #ff5777;
        color: white;
        font-size: 12px;
        justify-content: center;
        align-items: center;
        position: relative;
        top: -7px;
      }
    }
    .info {
      padding: 0px 0px 5px 0px;
      border-bottom: 1px solid #ccc;
      margin-top: 15px;
      display: flex;
      flex-direction: row;
      font-size: 14px;
      opacity: 0.7;
      justify-content: space-between;
    }
    .status {
      border: 0px solid red;
      margin-top: 20px;
      display: flex;
      flex-direction: row;
      font-size: 11px;
      align-items: center;
      justify-content: space-between;
      span {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 13px;
      }
      span img {
        width: 11px;
        height: 11px;
        margin-right: 2px;
      }
    }
  }
</style>
