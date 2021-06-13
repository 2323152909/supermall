<template>
  <div class="shop-info">
    <div class="shop-top">
      <img :src="shop.logo">
      <span class="title">{{shop.name}}</span>
    </div>
    <div class="shop-middle">
      <div class="shop-middle-item shop-middle-left">
        <div class="info-sells">
          <div class="sells-count">
            {{sells}}
          </div>
          <div class="sells-text">总销量</div>
        </div>
        <div class="info-goods">
          <div class="goods-count">
            {{shop.goodsCount}}
          </div>
          <div class="goods-text">全部宝贝</div>
        </div>
      </div>
      <div class="shop-middle-item shop-middle-right">
        <table>
          <tr v-for="(item, index) in shop.score" :key="index">
            <td>{{item.name}}</td>
            <td class="score" :class="{'score-better':item.isBetter}">{{item.score}}</td>
            <td class="better" :class="{'better-more':item.isBetter}">
              <span>{{item.isBetter ? '高':'低'}}</span>
            </td>
          </tr>
        </table>
      </div>
    </div>
    <div class="shop-bottom">
      <div class="enter-shop">
        <a :href="shop.shopUrl">进店逛逛</a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name:'DetailShopInfo',
    props:{
      shop:{
        type:Object,
        default(){
          return {}
        }
      }
    },
    computed:{
      sells(){
        if(this.shop.sells < 10000) return this.shop.sells
        return (this.shop.sells/10000).toFixed(2) + '万'
      }
    }
  }
</script>

<style scoped>
  .shop-info{
    padding: 5px;
  }
  .shop-top{
    padding: 10px;
    display: flex;
  }
  .title{
    padding-left: 10px;
    margin-top:18px;
  }
  .shop-top img{
    width: 50px;
    border-radius: 50%;
    border: 2px solid lightgray;
  }
  .shop-middle{
    display:flex;
    justify-content: space-between;
    /* padding: 20px; */
    font-size: 13px;
    width: 100%;
  }
  .shop-middle-left,.shop-middle-right{
    flex: 1;
    width: 50%;
    justify-content: center;
    align-items: center;
  }
  .shop-middle-left{
    display: flex;
    /* flex-wrap: wrap; */
    justify-content: space-around;
    border-right: 1px solid lightslategray;
    font-weight: bold;
  }
  .info-sells,.info-goods{
    flex: 1;
    text-align: center;
  }
  .sells-count,.goods-count{
    padding-bottom:10px;
  }
  .shop-middle-right{
    text-align: center;
  }
  table{
    margin: auto;
    border-spacing: 10px;
  }
  .score{
    color: rgb(19, 173, 13);
  }
  .better{
    background-color: rgb(19, 173, 13);
    color: white;
  }
  .score-better{
    color: red;
  }
  .better-more{
    background-color: red;
    color: white;
  }
  .shop-bottom{
    display: flex;
    justify-content: space-around;
    padding: 10px;
  }
  .enter-shop{
    border-radius: 20px;
    padding-left: 20px;
    padding-right: 20px;
    background-color: lightgray;
  }
</style>