<template>
  <div>
    <swiper class="home-swiper">
      <swiper-item v-for='(item,index) in banners' :key="index">
        <a :href="item.link">
          <img :src="item.image">
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
  import {Swiper,SwiperItem} from 'components/common/swiper/index.js'

  export default {
    name:'HomeSwiper',
    components:{
      Swiper,
      SwiperItem
    },
    props:{
      banners:{
        type:Array,
        default(){
          return []
        }
      },
    }
  }
</script>

<style scoped>
  .home-swiper img{
    width: 100%;
  }
</style>