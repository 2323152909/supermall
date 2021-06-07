import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import mitt from 'mitt'//引入mitt

const app = createApp(App)

app.use(router).mount('#app')
app.config.globalProperties.$bus = new mitt()//绑定事件总线

// createApp(App).use(router).mount('#app')
