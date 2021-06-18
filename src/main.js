import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import mitt from 'mitt'//引入mitt
import { Toast, Lazyload } from 'vant'
import Fastclick from 'fastclick'

const app = createApp(App)

// 解决移动端300ms延迟
Fastclick.attach(document.body)

// 添加事件总线对象
app.config.globalProperties.$bus = new mitt()//绑定事件总线

// 修改Toast的默认属性
Toast.setDefaultOptions({ duration: 2000 });

app.use(router).use(store).mount('#app')
// 注册toast轻提示插件
app.use(Toast)
// 使用懒加载插件
app.use(Lazyload,{
  loading:require('./assets/img/common/placeholder.png')
})
// createApp(App).use(router).mount('#app')