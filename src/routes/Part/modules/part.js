/* @flow */

import type { PartObject, PartStateObject } from '../interfaces/part.js'

// ------------------------------------
// Constants
// ------------------------------------
export const REQUEST_PART = 'REQUEST_PART'
export const RECIEVE_PART = 'RECIEVE_PART'
export const SAVE_CURRENT_PART = 'SAVE_CURRENT_PART'
export const RECIEVE_LIST = 'RECIEVE_LIST'
export const REQUEST_SAVE_LIST = 'REQUEST_SAVE_LIST'
export const SAVE_LIST = 'SAVE_LIST'

// ------------------------------------
// Actions
// ------------------------------------

export function requestPart (): Action {
  return {
    type: REQUEST_PART
  }
}

let availableId = 0
export function recievePart (value): Action {
  return {
    type: RECIEVE_PART,
    payload: value
  }
}

export function requestSaveList (value): Action {
  return {
    type: REQUEST_SAVE_LIST,
    payload: value
  }
}

export function saveList (result): Action {
  return {
    type: SAVE_LIST,
    payload: result
  }
}

export function recieveList (id): Action {
  return {
    type: RECIEVE_LIST,
    payload: id
  }
}

export function saveCurrentPart (selected): Action {
  return {
    type: SAVE_CURRENT_PART,
    payload: selected
  }
}

export const sendParts = (value): Function => {
  let arrayData = []
  for (let attr of value) {
    arrayData.push(attr.id)
  }
  return (dispatch: Function): Promise => {
    let data = {items: arrayData}
    console.log('wrong-click', data)
    dispatch(requestSaveList())

    return fetch('http://pcchecker.herokuapp.com/createBuild', {
      method: 'POST',
      body: data
    })
      .then(res => res.json())
      .then(data => dispatch(saveList(data.result)))
  }
}

export const fetchPart = (): Function => {
  return (dispatch: Function): Promise => {
    dispatch(requestPart())

    return fetch('http://pcchecker.herokuapp.com/getProducts/Bàn Phím Steelseries /')
      .then(res => res.json())
      .then(data => dispatch(recievePart(data.result)))
  }
}

export const actions = {
  requestPart,
  recievePart,
  fetchPart,
  saveCurrentPart,
  requestSaveList,
  saveList,
  sendParts
}

// ------------------------------------
// Action Handlers
// ------------------------------------

const PART_ACTION_HANDLERS = {
  [REQUEST_PART]: (state: PartStateObject): PartStateObject => {
    return ({ ...state, fetching: true })
  },
  [RECIEVE_PART]: (state: PartStateObject, action: {payload: Array<PartObject>}): PartStateObject => {
    return ({ ...state, parts: action.payload, current: null, fetching: false })
  },
  [SAVE_CURRENT_PART]: (state: PartStateObject, action: {payload: PartObject}): PartStateObject => {
    return ({ ...state, current: action.payload, saved: state.saved.concat(action.payload) })
  },
  [REQUEST_SAVE_LIST]: (state: PartStateObject): PartStateObject => {
    return ({ ...state, sending: true })
  },
  [SAVE_LIST]: (state: PartStateObject, action: {payload: PartObject}): PartStateObject => {
    return ({ ...state, current: null, sending: false })
  }

}

// ------------------------------------
// Reducers
// ------------------------------------

const initialState: PartStateObject = { fetching: false, sending: false, current: null, parts: [], saved: [], list_saved: null }
export default function partReducer (state: PartStateObject = initialState, action: Action): PartStateObject {
  const handler = PART_ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}

