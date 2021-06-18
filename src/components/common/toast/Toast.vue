<template>
  <div class="toast" v-show="isShow">
    <div>{{message}}</div>
  </div>
</template>

<script>
  export default {
    name:'Toast',
    data() {
      return {
        message:'',
        isShow:false
      }
    },
    methods: {
      show(message, duration){
        this.message = message
        this.isShow = true
        setTimeout(() => {
          this.isShow = false
        }, duration)
      }
    },
  }
</script>

<style scoped>
  .toast{
    position: fixed;
    background-color: rgba(0, 0, 0, .7);
    color: #fff;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    padding: 10px 5px;
  }

</style>