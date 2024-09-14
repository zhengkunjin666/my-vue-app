import { createApp } from 'vue'
import './style.scss'
import App from './App.vue'
import router from './router'
import '@/utils/rem.ts'
import 'virtual:svg-icons-register'
const app = createApp(App)

import { jsonp } from 'vue-jsonp';
app.config.globalProperties.$jsonp= jsonp

app.use(router)

app.mount('#app')