const Key = 'tel';
//存
export function setTel (Key, value) {
  return sessionStorage.setItem(Key, value)
}

//取
export function getTel (Key) {
  return sessionStorage.getItem(Key)
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

// 图片转成64
export function getBase64 (file) {
  let reader = new FileReader();
  reader.readAsDataURL(file.raw);
  reader.onload = function () {
    var imageUrl = reader.result; //此处便是得到的64位编码格式
  }
}

