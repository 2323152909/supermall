<template>
  <div v-if="Object.keys(detailInfo).length != 0" class="detail-info">
    <div class="info-desc clear-fix">
      <div class="start">
      </div>
      <div class="desc">{{detailInfo.desc}}</div>
      <div class="end"></div>
    </div>
    <div class="info-key">{{detailInfo.detailImage[0].key}}</div>
    <div class="info-list">
      <img v-for="(item, index) in detailInfo.detailImage[0].list" :src="item" :key="index" @load="imgLoad"/>
    </div>
  </div>
</template>

<script>
  export default {
    name:'DetailGoodsInfo',
    props:{
      detailInfo:{
        type:Object,
        default(){
          return {}
        }
      }
    },
    data(){
      return {
        counter:0,
        imagesLength:0
      }
    }, 
    methods:{ 
      imgLoad(){
        // 保证全部图片加载完成之后再发送事件
        if(++this.counter == this.imagesLength){
          this.$emit('imgLoad')
          // console.log(1);
        }
      }
    },
    watch:{
      detailInfo(){
        this.imagesLength = this.detailInfo.detailImage[0].list.length
      }
    }
  }
</script>

<style scoped>
  .info-list img{
    width:100%;
  }
</style>