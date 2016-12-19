import { SHOW_LOADMASK, HIDE_LOADMASK } from '../shared/constants'
import { fromJS } from 'immutable'

const $$initialState = fromJS({
  showLoadmask: []
})

// NOTE: Instances of Immutable types are notated with the `$$`

export function loadmaskReducer ($$state = $$initialState, { type } = {}) {
  switch (type) {
    case (SHOW_LOADMASK):
      return $$state.merge({
        showLoadmask: $$state.get('showLoadmask').push(new Date())
      })

    case (HIDE_LOADMASK):
      return $$state.merge({
        showLoadmask: $$state.get('showLoadmask').shift()
      })

    default:
      return $$state
  }
}
