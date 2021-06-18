<template>
  <div class="check-button" :class="{check:isChecked}" @click="checkClick">
    <img src="~assets/img/cart/tick.svg" alt="">
  </div>
</template>

<script>
  export default {
    name:'CheckButton',
    props:{
      isChecked:{
        type:Boolean,
        default:false
      }
    },
    methods: {
      checkClick(){
        this.$emit('checkClick')
      }
    },
  }
</script>

<style scoped>
  .check-button{
    border-radius: 50%;
    width: 20px;
    height: 20px;
    border: 2px solid #aaa;
  }
  .check{
    background-color: pink;
    border-color: pink;
  }
</style>