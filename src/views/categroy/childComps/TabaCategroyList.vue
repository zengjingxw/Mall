<template>
  <div class="categroyListView">
      <goods-list :goods='goodsItem'/>
  </div>
</template>

<script>

  import  GoodsList from 'components/content/goods/GoodsList'
  export default {
    props: {
      goodsItem: {
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
      GoodsList, 
    }
  }
</script>

<style lang="less" scoped>
  .categroyListView {
    width: 100%;
    overflow: hidden;
    border: 0px solid red;
  }
</style>
