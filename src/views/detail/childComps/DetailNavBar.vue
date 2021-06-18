<template>
  <div id="detail-nav-bar">
    <!-- 导航栏 -->
    <nav-bar> 
      <template v-slot:left>
        <div class="back" @click="backClick">
          <img src="~assets/img/common/back.svg" alt="">
        </div>
      </template>
      <template v-slot:center>
        <div class="title">
          <div v-for="(item,index) in titles"
               class="title-item"
               @click="titleClick(index)">
               <span :class="{active: index == currentIndex}">{{item}}</span>
          </div>
        </div>
      </template>      
    </nav-bar>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar.vue';
  export default {
    name:'DetailNavBar',
    components:{
      NavBar
    },
    data(){
      return {
        titles:['商品','参数','评论','推荐'],
        currentIndex:0
      }
    },
    methods: {
      titleClick(index){
        // console.log(index)
        this.currentIndex = index
        this.$emit('titleClick', index)
      },
      backClick(){
        console.log("backClick");
        this.$router.back()
      }
    },
  }
</script>

<style scoped>
  .title{
    display: flex;
    justify-content: space-evenly;
    font-size:13px;
  }
  .title-item{
   flex:1; 
  }
  .active{
    color: var(--color-high-text);
    /* border-bottom: 2px solid pink; */
  }
  
  .back img{
    /* margin-top: 12px; */
    vertical-align: middle;
  }
</style>