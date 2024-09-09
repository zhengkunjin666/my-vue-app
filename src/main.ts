import { createApp } from 'vue'
import './style.scss'
import App from './App.vue'
import router from './router'
import '@/utils/rem.ts'
import 'virtual:svg-icons-register'
const app = createApp(App)

const proxyX = process.env.NODE_ENV === 'production' ? 'https://node.video.qq.com' : ''
const proxyPgc = process.env.NODE_ENV === 'production' ? 'https://api.bilibili.com' : ''
const proxySearch = process.env.NODE_ENV === 'production' ? 'https://api.bilibili.com/x/web-interface' : ''
app.config.globalProperties.proxyX = proxyX
app.config.globalProperties.proxyPgc = proxyPgc
app.config.globalProperties.proxySearch = proxySearch

app.use(router)

app.mount('#app')