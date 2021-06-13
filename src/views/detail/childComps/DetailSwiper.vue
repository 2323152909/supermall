<template>
  <swiper class="detail-swiper">
    <swiper-item v-for="item in topImages" class="swiper-item">  
      <img :src="item" alt="">
    </swiper-item>
  </swiper>
</template>

<script>
  import {Swiper,SwiperItem} from 'components/common/swiper/index.js';
  export default {
    name:'DetailSwiper',
    components:{
      Swiper,
      SwiperItem
    },
    props:{
      topImages:{
        type:Array,
        default(){
          return []
        }
      }
    },
    created() {

    },
  }
</script>

<style scoped>
  .swiper-item img{
    width: 100%;
  }
  .swiper-item{
    height: 300px;
    overflow: hidden;
  }
</style>