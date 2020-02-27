
import { SET_TOKEN, SET_TEL } from './mutation-types'

export default {
  SET_TOKEN (state, token) {
    state.token = token
  },
  SET_TEL (state, tel) {
    state.tel = tel
  }
}

