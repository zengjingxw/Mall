<template>
  <div class="recmmend">
    <div class="recmmend-item" v-for="(item, index) in recomments" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      recomments: {
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

    }
  }
</script>

<style lang="less" scoped>
  .recmmend {
    display:flex;
    width: 100%;
    flex-direction: row;
    margin-top: 10px;
    overflow: hidden;
    justify-content: space-around;
    border-bottom: 10px solid #eee;
    padding: 0px 0px 30px 0px;
    .recmmend-item {
      display: flex;
      justify-content: center;
      align-items: center;
      flex: 1;
      font-size: 13px;
      border: 0px solid pink;
      img {
        width: 60px;
        height: 60px;
        margin-bottom: 7px;
      }
    }
  } 
</style>
