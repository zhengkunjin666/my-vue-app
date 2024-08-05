import { createApp } from 'vue'
import './style.scss'
import App from './App.vue'
import router from './router'
 
const app = createApp(App)
 
app.use(router)
 
app.mount('#app')

// SecretId:AKIDEjDuZAkIpKoFbtCYp7OdpGueO9yu07Mq
// SecretKey:ZND8FZIQvko09KVA0z07DKKlcg6b8qbl