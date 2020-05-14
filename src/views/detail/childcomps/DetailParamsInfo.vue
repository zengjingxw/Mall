<template>
  <div class="detaill-params">
    <div class="params-img" v-if="goodsParam.img">
      <img :src="goodsParam.img" alt />
    </div>
    <div class="params-size" v-for="(item, index) in goodsParam.sizes" :key="index">
      <ul v-for="(ul, indey) in item" :key="indey">
        <li v-for="(li, indez) in ul" :key="indez">{{li}}</li>
      </ul>
    </div>
    <div class="params-infos">
      <ul v-for="(item, index) in goodsParam.infos" :key="index">
        <li>{{item.key}}</li>
        <li>{{item.value}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    goodsParam: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {};
  },
  components: {}
};
</script>

<style lang="less" scoped>
  .detaill-params {
    margin-top: 30px;
    border: 0px solid pink;
    padding: 0px 8px;
    padding-bottom: 20px;
    border-bottom: 5px solid #f2f5f8;
    .params-img {
      img {
        width: 100%;
      }
    }
    .params-size {
      ul {
        padding-bottom: 10px;
        border-bottom: 1px solid #ccc;
        display: flex;
        flex-direction: row;
        align-items: center;
        li {
          flex: 1;
          font-size: 15px;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          list-style: none;
          border: 0px solid red;
        }
      }
      ul:not(:last-child) {
        margin-bottom: 15px;
      }
    }
    .params-infos {
      margin-top: 20px;
      ul {
        padding-bottom: 10px;
        border-bottom: 1px solid #ccc;
        margin-top: 20px;
        display: flex;
        flex-direction: row;
        font-size: 14px;
        align-items: center;
        li:first-child {
          border: 0px solid red;
          width: 80px;
        }
        li:not(:first-child) {
          flex: 1;
          list-style: none;
          border: 0px solid;
          color: #ed5d79;
        }
      }
      ul:not(:last-child) {
        margin-bottom: 15px;
      }
      ul:last-child {
        border: 0px;
      }
    }
  }
</style>
