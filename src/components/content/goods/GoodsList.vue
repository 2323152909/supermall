<template>
  <div class="goods">
    <goods-list-item v-for="(item,index) in goods" class="goods-item" :key="index" :goodsItem="item"/>
  </div>
</template>

<script>
  import GoodsListItem from './GoodsListItem.vue'
  export default {
    name:'GoodsList',
    components:{
      GoodsListItem
    },
    props:{
      goods:{
        type:Array,
        default(){
          return []
        }
      }
    }
  }
</script>

<style scoped>
  .goods{
    /* width:100%; */
    display:flex;
    justify-content: space-around;
    flex-wrap: wrap;

    padding: 2px;
  }
</style>