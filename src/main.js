import { createApp } from 'vue'
import App from './App.vue'
import './style.css'

import router from './router'
import axios from 'axios'
const app = createApp(App)

app.use(router)

axios.defaults.baseURL = 'http://127.0.0.1:3007/'
app.config.globalProperties.$http = axios

app.mount('#app')
