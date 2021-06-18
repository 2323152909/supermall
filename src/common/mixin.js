import {debounce} from './utils'

export const itemListenerMixin = {
  data(){
    return {
    itemImgListener:null
    }
  },
  mounted() {
    const refresh = debounce(this.$refs.scroll.refresh,500)
      // 3.监听item中的图片加载是否完成,此处监听事件是 this.$bus.on('事件',function(){})
      // console.log(this.$bus);
      this.itemImgListener = () => {
        // this.$refs.scroll.refresh()
        refresh()
        // console.log("bus总线监听");
      }
      this.$bus.on('imageLoad', this.itemImgListener)
  },
}

export const backTopMixin = {
  data(){
    return {
      showBack:false
    }
  },
  methods:{
    // 返回顶部功能
    backTop(){
      console.log("点击返回")
      this.$refs.scroll.scrollTo(0,0,500)
    },
  }
}