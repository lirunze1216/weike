import request from '../untils/request'

export function loginApi(data) {
  return request({
    url: 'http://127.0.0.1:3007/api/login',
    method: 'post',
    data,
  })
}
export function registerApi(data) {
  return request({
    url: 'http://127.0.0.1:3007/api/register',
    method: 'post',
    data,
  })
}
export function getUserInfoApi() {
  return request({
    url: 'http://127.0.0.1:3007/my/userinfo',
    method: 'get',
  
  })
}
