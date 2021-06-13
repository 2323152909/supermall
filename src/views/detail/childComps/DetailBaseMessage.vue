<template>
  <div v-if="Object.keys(goods).length != 0" class="base-message">
    <div>
      <span>{{goods.title}}</span>
    </div>
    <div class="info-price">
      <span class="n-price">{{goods.newPrice}}</span>
      <span class="o-price">{{'￥'+goods.oldPrice}}</span>
      <span v-if="goods.discount" class="discount">{{goods.discount}}</span>
    </div>
    <div class="info-other">
      <span>{{goods.columns[0]}}</span>
      <span>{{goods.columns[1]}}</span>
      <span>{{goods.services[goods.services.length-1].name}}</span>
    </div>
    <div class="info-service">
      <span class="info-service-item" v-for="index in goods.services.length-1" :key="index">
        <img :src="goods.services[index-1].icon"/>
        <span>{{goods.services[index-1].name}}</span>
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    name:'DetailBaseMessage',
    props:{
      goods:{
        type:Object,
        default(){
          return {}
        }
      }
    },
  }
</script>

<style scoped>
  .base-message{
    padding: 5px;
  }
  .info-price{
    padding-top:10px;
    padding-bottom:10px;
  }
  .discount{
    background-color:var(--color-high-text);
    border-radius:20px;
    color: white;
    padding: 3px;
  }
  .n-price{
    color:var(--color-high-text);
    font-size: 20px;
  }
  .o-price{
    text-decoration:line-through;
    font-size: 13px;
    color: rgb(100, 100, 100);
  }
  .info-other{
    padding-top: 10px;
    padding-bottom: 10px;
    display: flex;
    color: rgb(100, 100, 100);
    font-size: 13px;
    justify-content: space-between;
    box-shadow: 0 2px 2px rgba(100, 100, 100, .1);
  }
  .info-other span{

  }
  .info-service{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    font-size: 13px;
    padding-top: 15px;
    padding-bottom: 15px;
    box-shadow: 0 2px 2px rgba(100, 100, 100, .1);
  }
  .info-service-item img{
    width: 10px;
  }
</style>