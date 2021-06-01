<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll';

  export default {
    name:'Scroll',
    data() {
      return {
        scroll:null,
      }
    },
    props:{
      probeType:{
        type:Number,
        default:0
      },
      pullUpLoad:{
        type:Boolean,
        default:false
      }
    },
    mounted() {
      console.log(this.$refs.wrapper);
      // 1.创建better-scroll对象
      this.scroll = new BScroll(this.$refs.wrapper,{
        pullUpLoad:this.pullUpLoad,
        probeType:this.probeType,
        click:true,
        observeDOM:true,
        mouseWheel:true
      })
      // 2.滚动事件监听
      this.scroll.on('scroll',(position) => {
        // console.log(position);
        this.$emit('scroll',position)
      })
      // 重新加载scroll可滚动高度
      this.scroll.refresh()
      // 3.上拉加载更多
      this.scroll.on('pullingUp',() => {
        this.$emit('pullingUp',this.scroll)
      })
    },
    methods: {
      scrollTo(x,y,time=300){
        this.scroll.scrollTo(x,y,time)
      },
      refresh(){
        this.scroll.refresh()
      }
    },
  }
</script>

<style scoped>

</style>