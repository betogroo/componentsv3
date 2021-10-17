import * as types from './mutation_types'

export default {
  [types.SET_CONTEXTUAL_APP_BAR](state, payload) {
    state.contextualAppBar = payload
  }
}
