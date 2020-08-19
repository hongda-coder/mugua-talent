const Key = 'tel';
//存
export function setTel (Key, value) {
  return localStorage.setItem(Key, value)
}
//取
export function getTel (Key) {
  return localStorage.getItem(Key)
}
const token = 'ssc-token'
//存
export function setToken (token, value) {
  return localStorage.setItem(token, value)
}
//取
export function getToken (token) {
  return localStorage.getItem(token)
}


