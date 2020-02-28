
const Key = 'tel';
//存
export function setTel(Key, value){
  return sessionStorage.setItem(Key, value)
}

//取
export function getTel(Key){
  return sessionStorage.getItem(Key)
}



