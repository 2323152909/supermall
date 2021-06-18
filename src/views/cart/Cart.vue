<template>
  <div class="cart">
    <!-- 购物车顶部导航栏 -->
    <nav-bar class="cart-nav">
      <template v-slot:center>  
        <h2>购物车({{length}})</h2>
      </template>
    </nav-bar>   
    <scroll class="content" ref="scroll">
      <cart-list/>
    </scroll>
    <!-- 购物车物品信息列表 -->
    <cart-bottom-bar/>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  import Scroll from 'components/common/scroll/Scroll'

  import CartList from './childComps/CartList'
  import CartBottomBar from './childComps/CartBottomBar'
  import { mapGetters } from 'vuex'
  export default {
    name:'Shop',
    components:{
      NavBar,
      CartList,
      Scroll,
      CartBottomBar
    },
    computed:{
      // 两种用法
      // ...mapGetters(['cartLength','carts'])
      ...mapGetters({
        length:'cartLength'
        })
    },
    activated() {
      this.$refs.scroll.refresh()
    },
  }
</script>

<style scoped>
  .cart{
    /* display: block; */
    position: relative;
    height: 100vh;
  }
  .content{
    position: relative;
    height: calc(100% - 93px - 40px);
    overflow: hidden;
  }
  .cart-nav{
    background-color: #FF8E96;
    color: #fff;
  } 
  /* .total{
    position: absolute;
    height: 50px;
    bottom: 0;
    right:5px;
    text-align: right;
  } */
</style>