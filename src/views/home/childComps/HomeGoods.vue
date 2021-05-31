<template>
  <div class="goods">
    <div v-for="(item,index) in goodsList" :key="index">
      <a href="item.link">
        <img src="item.show" />
        <span>
          {{item.title}}
        </span>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name:'HomeGoods',
    props:{
      goodsTitle:'',
      goodsList:[]
    }
  }
</script>

<style scoped>

</style>