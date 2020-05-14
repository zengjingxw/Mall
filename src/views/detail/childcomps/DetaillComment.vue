<template>
  <div class="detaill-comment">
    <div class="comment-title">
      <div class="title-left">用户评价</div>
      <div class="title-right">更多</div>
    </div>
    <div class="comment-content" v-for="(item, index) in commentInfo.list" :key="index">
      <div class="user-info">
        <img :src="item.user.avatar" alt="">
        <span>{{ item.user.uname }}</span>
      </div>
      <div class="content-text">
        {{ item.content }}
      </div>
      <div class="content-img-date">
        <span class="date">{{ item.created | showDate }}</span>
        <span class="style">{{ item.style }}</span>
        <div class="img">
          <img :src="img" alt="" v-for="(img, indey) in item.images" :key="indey">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { formatDate } from 'common/utils'
  export default {
    props: {
      commentInfo: {
        type: Object,
        default() {
          return{}
        }
      }
    },
    data() {
      return {};
    },
    computed: {

    },
    filters: {
      showDate: function(value) {
        let date = new Date(value*1000);
        return formatDate(date, 'yyyy-MM-dd')
      }
    },
    components: {}
  };
</script>

<style lang="less" scoped>
  .detaill-comment {
    padding: 0px 8px;
    margin-top: 20px;
    padding-bottom: 20px;
    border-bottom: 5px solid #f2f5f8;
    .comment-title {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      padding-bottom: 10px;
      border-bottom: 1px solid #ccc;
      .title-right {
        font-size: 14px;
      }
    }
    .comment-content {
      margin-top: 10px;

      .user-info {
        display: flex;
        flex-direction: row;
        // justify-content: center;
        align-items: center;

        img {
          width: 40px;
          height: 40px;
          margin-right: 15px;
          border-radius: 50%;
        }
        span {
          font-size: 13px;
        }
      }

      .content-text {
        text-indent: 2em;
        margin-top: 15px;
        line-height: 20px;
        font-size: 13px;
      }

      .content-img-date {
        margin-top: 10px;
        
        .date {
          font-size: 12px;
          margin-right: 5px;
        }

        .style {
          font-size: 12px;
        }
      }

      .img {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        margin-top: 10px;
        img {
          width: 70px;
          height: 70px;
          margin-right: 10px;
        }
      }
    }
  }
</style>
