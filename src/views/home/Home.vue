<template>
  <div id="home">
    <!-- 导航栏 -->
    <nav-bar class="home-nav">
      <template v-slot:center>
        <h2>购物街</h2>
      </template>
    </nav-bar>
    <!-- 轮播图 -->
    <home-swiper :banners="banners" />
    <!-- 福利部分 -->
    <home-recommend :recommends="recommends"/>
    <!-- 今日推荐 -->
    <home-feature/>
    <tab-control :titles="['流行','新款','精选']"
                 class="tab-control"
                 @tabClick="tabClick"/>
    <goods-list :goods="goods[goodsSelect].list" class="goods"/>
    <!-- <home-goods :goodsTitle="goodsTitle" :goodsList="goods[goodsSelect].list"/> -->
    
  </div>
</template>

<script>

  import HomeSwiper from './childComps/HomeSwiper.vue'
  import HomeRecommend from './childComps/HomeRecommend.vue'
  import HomeFeature from './childComps/HomeFeature.vue'
  import HomeGoods from './childComps/HomeGoods.vue'

  import NavBar from 'components/common/navbar/NavBar.vue'
  import TabControl from 'components/content/tabControl/TabControl.vue'
  import GoodsList from 'components/content/goods/GoodsList.vue'
  import GoodsListItem from 'components/content/goods/GoodsListItem.vue'

  import {getHomeMultidata,getHomeGoods} from 'network/home.js'
  
  export default {
    name:'Home',
    components:{
      NavBar,
      TabControl,
      GoodsList,
      GoodsListItem,

      HomeSwiper,
      HomeRecommend,
      HomeFeature,
      HomeGoods
    },
    data() {
      return {
        banners:[],
        recommends:[],
        goods:{
          pop:{page:0,list:[]},
          new:{page:0,list:[]},
          sell:{page:0,list:[]},
        },
        goodsSelect:'pop',
      }
    },
    created(){
      // 1.请求多个数据
      this.getMultidata()
      // 2.请求商品数据
      this.getGoods('pop')
      this.getGoods('new')
      this.getGoods('sell')
    },
    methods: {
      getMultidata(){
        // 1.请求多个数据
        getHomeMultidata().then(res => {
          // console.log(res);
          this.banners = res.data.banner.list;
          this.recommends = res.data.recommend.list;
          // console.log(this.banners);
          // console.log(this.recommends);
        })
      },
      getGoods(type){
        const page = this.goods[type].page + 1
        // 2.请求商品数据
        getHomeGoods(type,page).then(res => {
          // 将读取到的list加入到goods对应的list中
          this.goods[type].list.push(...res.data.list)
          // 将现在的页码加一
          this.goods[type].page += 1
          
          console.log(res);
        })
      },
      tabClick(index){
        console.log(index);
        switch(index){
          case 0:
            // this.getGoods('pop')
            this.goodsSelect = 'pop';
            break;
          case 1: 
            // this.getGoods('new')
            this.goodsSelect = 'new';
            break;
          case 2:
            // this.getGoods('sell')
            this.goodsSelect = 'sell';
            break;
        }
      }
    },
  }
</script>

<style scoped>
  #home{
    padding-top: 44px;
    padding-bottom: 49px;
  }
  .home-nav{
    background-color:#FF8E96;
    position: fixed;
    top:0;
    left: 0;
    right: 0;

    z-index:9;
  }
  .tab-control{
    position: sticky;
    top: 44px;
    width: 100%;
    z-index:9;
    background-color: white;
  }
  
</style>