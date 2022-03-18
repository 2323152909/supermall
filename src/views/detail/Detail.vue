<template>
    <div id="detail">
        <detail-nav-bar class="detail-nav" @titleClick="titleClick" ref="nav" />
        <scroll class="content" ref="scroll" :pullUpLoad="true" @scroll="scroll" :probeType="3">
            <!-- 详情页轮播图 -->
            <detail-swiper :topImages="topImages" />
            <!-- 详情页基本信息 -->
            <detail-base-message :goods="goods" />
            <!-- 详情页商家信息 -->
            <detail-shop-info :shop="shop" />
            <detail-goods-info :detail-info="detailInfo" @imgLoad="imgLoad" />
            <detail-goods-params :goods-params="goodsParams" ref="params" />
            <detail-comment-info :comment-info="commentInfo" ref="comment" />
            <goods-list :goods="recommends" ref="recommends" />
        </scroll>
        <back-top @click.native="backTop" v-show="showBack" />
        <detail-bottom-bar class="detail-bottom-bar" @addToCart="addToCart" />
        <!-- <toast :message="message" :show="show"/> -->
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
import DetailBottomBar from './childComps/DetailBottomBar'

import Scroll from 'components/common/scroll/Scroll'
import GoodsList from 'components/content/goods/GoodsList';
import BackTop from 'components/content/backTop/BackTop.vue';
// import Toast from 'components/common/toast/Toast.vue';

import { getDetail, getRecommend, Goods, Shop, GoodsParams, Comment } from 'network/detail.js';
import { debounce } from 'common/utils'
import { itemListenerMixin, backTopMixin } from 'common/mixin';
import { mapActions } from 'vuex'

export default {
    name: 'Detail',
    components: {
        DetailNavBar,
        DetailSwiper,
        DetailBaseMessage,
        DetailShopInfo,
        DetailBottomBar,
        DetailGoodsInfo,
        DetailGoodsParams,
        DetailCommentInfo,

        Scroll,
        GoodsList,
        BackTop,
        // Toast
    },
    data() {
        return {
            iid: null,
            topImages: [],
            title: null,
            goods: {},
            shop: {},
            detailInfo: {},
            goodsParams: {},
            commentInfo: {},
            recommends: [],
            themeTopYs: [],
            currentIndex: null,
            message: '',
            show: false
        }
    },
    // 使用混入
    mixins: [itemListenerMixin, backTopMixin],
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
            // console.log(data);

            // 2.将请求的轮播图数据进行保存
            this.topImages = data.itemInfo.topImages

            // 3.将请求的商品信息保存到一个对象中
            this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
            // console.log(this.goods)

            // 4.将请求到的商家信息保存到一个对象中
            this.shop = new Shop(data.shopInfo)
            // console.log(this.shop);

            // 5.保存商品详情数据
            this.detailInfo = data.detailInfo

            // 6.将请求到的商品参数保存到对象中
            this.goodsParams = new GoodsParams(data.itemParams.info, data.itemParams.rule)
            // console.log(this.goodsParams)

            // 7.获取评论信息
            if (data.rate.cRate != 0) {
                this.commentInfo = new Comment(data.rate.list[0])
                // console.log(this.commentInfo);
            }

            // 1.第一次获取，值不对
            // this.$refs.params还没有渲染
            // this.themeTopYs = []
            // this.themeTopYs.push(0)
            // this.themeTopYs.push(this.$refs.params.$el.offsetTop)
            // this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
            // this.themeTopYs.push(this.$refs.recommends.$el.offsetTop)
            // console.log(this.themeTopYs)

            // this.$nextTick(function () {
            //   // 2.第二次获取，值不对，DOM虽然加载完了，但是图片还没加载完
            //   // 根据最新的数据，对应的DOM
            //   // 仅在渲染整个视图之后运行的代码
            //   this.themeTopYs = []
            //   this.themeTopYs.push(0)
            //   this.themeTopYs.push(this.$refs.params.$el.offsetTop)
            //   this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
            //   this.themeTopYs.push(this.$refs.recommends.$el.offsetTop)
            //   console.log(this.themeTopYs)
            // })
        }).catch(err => {
            console.log("数据请求失败");
        })

        // 3.请求recommend推荐数据
        getRecommend().then(res => {
            // 1.获取数据
            const data = res.data
            // console.log(data);

            // 2.将请求到的数据进行保存
            this.recommends = data.list
        })
    },
    methods: {
        imgLoad() {
            this.$refs.scroll.refresh()

            this.themeTopYs = []
            this.themeTopYs.push(0)
            this.themeTopYs.push(this.$refs.params.$el.offsetTop)
            this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
            this.themeTopYs.push(this.$refs.recommends.$el.offsetTop)
            this.themeTopYs.push(Number.MAX_VALUE)
            // console.log(this.themeTopYs)
        },
        titleClick(index) {
            this.$refs.scroll.scrollTo(0, -this.themeTopYs[index], 500)
        },
        scroll(position) {
            // 判断backTop是否显示
            this.showBack = -(position.y) > 1200
            // 判断tabControl是否吸顶（position:fixed）
            if (-position.y >= this.taboffsetTop) {
                this.isfixed = true
            } else {
                this.isfixed = false
            }

            // 1.获取滚动的Y值
            const positionY = -position.y
            // 2.对positionY与主题中的数据进行比较
            let length = this.themeTopYs.length
            for (let i = 0; i < length - 1; i++) {
                // if(this.currentIndex != i &&((i < length -1 &&positionY >= this.themeTopYs[i] && positionY < this.themeTopYs[i+1]) || (i == length -1 && positionY >= this.themeTopYs[i]))){
                //   this.currentIndex = i
                //   console.log(this.currentIndex)
                //   this.$refs.nav.currentIndex = this.currentIndex
                // }
                if (this.currentIndex != i && (positionY >= this.themeTopYs[i] && positionY < this.themeTopYs[i + 1])) {
                    this.currentIndex = i
                    this.$refs.nav.currentIndex = this.currentIndex
                }
            }
        },
        ...mapActions(['increamentCart']),
        addToCart() {
            // console.log('添加')
            // 1.获取购物车需要展示的信息
            const cartObj = {}
            cartObj.title = this.goods.title
            cartObj.img = this.topImages[0] || this.topImages
            cartObj.price = this.goods.realPrice
            cartObj.desc = this.goods.desc
            cartObj.iid = this.iid
            // cartObj.count = 1
            // 2.将商品添加到购物车
            // this.$store.commit('increamentCart', cartObj)

            // this.$store.dispatch('increamentCart', cartObj).then(res => {
            //   console.log(res)
            // })

            this.increamentCart(cartObj).then(res => {
                console.log(res)
                // this.message = res
                // this.show = true
                // setTimeout(() => {
                //   this.show = false
                // },2000)
                this.$toast(res)
                console.log(this.$toast);
            })
        }
    },
}
</script>

<style scoped>
#detail {
    /* position: relative; */
    background-color: white;
    height: 100vh;
    padding-top: 44px;
    padding-bottom: 49px;
    box-sizing: border-box;
}
.content {
    height: 100%;
}
.detail-nav {
    position: fixed;
    z-index: 999;
    left: 0;
    top: 0;
    background-color: white;
}
.detail-bottom-bar {
    position: fixed;
    left: 0;
    bottom: 0;
    height: 49px;
    z-index: 999;
}
</style>
