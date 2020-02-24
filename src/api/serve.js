import ajax from './ajax'

// 1、注册
export function register(data){  
  return ajax({
      url:'login',
      method:'post',
      data
  })
}

// 2、短信
export function shortCode(data){  
  return ajax({
      url:'user/check',
      method:'post',
      data
  })
}

// 2、登录请求
export function login(data){  
  return ajax({
      url:'login',
      method:'post',
      data
  })
}