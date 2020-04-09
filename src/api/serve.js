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

// 完善信息
export function perInfo2(data){  
  return ajax({
    url:'user/UpdateCertificateimage',
    method:'post',
    data
  })
}


// 9、推荐信息
export function personEarnings(data){  
  return ajax({
    url:'zpjob/synthesize',
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

// 分享
export function shareJob(data){  
  return ajax({
    url:'zpjob/getShareUrl',
    method:'post',
    data
  })
}


// 解绑银行卡
export function unbindBank(data){  
  return ajax({
    url:'account/Bank_Del',
    method:'post',
    data
  })
} 

// 收益管理
export function earningsManage(data){  
  return ajax({
    url:'account/DateiCount',
    method:'post',
    data
  })
} 

// 提现金额
export function withdrawMoney(data){  
  return ajax({
    url:'account/Bank_datei_Add',
    method:'post',
    data
  })
} 

// 提现记录
export function withdrawRecord(data){  
  return ajax({
    url:'account/Bank_datei_Select',
    method:'post',
    data
  })
} 

// 任务佣金
export function taskMoney(data){  
  return ajax({
    url:'account/Transactionflow',
    method:'post',
    data
  })
} 

// 分销佣金
export function allotMoney(data){  
  return ajax({
    url:'account/Retail',
    method:'post',
    data
  })
} 

// 上级
export function superior(data){  
  return ajax({
    url:'user/user_equal',
    method:'post',
    data
  })
} 

// 下级
export function subordinate(data){  
  return ajax({
    url:'user/user_subordinate',
    method:'post',
    data
  })
} 

// 领任务
export function getTask(data){  
  return ajax({
    url:'zpjob/Task_Add',
    method:'post',
    data
  })
} 

// 新需求
export function oldUser(data){  
  return ajax({
      url:'user/perfect1',
      method:'post',
       data
  })
}

// 报名列表
export function applyList(data){  
  return ajax({
      url:'zpjob/UserShareList',
      method:'post',
       data
  })
}

// 职位详情
export function jobDetails(data){  
  return ajax({
      url:'zpjob/JobSelect',
      method:'post',
       data
  })
}


// 上传图片
export function uploadImg(data){  
  return ajax({
      url:'user/PostUpload1',
      method:'post',
      data
  })
}


