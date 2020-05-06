<template>
  <div class="tab-control">
    <div @click="topClick(index)" v-for="(item, index) in titles" :key="index" class="tab-control-item" :class="{active:index === currentIndex}">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      titles: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data() {
      return {
        currentIndex: 0
      }
    },
    components: {

    },
    methods: {
      topClick(index) {
        this.currentIndex = index
        this.$emit('tabClick',index)
      }
    }
  }
</script>

<style lang="less" scoped>
  .tab-control {
    background-color: #ffffff;
    height: 44px;
    display: flex;
    flex-direction: row;
    border: 0px solid red;
    justify-content: space-around;
    align-items: center;

    .tab-control-item {
      font-size: 14px;
      border: 0px solid red;

      span {
        display: block;
        border: 0px solid red;
        border-bottom: 2px transparent;
        padding: 0px 5px 5px 5px;
      }
    }

    .active {
      color: var(--color-high-text);
      border-bottom: 2px solid var(--color-high-text);
    }
  }
</style>
