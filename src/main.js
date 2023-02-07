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
axios.defaults.baseURL = 'http://127.0.0.1:3007'

// axios发送请求 请求头自动加token
// axios.interceptors.request.use(
//   (config) => {
//     config.headers['Authorization'] = `${localStorage.getItem('token')}`
//     return config
//   },
//   (error) => {
//     return Promise.reject(error)
//   }
// )

app.config.globalProperties.$http = axios

app.mount('#app')
