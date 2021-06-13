<template>
  <div class="goods-params" v-if="Object.keys(goodsParams).length != 0">
    <table v-for="(item, index) in goodsParams.sizes" :key="index" class="params-size">
      <tr v-for="(tr, indet) in item" :key="indet">
        <td v-for="(td, inded) in tr" :key="inded">{{td}}</td>
      </tr>
    </table>
    <table class="goods-info-params">
      <tr v-for="(info,index) in goodsParams.infos">
        <td class="info-params-key">{{info.key}}</td>
        <td class="info-params-value">{{info.value}}</td>
      </tr>
    </table>
    <div class="info-params-img" v-if="goodsParams.images.length != 0">
      <img v-for="(item,index) in goodsParams.images" :src="item" :key="index">
    </div>
  </div>
</template>

<script>
  export default {
    name:'DetailGoodsParams',
    props:{
      goodsParams:{
        type:Object,
        default(){
          return {}
        }
      }
    }
  }
</script>

<style scoped>
  .goods-params{
    padding:20px,30px;
    font-size:14px;
    border-bottom: 5px solid #f2f5f8;
  }
  .params-size{
    border-collapse: collapse; 
    width:100%;
    margin-top: 10px;
  }
  .params-size td{
    border-bottom: 1px solid rgba(100,100,100,.3);
    padding:10px;
  }
  .info-params-img img{
    width:50%;
  }
  .goods-info-params{
    border-collapse: collapse; 
    width:100%;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  .goods-info-params td{
    border-bottom: 1px solid rgba(100,100,100,.3);
    padding:10px;
  }
  .info-params-key{
    width:90px;
  }
  .info-params-value{
    color:var(--color-high-text);
  }
</style>