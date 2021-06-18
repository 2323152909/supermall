<template>
  <div class="list">
    <cart-list-item v-for="(item,index) in carts" class="cart-info" :product="item" :key="index"/>
  </div>
</template>

<script>
  import CartListItem from './CartListItem'
  import { mapGetters } from 'vuex'
  export default {
    name:'CartList',
    components:{
      CartListItem
    },
    computed:{
      ...mapGetters(['carts'])
    }
  }
</script>

<style scoped>
  .list{
    height:100%;
  }
</style>