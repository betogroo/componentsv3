import * as types from './mutation_types'

export default {
  [types.SET_LOGGED_USER](state, payload) {
    if (payload) {
      const { displayName, email, uid, photoURL, refreshToken } = payload
      state.loggedUser = { uid, displayName, email, photoURL, refreshToken }
    } else {
      state.loggedUser = null
    }

    // state.loggedUser = payload
  }
}
