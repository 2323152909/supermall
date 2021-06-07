<template>
  <div>
    <swiper class="home-swiper">
      <swiper-item v-for='(item,index) in banners' :key="index">
        <a :href="item.link">
          <img :src="item.image" @load="imageLoad">
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
    },
    data() {
      return {
        isloadEmit:false
      }
    },
    methods: {
      imageLoad(){
        // 确保只发出一次，不会重复发送
        if(!this.isloadEmit){
          this.$emit('swiperImageLoad')
          this.isloadEmit = true
        } 
      }
    },
  }
</script>

<style scoped>
  .home-swiper img{
    width: 100%;
  }
</style>