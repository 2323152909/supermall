<template>
  <div id="home">
    <!-- 导航栏 -->
    <nav-bar class="home-nav">
      <template v-slot:center>
        <h2>购物街</h2>
      </template>
    </nav-bar>
    <!-- 轮播图 -->
    <home-swiper :banners="banners"/>
    <!-- 福利部分 -->
    <home-recommend :recommends="recommends"/>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar.vue'
  import HomeSwiper from './childComps/HomeSwiper.vue'
  import HomeRecommend from './childComps/HomeRecommend.vue'

  import {getHomeMultidata} from 'network/home.js'
  
  export default {
    name:'Home',
    components:{
      NavBar,
      HomeSwiper,
      HomeRecommend
    },
    data() {
      return {
        banners:[],
        recommends:[]
      }
    },
    created(){
      // 1.请求多个数据
      getHomeMultidata().then(res => {
        console.log(res);
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
        console.log(this.banners);
        console.log(this.recommends);
      });
    }
  }
</script>

<style scoped>
  .home-nav{
    background-color:#FF8E96;
  }
</style>