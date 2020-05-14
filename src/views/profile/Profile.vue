<template>
  <div class="profile">
    <nav-bar class="profile-navbar">
      <div slot="center">
        super商城
      </div>
    </nav-bar>
    <user-info/>

    <section class="profile-top">
      <div class="top-item">
        <span><i>1000</i> 亿元</span>
        <span>我的余额</span>
      </div>
      <div class="top-item">
        <span><i>1000</i> 万个</span>
        <span>我的优惠</span>
      </div>
      <div class="top-item">
        <span><i>300</i> 亿分</span>
        <span>我的积分</span>
      </div>
    </section>

    <section class="profile-center">
      <ul>
        <li>
          <span class="icon-xiaoxi icon"></span>
          <span class="text">我的消息</span>
        </li>
        <li>
          <span class="icon-jifenshangcheng icon"></span>
          <span class="text">积分商城</span>
        </li>
        <li>
          <span class="icon-V icon"></span>
          <span class="text">会员卡</span>
        </li>
      </ul>
    </section>

      <section class="profile-center">
      <ul>
        <li>
          <span class="icon-jifenshangcheng icon"></span>
          <span class="text">我购物车</span>
        </li>
        <li>
          <span class="icon-xiazai icon"></span>
          <span class="text">下载app</span>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar';
  import UserInfo from './childComps/UserInfo';
  export default {
    data() {
      return {

      }
    },
    components: {
      NavBar, 
      UserInfo
    }
  }
</script>

<style lang="less" scoped>
  .profile {
    height: 100%;
    background-color:#f2f2f2 ;
    .profile-navbar {
      color: #ffff;
      font-size: 15px;
      background-color: var(--color-tint);
    }

    .profile-top {
      background-color: #ffff;
      display: flex;
      flex-direction: row;
      border: 0px solid red;
      height: 80px;
      // border-bottom:10px solid #f2f2f2;

      .top-item {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border: 0px solid pink;

        :first-child {
          margin-bottom: 8px;

          >i {
            color: red;
            font-size: 20px;
            font-weight: bold;
          }
        }

        :last-child {
          font-size: 13px;
        }
      }

      .top-item:not(:last-child) {
        border-right: 1px solid #f2f2f2;
      }
    }

    .profile-center {
      background-color: #ffff;
      border:0px solid pink;
      margin-top: 15px;

      ul {
        display: flex;
        flex-direction: column;
        padding-bottom: 10px;;

        li {
          display: flex;
          height: 40px;
          align-items: center;
          flex-direction: row;
          padding-left: 20px;
          .icon {
            font-size: 25px;
            margin-right: 15px;
          }

          .text {
            flex: 1;
            border-bottom: 1px solid #efefef;
            height: 100%;
            line-height: 40px;
          }

          
        }

        li:last-child .text {
          border: 0px;
        }
      
      }
    }
  }
</style>
