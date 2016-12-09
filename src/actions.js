import { SHOW_LOADMASK, HIDE_LOADMASK } from './actions'

export const showLoadmask = () => {
  return { type: SHOW_LOADMASK }
}

export const hideLoadmask = () => {
  return { type: HIDE_LOADMASK }
}

/**
 * User 'should' be able to rename these if needed
 */
export const loadmaskActions = { showLoadmask, hideLoadmask }
