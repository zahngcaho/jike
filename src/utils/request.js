// axios的封装处理
import axios from 'axios'
import { getToken } from '@/utils/token'
import router from '@/router'
import { removeToken } from '@/utils/token'

// 1.根域名配置 
// 2.timeout config
// 3.request/response interceptor

const request = axios.create({
  baseURL: 'https://geek.itheima.net/v1_0',
  timeout: 5000
})

// 添加请求拦截器
request.interceptors.request.use((config) => {
  // 在config中添加token
  // 1.获取token
  const token = getToken()
  if(token){
    config.headers.Authorization = `Bearer ${token}`
  }
  // 2.按照后端的要求拼接成token
  return config
}, (error) => {
  return Promise.reject(error)
})

// 添加响应拦截器
request.interceptors.response.use((response) => {
  // 2xx 范围内的状态码都会触发该函数。
  // 对响应数据做点什么
  return response.data
}, (error) => {
  // 超出 2xx 范围的状态码都会触发该函数。
  // 对响应错误做点什么
  // 监控401 token失效
  // console.dir(error)
  if(error.response.status === 401){
    removeToken()
    router.navigate('/login')
    window.location.reload()
  }
  return Promise.reject(error)
})

export default request