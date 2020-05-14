<template>
  <div class="GridViewContainer">
    <grid-view :cols="3" :lineSpace="10" :v-margin="20" v-if="subcategories.list">
      <div v-for="(item, index) in subcategories.list" :key="index" class="item">
        <a :href='item.link'>
          <img class="item-img" :src="item.image" alt  @load="gridImgLoad"/>
          <div class="item-text">{{item.title}}</div>
        </a>
      </div>
    </grid-view>
  </div>
</template>

<script>
  import GridView from "components/common/gridview/GridView";
  export default {
    props: {
      subcategories: {
        type: Object,
        default() {
          return [];
        }
      }
    },
    data() {
      return {};
    },
    methods: {
      gridImgLoad() {
        this.$emit('gridImgLoad')
      }
    },
    components: {
      GridView
    }
  };
</script>

<style lang="less" scoped>
  .GridViewContainer {
    width: 100%;
    .item {
      border: 0px solid red;
      
      .item-img {
        width: 100%;
      }
      .item-text {
        text-align: center;
      }

    }
  }
</style>
