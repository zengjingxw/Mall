<template>
  <div class="goods-list">
    <goods-list-item v-for="(item, index) in goods" :key="index" :itemData='item'/>
  </div>
</template>

<script>
  import GoodsListItem from './GoodsListItem'
  export default {
    props: {
      goods: {
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
      GoodsListItem
    }
  }
</script>

<style lang="less" scoped>
  .goods-list {
    margin-top: 10px;
    display:flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 0px 5px;
    width: 100%;
    height: auto;
    border:0px solid pink;
    // background-color: red;
  }
</style>
