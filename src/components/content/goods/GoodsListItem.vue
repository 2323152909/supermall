<template>
  <div class="goods-item">
     <a :href="goodsItem.link">
      <img :src='goodsItem.show.img' @load="imageLoad">
    </a>   
    <div class="mark">
      <p>{{goodsItem.title}}</p>
      <span class="price">{{goodsItem.price}}</span>
      <span class="collect">{{goodsItem.cfav}}</span>
    </div>
    <!-- <div>{{goodsItem.title}}</div> -->
  </div>
</template>

<script>
  export default {
    name:'GoodsListItem',
    props:{
      goodsItem:{
        type:Object,
        default(){
          return {}
        }
      }
    },
    methods: {
      imageLoad(){
        this.$bus.emit('imageLoad')
      }
    },
  }
</script>

<style scoped>
  .goods-item{
    padding-bottom: 40px;
    position: relative;

    width: 48%;
  }
  .goods-item img{
    width: 100%;
    border-radius: 5%;
  }
  .mark{
    font-size: 12px;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
  }
  .mark p{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
  }
  .mark .price{
    color: var(--color-high-text);
    margin-right: 20px;
  }
  .mark .collect{
    position: relative;
  }
  .mark .collect::before{
    content: '';
     position: absolute;
    left: -15px;
    top: -1px;
    width: 14px;
    height: 14px;
    background: url("~assets/img/common/collect.svg") 0 0/14px 14px; 
  }
</style>