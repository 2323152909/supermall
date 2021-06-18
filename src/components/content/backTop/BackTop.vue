<template>
  <div class="back-top">
    <img src="~assets/img/common/top.png"/>
  </div>
</template>

<script>
  export default {
    name:'BackTop',
    data(){
      return {
      }
    },
    props:{
      
    }
  }
</script>

<style scoped>
  .back-top{
    z-index:999;
    position:absolute;
    right:10px;
    bottom:50px;
  }
  .back-top img{
    height:44px;
    width:44px;
    border-radius:50%;
  }
</style>