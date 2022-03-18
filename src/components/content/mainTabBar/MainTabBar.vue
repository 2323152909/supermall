<template>
    <div class="main-tab-bar">
        <tab-bar>
            <!-- 首页 -->
            <tab-bar-item link="/home">
                <template v-slot:item-ico>
                    <img src="~assets/img/tabbar/home.png" alt="首页">
                </template>
                <template v-slot:item-ico-active>
                    <img src="~assets/img/tabbar/home_active.png" alt="首页">
                </template>
                <template v-slot:item-text>
                    <div>首页</div>
                </template>
            </tab-bar-item>
            <!-- 分类 -->
            <tab-bar-item link="/category">
                <template v-slot:item-ico>
                    <img src="~assets/img/tabbar/category.png" alt="分类">
                </template>
                <template v-slot:item-ico-active>
                    <img src="~assets/img/tabbar/category_active.png" alt="分类">
                </template>
                <template v-slot:item-text>
                    <div>分类</div>
                </template>
            </tab-bar-item>
            <!-- 购物车 -->
            <tab-bar-item link="/cart">
                <template v-slot:item-ico>
                    <img src="~assets/img/tabbar/cart.png" alt="购物车">
                </template>
                <template v-slot:item-ico-active>
                    <img src="~assets/img/tabbar/cart_active.png" alt="购物车">
                </template>
                <template v-slot:item-text>
                    <div>购物车</div>
                </template>
            </tab-bar-item>
            <!-- 我的 -->
            <tab-bar-item link="/profile">
                <template v-slot:item-ico>
                    <img src="~assets/img/tabbar/profile.png" alt="我的">
                </template>
                <template v-slot:item-ico-active>
                    <img src="~assets/img/tabbar/profile_active.png" alt="我的">
                </template>
                <template v-slot:item-text>
                    <div>我的</div>
                </template>
            </tab-bar-item>
        </tab-bar>
    </div>
</template>

<script>
import tabBar from 'components/common/tabbar/TabBar.vue'
import tabBarItem from 'components/common/tabbar/TabBarItem.vue'

export default {
    name: 'MainTabBar',
    components: {
        tabBar,
        tabBarItem,
    }
}
</script>

<style scoped>
/* .main-tab-bar {
    position: fixed;
    left: 0;
    bottom: 0;
    z-index: 999;
} */
</style>
