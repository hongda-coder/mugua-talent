import { setToken } from '@/api/cookie'
import { setTel }  from '@/util'
import {login} from '@/api/serve'

export default  {
  Login ({commit},user) {
    const { loginuser, pwd } = user
    return new Promise((resolve,reject) => {
      login({loginuser,pwd}).then(response => {
        console.log(reject)
        commit('SET_TOKEN', response.data.token); //mutations
        setToken(response.data.token); //值保存到cookie

        commit('SET_TEL', response.data.tel); //mutations
        setTel('tel', response.data.tel); //值保存到sessionStorage
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  },
}