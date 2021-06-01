<template>
  <div id="home">
    <!-- 导航栏 -->
    <nav-bar class="home-nav">
      <template v-slot:center>
        <h2>购物街</h2>
      </template>
    </nav-bar>
    <scroll class="content" @scroll="scroll" @pullingUp="pullingUp" ref="scroll" :probeType="3" :pullUpLoad="true">
      <!-- 轮播图 -->
      <home-swiper :banners="banners" />
      <!-- 福利部分 -->
      <home-recommend :recommends="recommends"/>
      <!-- 今日推荐 -->
      <home-feature/>
      <tab-control :titles="['流行','新款','精选']"
                  class="tab-control"
                  @tabClick="tabClick"/>
      <goods-list :goods="showGoods" class="goods"/>
    </scroll>
    <back-top @click.native="backTop" v-show="showBack"/>
  </div>
</template>

<script>
  import BScroll from 'better-scroll';

  import HomeSwiper from './childComps/HomeSwiper.vue'
  import HomeRecommend from './childComps/HomeRecommend.vue'
  import HomeFeature from './childComps/HomeFeature.vue'

  import NavBar from 'components/common/navbar/NavBar.vue'
  import TabControl from 'components/content/tabControl/TabControl.vue'
  import GoodsList from 'components/content/goods/GoodsList.vue'
  import GoodsListItem from 'components/content/goods/GoodsListItem.vue'
  import Scroll from 'components/common/scroll/Scroll.vue';
  import BackTop from 'components/content/backTop/BackTop.vue';

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
      Scroll,
      BackTop
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
        showBack:false
      }
    },
    created(){
      // 1.请求多个数据
      this.getMultidata()
      // 2.请求商品数据
      this.getGoods('pop')
      this.getGoods('new')
      this.getGoods('sell')

      // 3.监听item中的图片加载是否完成
      // this.$bus.$on('imageLoad',() => {
      //   this.$refs.scroll.refresh()
      //   console.log("bus总线监听");
      // })
    },
    updated() {
      this.$refs.scroll.refresh()
    },
    computed:{
      showGoods(){
        return this.goods[this.goodsSelect].list
      }
    },
    methods: {
      /**
       * 网络请求相关的
       */
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
          
          // console.log(res);
        })
      },
      /**
       * 事件监听相关的
       */
      tabClick(index){
        // console.log(index);
        switch(index){
          case 0:
            this.goodsSelect = 'pop';
            break;
          case 1: 
            this.goodsSelect = 'new';
            break;
          case 2:
            this.goodsSelect = 'sell';
            break;
        }
      },
      // 返回顶部功能
      backTop(){
        console.log("点击返回")
        this.$refs.scroll.scrollTo(0,0,500)
      },
      // 监听下拉距离
      scroll(position){
        this.showBack = -(position.y) >1200
      },
      // 上拉加载更多数据
      pullingUp(bs){
        this.getGoods(this.goodsSelect)
        setTimeout(()=>{
          bs.finishPullUp()
        },1000)
      }
    },
  }
</script>

<style scoped>
  #home{
    padding-top: 44px;
    padding-bottom: 49px;
    height: 100vh;
    position: relative;
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
    /* position: sticky; */
    top: 44px;
    width: 100%;
    z-index:9;
    background-color: white;
  }
  .content{
    position: absolute;
    top: 44px;
    bottom: 51px;
    overflow: hidden;
  }
</style>