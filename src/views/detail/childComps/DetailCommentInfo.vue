<template>
  <div class="comment-info" v-if="Object.keys(commentInfo).length != 0">
    <div class="comment-header">
      <div class="header-title">用户评论</div>
      <div class="header-more">
        更多
        <i class="arrow-right"></i>
        </div>
    </div>

    <div class="comment-user">
      <img :src="commentInfo.user.avatar" alt="" class="user-icon">
      <span>{{commentInfo.user.uname}}</span>
    </div>

    <div class="info-detail">
      <p>{{commentInfo.content}}</p>
      <div class="info-other">
        <span class="date">{{showDate}}</span>
        <span>{{commentInfo.style}}</span>
      </div>
    </div>
    <div class="info-imgs">
      <img :src="item" v-for="(item, index) in commentInfo.images" :key="index"/>
    </div>
  </div>
</template>

<script>
  import {formatDate} from 'common/utils';
  export default {
    name:'DetailCommentInfo',
    props:{
      commentInfo:{
        type:Object,
        defauly(){
          return {}
        }
      }
    },
    data(){
      return {
        date:0,
      }
    },
    computed:{
      showDate(){
        // 1.将时间戳转化成 Date()对象
        const date = new Date(this.commentInfo.created * 1000)

        // 2.将date进行格式化
        return formatDate(date, 'yyyy-MM-dd hh:mm')
      }
    }
  }
</script>

<style scoped>
  .comment-info{
    padding: 5px 12px;
    color: #333;
    border-bottom: 5px solid #f2f5f8;
  }
  .comment-header{
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid rgba(0, 0, 0, .1);
  }
  .header-title{
    float: left;
    font-size: 15px;
  }
  .header-more{
    float: right;
    margin-right: 10px;
    font-size: 13px;
  }
  .comment-user{
    padding: 10px 0 5px;
  }
  .comment-user span{
    position: relative;
    font-size: 15px;
    margin-left: 10px;
    top: -18px;
  }
  .comment-user img{
    border-radius: 50%;
    width: 42px;
    height: 42px;
  }
  .info-detail{
    font-size: 13px;
    padding: 0 5px 15px;
    color: var(--color-text);
  }
  .info-detail p{
    font-size: 14px;
    color: #777;
    line-height: 1.5;
  }
  .info-detail .info-other{
    color: #999;
    margin-top: 10px;
    font-size: 12px;
  }
  .info-detail .date{
    margin-right: 8px;
  }
  .info-imgs{
    margin-top: 10px;
  }
  .info-imgs img{
    width:70px;
    height: 70px;
    margin-right: 5px;
  }
</style>