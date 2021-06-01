import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import mitt from 'mitt'//引入mitt

let app = createApp(App)
// app.config.globalProperties.$bus = new mitt()//绑定事件总线
app.use(router).mount('#app')

// createApp(App).use(router).mount('#app')
