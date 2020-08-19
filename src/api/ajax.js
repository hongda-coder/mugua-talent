import axios from 'axios'
import qs from 'qs'
import { getToken } from './cookie'

const ajax = axios.create({
  baseURL:'https://api.jobyes.com/api/ssc/',
  timeout: 5000,
  // withCredentials: true,  // 允许携带cookie 'http://api.jobyes.com/api/  http://192.168.0.182:8003/api/'
})

//  添加请求拦截器
ajax.interceptors.request.use(
  config => {
    if (getToken())
    config.headers['token'] = getToken()
    config.data = qs.stringify(config.data)
    return config
  },
  error => {
    console.log(error) 
    return Promise.reject(error)
  }
)

ajax.interceptors.response.use(
  response => {
    const res = response
    if (res.status != 200) {  //请求不正确
      return Promise.reject(new Error(res.status))  //改变promise状态
    } else {
      return res
    }
  },
  error => {
    console.log('err' + error) 

    return Promise.reject(error)
  }
)
export default ajax  
