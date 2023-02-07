import axios from 'axios'

// 自定义配置新建一个实例
const instance = axios.create({
  // 配置基础路径
  baseURL: '/api',
  // 配置超时时间
  timeout: 10000,
  // 设置请求头
  headers: {
    'Content-type': 'application/x-www-form-urlencoded;charset=UTF-8',
  },
})
// 添加请求拦截器
instance.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么，比如传凭证 token
    // config.headers.token = '凭证'
    // config.headers['Auth'] = '权限'
    config.headers['Authorization'] = `${localStorage.getItem('token')}`
    return config
  },
  (error) => {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

// 添加响应拦截器
instance.interceptors.response.use(
  function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    const res = response.data
    // if (res.rspCode !== 0) {
    //     // 40001 token过期时间,要重新登录获取新的token
    //     if (res.rspCode == 40001) {
    //         // 跳转页面到登录页面
    //     }
    //     return Promise.reject(res.msg);
    // } else {
    return res
    // }
  },
  function (error) {
    // 4xx
    // 5xx
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    // 对403这个报错进行处理
    if (error.message.indexOf('403') != -1) {
      alert('权限检验失败')
    } else if (error.message.indexOf('500') != -1) {
      alert('服务器内部错误')
    }
    // ....

    return Promise.reject(error)
  }
)

export default instance
