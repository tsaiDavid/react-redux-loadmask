import { SHOW_LOADMASK, HIDE_LOADMASK } from './shared/constants'

const initialState = {
  showLoadmask: false
}

export function loadmaskReducer (state = initialState, { type, payload } = {}) {
  switch (type) {
    case (SHOW_LOADMASK):
      return { ...state, showLoadmask: true }

    case (HIDE_LOADMASK):
      return { ...state, showLoadmask: false }

    default:
      return state
  }
}
