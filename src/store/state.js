// import { getToken }  from '@/api/cookie'
import { getTel,getToken}  from '@/util'
export default {
  token: getToken(),
  address: 'http://192.168.0.182',
  tel: getTel(),
  url:''
}

