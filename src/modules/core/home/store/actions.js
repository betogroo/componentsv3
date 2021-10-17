import * as types from './mutation_types'

export const setContextualAppBar = ({ commit }, payload) => {
  commit(types.SET_CONTEXTUAL_APP_BAR, payload)
}
