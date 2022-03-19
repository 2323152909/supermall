<template>
    <div class="category">
        <scroll class="content">
            <h1>有待开发。。。</h1>
        </scroll>
    </div>
</template>

<script>
import Scroll from "components/common/scroll/Scroll.vue"
// 导入使用better-scroll框架
// import BScroll from 'better-scroll'
export default {
    name: 'Category',
    data() {
        return {
            scroll: null
        }
    },
    components: {
        Scroll
    },
    // 组件创建完之后调用
    created() {
    },
    // 当组件挂载到dom时回调
    mounted() {
        // console.log(this.$refs.wrapper);
        // console.log(document.querySelector('.wrapper'));
        // this.scroll = new BScroll(document.querySelector('.wrapper'),{
        //   probeType:3,
        //   pullUpLoad:true,
        //   click:true
        // })
        // this.scroll.on('scroll',(position) => {
        //   // console.log(position);
        // })
        // this.scroll.on('pullingUp',() => {
        //   console.log("上拉加载")
        //   setTimeout(()=>{
        //     this.scroll.finishPullUp()
        //   },500)
        // })
    },
}
</script>

<style scoped>
.category {
    height: 100vh;
    background-color: #afafaf;
    overflow: hidden;
    padding-bottom: 51px;
    box-sizing: border-box;
}
.content {
    height: 100%;
}
</style>
