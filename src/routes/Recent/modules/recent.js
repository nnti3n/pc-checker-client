/* @flow */
// ------------------------------------
import type { RecentObject, RecentStateObject } from '../interfaces/recent.js'

// Constants
// ------------------------------------
export const COUNTER_INCREMENT = 'COUNTER_INCREMENT'
export const REQUEST_RECENT = 'REQUEST_RECENT'
export const RECEIVE_RECENT = 'RECEIVE_RECENT'

// ------------------------------------
// Actions
// ------------------------------------

export function requestRecent (): Action {
  return {
    type: REQUEST_RECENT
  }
}

export function receiveRecent (value): Action {
  console.log(value)
  return {
    type: RECEIVE_RECENT,
    payload: value
  }
}

export const fetchRecent = (): Function => {
  return (dispatch: Function): Promise => {
    dispatch(requestRecent())
    // Thunk
    return fetch('http://pcchecker.herokuapp.com/getBuildRecent?limit=20')
      .then(res => res.json())
      .then(data => dispatch(receiveRecent(data.result)))
      .catch(er => console.log(er))
  }
}

export const actions = {
  requestRecent,
  receiveRecent,
  fetchRecent
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const RECENT_ACTION_HANDLERS = {
  [REQUEST_RECENT]: (state: RecentStateObject): RecentStateObject => {
    return ({ ...state, fetching: true })
  },
  [RECEIVE_RECENT]: (state: RecentStateObject, action: {payload: Array<RecentObject>}): RecentStateObject => {
    return ({ ...state, builds: action.payload, fetching: false })
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState: RecentStateObject = {
  fetching: false,
  builds: []
}

export default function recentReducer (state: RecentStateObject = initialState, action: Action): RecentStateObject {
  const handler = RECENT_ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
