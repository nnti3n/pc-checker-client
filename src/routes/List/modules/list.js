/* @flow */
// ------------------------------------

import type { PartObject, ListStateObject } from '../interfaces/list.js'

// Constants
// ------------------------------------
export const COUNTER_INCREMENT = 'COUNTER_INCREMENT'
export const REQUEST_LIST = 'REQUEST_LIST'
export const RECIEVE_LIST = 'RECIEVE_LIST'

// ------------------------------------
// Actions
// ------------------------------------

export function increment (value: number = 1): Action {
  return {
    type: COUNTER_INCREMENT,
    payload: value
  }
}

export function requestList (): Action {
  return {
    type: REQUEST_LIST
  }
}

export function recieveList (value): Action {
  console.log(value)
  return {
    type: RECIEVE_LIST,
    payload: value
  }
}

export const fetchList = (url): Function => {
  return (dispatch: Function): Promise => {
    dispatch(requestList())
    // Thunk
    return fetch(`pcchecker.herokuapp.com/build/${url}`)
      .then(res => res.json())
      .then(data => dispatch(recieveList(data.result.detail)))
      .catch(er => console.log(er))
  }
}

export const actions = {
  requestList,
  recieveList,
  fetchList
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const LIST_ACTION_HANDLERS = {
  [REQUEST_LIST]: (state: ListStateObject): ListStateObject => {
    return ({ ...state, fetching: true })
  },
  [RECIEVE_LIST]: (state: ListStateObject, action: {payload: Array<PartObject>}): ListStateObject => {
    return ({ ...state, list: action.payload, fetching: false })
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState: ListStateObject = {
  fetching: false,
  list: []
}

export default function listReducer (state: ListStateObject = initialState, action: Action): ListStateObject {
  const handler = LIST_ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
