<template>
  <div class="tab-bar-item" @click="isActiveClick">
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot> 
    </div>
    <div :style="isActiveColor">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabBatItem',
  props: {
    link: {
      type: String,
      default: '/'
    },
    activeColor: {
      type:String,
      default: 'red'
    }
  },
  data() {
    return {
      count: 0
    };
  },
  components: {},
  computed: {
    isActive(){
      return this.$route.path.indexOf(this.link) !== -1
    },
    isActiveColor() {
      return this.isActive ? {color: this.activeColor}:{}
    }
  },
  methods: {
    isActiveClick() {
      if(this.$route.path.indexOf(this.link) !==-1) {
        console.log(++this.count)
        return
      }
      this.$router.replace(this.link)
    }
  },
 /*  beforeRouteLeave (to, from, next) {
    
  }, */
  activated() {
    
  },
  deactivated() {

  }
};
</script>

<style lang="less" scoped>
  .tab-bar-item {
    flex: 1;
    text-align: center;
    height: 49px;
    border: 0px solid red;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 13px;

    img {
      margin-top: 2px;
      width: 22px;
      height: 22px;
    }
    
  }
</style>
