import ajax from './ajax'

// 1、注册
export function register(data){  
  return ajax({
      url:'user/register',
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

// 3、登录请求
export function login(data){  
  return ajax({
      url:'user/login',
      method:'post',
      data
  })
}

// 4、完善信息
export function perInfo(data){  
  return ajax({
      url:'user/perfect',
      method:'post',
      data
  })
}

// 5、最新悬赏任务
export function jobList(data){  
  return ajax({
      url:'zpjob/JobList',
      method:'post',
      data
  })
}

// 6、最新分享情况
export function shareList(data){  
  return ajax({
      url:'zpjob/FxUserDeliverResumeList',
      method:'post',
      data
  })
}


// 7、最新竞聘情况
export function competeList(data){  
  return ajax({
      url:'zpjob/FXSsc_User_TaskList',
      method:'post',
      data
  })
}


// 8、个人信息
export function personInfo(data){  
  return ajax({
    url:'user/UserData',
    method:'post',
    data
  })
}

// 9、个人信息
export function personEarnings(data){  
  return ajax({
    url:'zpjob/synthesize',
    method:'post',
    data
  })
}

// 上传图片

export function uploadImg(data){  
  return ajax({
    url:'user/PostUpload',
    method:'post',
    data
  })
}

// 修改电话号码
export function newPhone(data){  
  return ajax({
    url:'Account/UpdateTel',
    method:'post',
    data
  })
}

// 修改密码
export function newPwd(data){  
  return ajax({
    url:'Account/UpdatePwd',
    method:'post',
    data
  })
}

// 绑定银行卡
export function bindBank(data){  
  return ajax({
    url:'account/Bank_Add',
    method:'post',
    data
  })
}

// 银行卡信息
export function bankInfo(data){  
  return ajax({
    url:'account/Bank_Select',
    method:'post',
    data
  })
}

// 上传
export function shareJob(data){  
  return ajax({
    url:'zpjob/getShareUrl',
    method:'post',
    data
  })
}