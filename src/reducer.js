import { SHOW_LOADMASK, HIDE_LOADMASK } from './shared/constants'

const initialState = {
  showLoadmask: []
}

export function loadmaskReducer (state = initialState, { type, payload } = {}) {
  const { showLoadmask } = state
  switch (type) {
    case (SHOW_LOADMASK):
      return { ...state, showLoadmask: [...showLoadmask, new Date()] }

    case (HIDE_LOADMASK):
      return { ...state, showLoadmask: [...showLoadmask.slice(1)] }

    default:
      return state
  }
}
