// import { getToken }  from '@/api/cookie'
import { getTel,getToken}  from '@/util'
export default {
  token: getToken(),
  address: 'http://192.168.0.182',
  tel: getTel(),
  url:'', 
  shareUrl: '',
  loginuser:'', // 用户名
  bankNumber: '', // 银行显示
  checkTask: false,  // 任务以及推荐的查看
  isShow: false,
  jobId: '' // 职位id
}

