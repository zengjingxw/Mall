<template>
  <div class="detaill-recommend">
    <div class="recommend-title">
      热门推荐
    </div>
    <goods-list :goods='recommend'/>
  </div>
</template>

<script>
  import GoodsList from 'components/content/goods/GoodsList'
  export default {
    props: {
      recommend: {
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
      GoodsList
    }
  }
</script>

<style lang="less" scoped>
  .detaill-recommend {
    margin-top: 20px;
    padding: 0px 8px;
    padding-bottom: 10px;
    border-bottom: 5px solid #f2f5f8;
  }
</style>
