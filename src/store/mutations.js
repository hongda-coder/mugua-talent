
import { SET_TOKEN, SET_TEL } from './mutation-types'

export default {
  SET_TOKEN (state, token) {
    state.token = token
  },
  SET_TEL (state, tel) {
    state.tel = tel
  },
  SAVE_URL(state,e){
    state.url = e
  },
  SAVE_USER(state,e){
    state.loginuser = e
  },
  SAVE_BANK(state,e){
    state.bankNumber = e
  }
}

