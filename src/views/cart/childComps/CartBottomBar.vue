<template>
  <div class='cart-bottom-bar'>
    <div class="left" @click="checkedAll">
      <check-button :isCheck='isAllChecked' class="bar-checkButton"/>
      <span>全选</span>
    </div>
    <div class="center">
      合计: {{ tatolPrice }}
    </div>
    <div class="right">
      <div class="calculate">
        去计算（{{ getCheckedIength }}）
      </div>
    </div>
  </div>
</template>

<script>
  import CheckButton from './CheckButton'
  export default {
    data() {
      return {

      }
    },
    components: {
      CheckButton
    },
    methods: {
      checkedAll() {
        if(this.$store.state.cartList.length == 0) return;
        if(this.isAllChecked) {
          this.$store.state.cartList.forEach( item => item.checked = false )
          return;
        }
        this.$store.state.cartList.filter( item => !item.checked).forEach( item => item.checked = true )
      }
    },
    computed: {
      tatolPrice() {
        return "￥" + this.$store.state.cartList.filter( (item) => item.checked ).reduce((preValue,item) => {
          return preValue + item.prices * item.count
        },0).toFixed(2)
      },
      getCheckedIength() {
        return this.$store.state.cartList.filter( item => item.checked).length
      },
      isAllChecked() {
        if(this.$store.state.cartList.length == 0) return false
        return !(this.$store.state.cartList.filter( item => !item.checked).length)
      }
    }
  }
</script>

<style lang="less" scoped>
  .cart-bottom-bar {
    height: 40px;
    background-color: #eee;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border: 0px solid pink;
    .left {
      display: flex;
      flex-direction: row;
      align-items: center;
      margin-left: 5px;
      .bar-checkButton {
        width: 20px;
        height: 20px;
        margin-right: 3px;
      }

      span {
        font-size: 15px;
      }
    }

    .center {
      display: flex;
      align-items: center;

    }

    .right {
      display: flex;
      align-items: center;

      .calculate {
        height: 100%;
        width: 80px;
        line-height: 40px;
        text-align: center;
        color: #ffff;
        border:0px solid red;
        background-color: #ff6699;
        font-size: 13px;
      }
    }
  }
</style>
