<template>
  <div class="tab-control">
    <div v-for="(item,index) in titles" class="tab-control-item"  @click="tabClick(index)">
      <span :class="{active: index == currentIndex}">{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name:'TabControl',
    data() {
      return {
        currentIndex:0,
      }
    },
    props:{
      titles:{
        type:Array,
        default(){
          return []
        }
      }
    },
    methods: {
      tabClick(index){
        this.currentIndex = index;
        this.$emit('tabClick',index)
      },
    },
  }
</script>

<style scoped>
  .tab-control{
    display:flex;
    width: 100%;
    text-align: center;
    height: 44px;
    line-height: 44px;
    /* position: sticky;
    top: 44px; */
  }
  .tab-control-item{
    flex:1;
  }
  .tab-control-item span{
    padding: 5px;
  }
  .active{
    color:var(--color-high-text);
    border-bottom: 2px solid var(--color-tint);
  }
</style>