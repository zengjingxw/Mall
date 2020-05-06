<template>
  <div class="goods-list-item">
    <img :src="itemData.show.img" alt="" @load="loaded">
    <div class="item">
      <p>{{itemData.title}}</p>
      <div class="item-arg">
        <span class="price">{{itemData.price}}</span>
        <span class="cfav">{{itemData.cfav}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      itemData: {
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
    components: {

    },
    methods: {
      loaded() {
        // this.$bus.$emit("loaded")
      }
    },
    created() {
      this.loaded()
    }
  }
</script>

<style lang="less" scoped>
  .goods-list-item {
    display: flex;
    flex-direction: column;
    width: 48.5%;
    min-height: 261.52px;
    margin-bottom: 8px; 
    img {
      width: 100%;
      flex: 1;
      border-radius: 3px;
    }
    .item {
      margin-top: 4px;
      height: 32px;
      display:flex;
      flex-direction: column;
      > p{
        font-size: 12px;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
      }
      .item-arg {
        margin-top: 4px;
        display:flex;
        flex-direction: row;
        justify-content: center;
        font-size: 12px;
        :first-child {
          color: var(--color-high-text);
        }
        :last-child {
          position: relative;
          margin-left: 14px;
        }


        .cfav::after {
          content: '';
          position: absolute;
          background-size:contain;
          width: 12px;
          height:11px;
          left: -11px;
          top: 2px;
          border: 0px solid red;
          background-image: url('~assets/img/common/collect.svg') ;
        }
        
      }

    }
  }
</style>
