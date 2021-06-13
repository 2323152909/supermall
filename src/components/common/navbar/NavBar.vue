<template>
  <div class="nav-bar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
}
</script>

<style>
  .nav-bar{
    display: flex;
    line-height: 44px;
    box-shadow: 0 3px 3px rgba(100,100,100,0.3);   
  }
  .left{
    width:20%;
    margin-left:0px;
  }
  .center{
    width:60%;
    text-align:center;
    /* color:white; */
  }
  .right{
    width:20%;
    margin-right:0px;
  }
</style>
