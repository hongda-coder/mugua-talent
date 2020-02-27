
const Key = 'tel';
//存
export function setTel(Key, value){
  return sessionStorage.setItem(Key, JSON.stringify(value))
}

//取
export function getTel(Key){
  return sessionStorage.getItem(Key)
}



