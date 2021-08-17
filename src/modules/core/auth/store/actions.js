import * as types from './mutation_types'

export const setLoggedUser = ({ commit }, payload) => {
  commit(types.SET_LOGGED_USER, payload)
}
