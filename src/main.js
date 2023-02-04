import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import './style.css'

import router from './router'
import axios from 'axios'

const app = createApp(App)

app.use(router)
app.use(ElementPlus)
axios.defaults.baseURL = 'http://127.0.0.1:3007/'
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

const instance = axios.create({
  timeout: 1000 * 1000000,
  withCredentials: true,
  baseURL: '/api', // 方式二：通过/api别名指定后端路由
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    Accept: 'application/json',
  },
})

app.config.globalProperties.$http = axios

app.mount('#app')
