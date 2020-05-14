<template>
  <div class="toast" v-show="isShow">
    {{message}}
  </div> 
</template>

<script>
  export default {
    props: {

    },
    data() {
      return {
        message: '',
        isShow: false
      }
    },
    components: {

    },
    methods: {
      show(message='添加成功', druation = 1300) {
        this.message = message
        this.isShow = true
        setTimeout(() => {
          this.message = ''
          this.isShow = false
        }, druation)
      }
    }
  }
</script>

<style lang="less" scoped>
  .toast {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px 8px 8px 8px;
    position: fixed;
    z-index: 100;
    width: 120px;
    height: 40px;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    text-align: center;
    padding: 10px 10px;
    color: #fff;
    background-color: rgba(0, 0, 0, .75);
  }
</style>
