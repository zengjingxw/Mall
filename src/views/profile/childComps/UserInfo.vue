<template>
  <div class="user-info">
    <a href="#">
      <div class="info-body">
        <img src="~assets/img/user/logo.jpg" alt />
        <div class="opt">
          <span>smiletoforget</span>
          <span>
            <span class="icon-webicon205 user-phone"></span>
            18888888888
          </span>
        </div>
      </div>
      <span class="icon-uniE919 user-right-icon"></span>
    </a>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  components: {}
};
</script>

<style lang="less" scoped>
  .user-info {
    border: 0px solid blue;
    height: 80px;
    align-items: center;
    display: flex;
    flex-direction: row;
    background-color: var(--color-tint);

    a {
      border: 0px solid red;
      display: flex;
      width: 100%;
      justify-content: space-between;
      align-items: center;
      .info-body {
        border: 0px solid red;
        display: flex;
        img {
          margin-left: 10px;
          width: 60px;
          border: 0px solid red;
          height: 60px;
          border-radius: 50%;
          margin-right: 10px;
        }

        .opt {
          border: 0px solid red;
          display: flex;
          flex-direction: column;
          justify-content: center;
          >span {
            color: #ffff;
          }

          :last-child{
            border: 0px solid red;
            align-items: center;
            display: flex;
            font-size: 12px;
            position: relative;
            margin-top: 5px;
            padding-left: 20px;
            .user-phone {
              left: -26px;
              top: -12px;
              font-size: 30px;
              position: absolute;
            }
          }
        }
      }

      .user-right-icon {
        color: #ffff;
        font-size: 20px;
        margin-right: 15px;
      }
    }
  }
</style>
