<template>
    <div class="tab-bar-item" @click="itemClick">
        <div v-if="!isActive">
            <slot name="item-ico"></slot>
        </div>

        <div v-else>
            <slot name="item-ico-active"></slot>
        </div>

        <div :style="activeStyle">
            <slot name="item-text"></slot>
        </div>
        <!-- <img src="../../assets/img/tabbar/home.png" alt="首页">
    <div>首页</div> -->
    </div>
</template>

<script>
export default {
    name: 'TabBarItem',
    props: {
        link: String,
        activeColor: {
            type: String,
            default: '#1ce78f'
        }
    },
    data() {
        return {
            // isActive:true
        }
    },
    computed: {
        isActive() {
            return this.$route.path.indexOf(this.link) != -1;
            // console.log(this.$route.path.indexOf(this.link));
        },
        activeStyle() {
            return this.isActive ? { color: this.activeColor } : { color: "#515151" };
        }
    },
    methods: {
        itemClick() {
            this.$router.push(this.link);
            // console.log(this.link);
            // console.log(this.activeColor);
            // console.log('itemclick');
        }
    },
}
</script>

<style scoped>
.tab-bar-item {
    /* 对弹性布局进行均等分 */
    flex: 1;
    text-align: center;
    height: 51px;
    font-size: 14px;
}
.tab-bar-item img {
    height: 24px;
    width: 24px;
    margin-top: 3px;
    margin-bottom: 2px;
    vertical-align: middle;
}
/* .active{
    color: red;
  } */
</style>
