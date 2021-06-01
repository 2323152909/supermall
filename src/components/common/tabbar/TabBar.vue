<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
    export default {
        name:'TabBar',
        data() {
          return {
            name:'廖浩东'
          }
        },
    }
</script>

<style scoped>
  #tab-bar{
    display: flex;
    background-color: #f6f6f6;
    position: fixed;
    z-index: 999;
    bottom: 0;
    left: 0;
    right: 0;
    box-shadow: 0 -3px 10px rgba(13, 37, 43,0.2);
  }
</style>