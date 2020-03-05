import axios from 'axios'
import { Message } from 'element-ui'
import { getToken } from './cookie'

const ajax = axios.create({
  baseURL:'http://192.168.0.182:8002/api/',
  // http://192.168.0.182/api/
  withCredentials: true,  // 允许携带cookie
})

//添加请求拦截器
ajax.interceptors.request.use(
  config => {
    config.headers['token'] = getToken()
    return config
  },
  error => {
    console.log(error) 
    return Promise.reject(error)
  }
)

// 添加响应拦截器
ajax.interceptors.response.use(
  response => {
    const res = response.data
    if (res.status !== 200) {  //请求不正确
      Message({
        message: res.message || '服务器错误',
        type: 'error',
        duration: 2000
      })
      return Promise.reject(new Error(res.status || 'Error'))  //改变promise状态
    } else {
      return res
    }
  },
  error => {
    console.log('err' + error) 
    Message({
      message: error.message,
      type: 'error',
      duration: 2000
    })
    return Promise.reject(error)
  }
)

export default ajax   