<template>
  <div class="bottom-bar">
    <div class="check-all">
      <check-button class="check-button" :is-checked="allChecked" @checkClick="checkClick"/>
      <span>全选</span>
    </div>
    <div class="total-price">
      <div class="total">
        <span>总价：{{totalPrice}}</span>
      </div>
    </div>
    <div class="buy">去计算({{selectLength}})</div>
  </div>
</template>

<script>
  import CheckButton from 'components/content/checkButton/CheckButton'
  import { mapGetters } from 'vuex'
  export default {
    name:'CartBottomBar',
    components:{
      CheckButton
    },
    data() {
      return {
        allChecked:false
      }
    },
    updated() {
      // console.log(this.selectLength)
      // console.log(this.cartLength)
      if(this.selectLength == this.cartLength){
        this.allChecked = true
      }else{
        this.allChecked = false
      }
    },
    computed:{
      ...mapGetters(['carts', 'cartLength']),
      // 所选商品的总价格
      totalPrice(){
        let arr = this.carts.filter(obj => {
          return obj.checked
        }).reduce((pre, cur) => {
          return (cur.price * cur.count) + pre
        },0)
        // console.log(arr.toFixed(2));
        return "￥" + arr.toFixed(2)
      },
      // 所以商品种类数
      selectLength(){
        let length = this.carts.filter(obj => {
          return obj.checked
        }).length
        return length
      },
    },
    methods:{
      checkClick(){
        this.allChecked = !this.allChecked
        if(this.allChecked){
          this.carts.map(item => {
            item.checked = true
          })
        }else{
          this.carts.map(item => {
            item.checked = false
          })
        }
      }
    }
  }
</script>

<style scoped>
  .bottom-bar{
    position:relative;
    height: 40px;
    display: flex;
    font-size: 14px;
    background-color: #eee;
  }
  .check-all{
    position: relative;
    height: 100%;
    display: flex;
    align-items: center;
    margin-left: 10px;
  }
  .check-button{
    margin-right: 5px;
  }
  .total-price{
    position: relative;
    display: flex;
    height: 100%;
    margin-left: 20px;
    align-items: center;
  }
  .buy{
    position: absolute;
    height: 100%;
    width: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    background-color: #FD5100;
    right: 0;
  }
</style>