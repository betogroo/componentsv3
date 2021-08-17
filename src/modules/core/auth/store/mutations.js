import * as types from './mutation_types'

export default {
  [types.SET_LOGGED_USER](state, payload) {
    state.loggedUser = payload
  }
}
