import { SHOW_LOADMASK, HIDE_LOADMASK } from '../shared/constants'
import { fromJS } from 'immutable'

const $$initialState = fromJS({
  showLoadmask: false
})

// NOTE: Instances of Immutable types are notated with the `$$`

export function loadmaskReducer ($$state = $$initialState, { type } = {}) {
  switch (type) {
    case (SHOW_LOADMASK):
      return $$state.set('showLoadmask', true)

    case (HIDE_LOADMASK):
      return $$state.set('showLoadmask', false)

    default:
      return $$state
  }
}
