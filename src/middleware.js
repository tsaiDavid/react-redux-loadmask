import { SHOW_LOADMASK, HIDE_LOADMASK } from './actions'

// export default function routerMiddleware(history) {
//   return () => next => action => {
//     if (action.type !== CALL_HISTORY_METHOD) {
//       return next(action)
//     }
//
//     const { payload: { method, args } } = action
//     history[method](...args)
//   }
// }

const loadmaskMiddleware = (store) => {
  return store => next => action => {
    if (action.type !== SHOW_LOADMASK || action.type !== HIDE_LOADMASK) {
      return next(action)
    }
    store.dispatch({ type: whatever })
  }
}

export default loadmaskMiddleware
