
import { SET_TOKEN, SET_TEL } from './mutation-types'

export default {
  SET_TOKEN (state, token) {
    state.token = token
  },
  SET_TEL (state, tel) {
    state.tel = tel
  },
  SAVE_SHARE(state, shareUrl) {
    state.shareUrl = shareUrl
  },
  SAVE_URL(state,url){
    state.url = url
  },
  // SAVE_CODE(state,code){
  //   state.code = code
  // },
  SAVE_USER(state,loginuser){
    state.loginuser = loginuser
  },
  SAVE_BANK(state,bankNumber){
    state.bankNumber = bankNumber
  },
  SAVE_TASK(state,checkTask){
    state.checkTask = checkTask
  },

}

