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
    right:20px;
    bottom:70px;
  }
  .back-top img{
    height:50px;
    width:50px;
    border-radius:50%;
  }
</style>