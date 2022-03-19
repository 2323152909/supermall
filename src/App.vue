<template>
    <div id="app">
        <router-view v-slot="{ Component }">
            <keep-alive exclude="detail" :max="10">
                <component :is="Component" :key="$route.name" />
            </keep-alive>
        </router-view>
        <main-tab-bar />
    </div>
</template>

<script>
import MainTabBar from 'components/content/mainTabBar/MainTabBar.vue'

export default {
    name: 'App',
    components: {
        MainTabBar,
    },

}
</script>

<style>
@import "assets/css/base.css";
.van-toast {
    position: fixed;
    background-color: rgba(0, 0, 0, 0.7);
    color: #fff;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    padding: 10px 5px;
}
</style>
