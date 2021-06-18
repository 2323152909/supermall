<template>
  <div class="list-item">
    <div class="item-selector">
      <check-button @checkClick="checkClick" :is-checked="product.checked"/>
    </div>
    <div class="info-item item-img">
        <img :src="product.img">
      </div>
      <div class="info-item info-right">
        <div class="title">{{product.title}}</div>
        <div class="desc">{{product.desc}}</div>
        <div class="price">￥{{product.price}}</div>
        <div class="count">x{{product.count}}</div>
      </div>
  </div>
</template>

<script>
  import CheckButton from 'components/content/checkButton/CheckButton'
  export default {
    name:'CartListItem',
    components:{
      CheckButton
    },
    props:{
      product:{
        type:Object,
        default(){
          return {}
        }
      }
    },
    methods: {
      checkClick(){
        this.$store.dispatch('changeChecked', this.product)
        // this.product.checked = !this.product.checked
      }
    },
  }
</script>

<style scoped>
  .list-item{
    padding:5px;
  }
  .cart-info{
    display: flex;
    height: 100px;
    position: relative;
    border-bottom: 2px solid #ccc;
  }
  .item-selector{
    align-items: center;
    width:20px;
    display: flex;
    justify-content: center;
    padding: 5px;
  }
  .item-img{
    height: 100%;
    align-items: center;
    padding:5px;
  }
  .item-img img{
    width: 50px;
    border-radius:5px;
    margin-top: 5px;
  }
  .info-right{
    overflow: hidden;
    position: relative;
  }
  .info-right>div{
    display: block;
  }
  .price{
    position:absolute;
    bottom: 5px;
    color: var(--color-high-text);
    left: 5px;
  }
  .count{
    position: absolute;
    bottom: 5px;
    right: 5px;
  }
  .title,.desc{
    line-height: 20px;
    height:20px;
    font-size: 15px;
    overflow: hidden;
    margin: 5px 10px;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .desc{
    color: #999;
    font-size: 12px;
  }
</style>