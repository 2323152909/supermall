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
    <tab-control :titles="['流行','新款','精选']" class="tab-control"/>
    <ul>
      <li>列表&</li>
      <li>列表&</li>
      <li>列表&</li>
      <li>列表&</li>
      <li>列表&</li>
      <li>列表&</li>
      <li>列表&</li>
      <li>列表&</li>
      <li>列表&</li>
      <li>列表&</li>
      <li>列表&</li>
      <li>列表&</li>
      <li>列表&</li>
      <li>列表&</li>
      <li>列表&</li>
      <li>列表&</li>
      <li>列表&</li>
      <li>列表&</li>
      <li>列表&</li>
      <li>列表&</li>
      <li>列表&</li>
      <li>列表&</li>
      <li>列表&</li>
      <li>列表&</li>
      <li>列表&</li>
      <li>列表&</li>
      <li>列表&</li>
      <li>列表&</li>
      <li>列表&</li>
      <li>列表&</li>
      <li>列表&</li>
      <li>列表&</li>
      <li>列表&</li>
      <li>列表&</li>
      <li>列表&</li>
      <li>列表&</li>
      <li>列表&</li>
      <li>列表&</li>
      <li>列表&</li>
      <li>列表&</li>
      <li>列表&</li>
      <li>列表&</li>
      <li>列表&</li>
      <li>列表&</li>
      <li>列表&</li>
      <li>列表&</li>
      <li>列表&</li>
      <li>列表&</li>
      <li>列表&</li>
      <li>列表&</li>
    </ul>
  </div>
</template>

<script>

  import HomeSwiper from './childComps/HomeSwiper.vue'
  import HomeRecommend from './childComps/HomeRecommend.vue'
  import HomeFeature from './childComps/HomeFeature.vue'

  import NavBar from 'components/common/navbar/NavBar.vue'
  import TabControl from 'components/content/tabControl/TabControl.vue'

  import {getHomeMultidata,getHomeGoods} from 'network/home.js'
  
  export default {
    name:'Home',
    components:{
      NavBar,
      HomeSwiper,
      HomeRecommend,
      HomeFeature,
      TabControl
    },
    data() {
      return {
        banners:[],
        recommends:[],
        goods:{
          pop:{page:0,list:[]},
          news:{page:0,list:[]},
          sell:{page:0,list:[]},
        }
      }
    },
    created(){
      // 1.请求多个数据
      getHomeMultidata().then(res => {
        // console.log(res);
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
        // console.log(this.banners);
        // console.log(this.recommends);
      }),
      getHomeGoods().then(res => {

      })
    }
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
    background-color: white;
  }
</style>