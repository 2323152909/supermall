<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav"/>
    <scroll class="content" ref="scroll" :pullUpLoad="true">
      <!-- 详情页轮播图 -->
      <detail-swiper :topImages="topImages"/>
      <!-- 详情页基本信息 -->
      <detail-base-message :goods="goods"/>
      <!-- 详情页商家信息 -->
      <detail-shop-info :shop="shop"/>
      <detail-goods-info :detail-info="detailInfo" @imgLoad="imgLoad"/>
      <detail-goods-params :goods-params="goodsParams"/>
      <detail-comment-info :comment-info="commentInfo"/>
      <goods-list :goods="recommends"/>
    </scroll>
  </div>
</template>

<script>
  import DetailNavBar from './childComps/DetailNavBar';
  import DetailSwiper from './childComps/DetailSwiper'
  import DetailBaseMessage from './childComps/DetailBaseMessage'
  import DetailShopInfo from './childComps/DetailShopInfo'
  import DetailGoodsInfo from './childComps/DetailGoodsInfo'
  import DetailGoodsParams from './childComps/DetailGoodsParams'
  import DetailCommentInfo from './childComps/DetailCommentInfo'

  import Scroll from 'components/common/scroll/Scroll'
  import GoodsList from 'components/content/goods/GoodsList';

  import {getDetail, getRecommend,Goods,Shop, GoodsParams, Comment} from 'network/detail.js';
  import {debounce} from 'common/utils'
  import {itemListenerMixin} from 'common/mixin';

  export default {
    name:'Detail',
    components:{
      DetailNavBar,
      DetailSwiper,
      DetailBaseMessage,
      DetailShopInfo,

      Scroll,
      GoodsList,

      DetailGoodsInfo,
      DetailGoodsParams,
      DetailCommentInfo
    },
    data() {
      return {
        iid:null,
        topImages:[],
        title:null,
        goods:{},
        shop:{},
        detailInfo:{},
        goodsParams:{},
        commentInfo:{},
        recommends:[]
      }
    },
    // 使用混入
    mixins:[itemListenerMixin],
    // mounted() {
    //   const refresh = debounce(this.$refs.scroll.refresh,500)
    //   // 3.监听item中的图片加载是否完成,此处监听事件是 this.$bus.on('事件',function(){})
    //   // console.log(this.$bus);
    //   this.itemImgListener = () => {
    //     // this.$refs.scroll.refresh()
    //     refresh()
    //     // console.log("bus总线监听");
    //   }
    //   this.$bus.on('imageLoad', this.itemImgListener)
    // },
    unmounted() {
      this.$bus.off('imageLoad', this.itemImgListener)
      console.log('取消detail');
    },
    created() {
      // 1.保存传入的iid
      this.iid = this.$route.params.id
      // console.log(this.iid);

      // 2.根据iid请求数据
      getDetail(this.iid).then(res => {
        // 1.获取数据
        const data = res.result;
        console.log(data);

        // 2.将请求的轮播图数据进行保存
        this.topImages = data.itemInfo.topImages

        // 3.将请求的商品信息保存到一个对象中
        this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
        console.log(this.goods)

        // 4.将请求到的商家信息保存到一个对象中
        this.shop = new Shop(data.shopInfo)
        console.log(this.shop);

        // 5.保存商品详情数据
        this.detailInfo = data.detailInfo

        // 6.将请求到的商品参数保存到对象中
        this.goodsParams = new GoodsParams(data.itemParams.info, data.itemParams.rule)
        console.log(this.goodsParams)

        // 7.获取评论信息
        if(data.rate.cRate != 0){
          this.commentInfo = new Comment(data.rate.list[0])
          console.log(this.commentInfo);
        } 
      }).catch(err => {
        console.log("数据请求失败");
      })

      // 3.请求recommend推荐数据
      getRecommend().then(res => {
        // 1.获取数据
        const data = res.data
        console.log(data);

        // 2.将请求到的数据进行保存
        this.recommends = data.list
      })
    },
    methods:{
      imgLoad(){
        this.$refs.scroll.refresh()
      },
    }
  }
</script>

<style scoped>
  #detail{
    position: relative;
    z-index: 9;
    background-color: white;
    height: 100vh;
    /* padding-top:44px; */
    /* bottom: 49px; */
  }
  .content{
    height: calc(100% - 44px);
  }
  .detail-nav{
    position: relative;
    z-index: 9;
    background-color: white;
  }
</style>