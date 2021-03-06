/* @flow */

import type { PartObject, PartStateObject } from '../interfaces/part.js'

// ------------------------------------
// Constants
// ------------------------------------
export const REQUEST_AC = 'REQUEST_AC'
export const RECIEVE_AC = 'RECIEVE_AC'
export const REQUEST_PART = 'REQUEST_PART'
export const RECIEVE_PART = 'RECIEVE_PART'
export const SAVE_CURRENT_PART = 'SAVE_CURRENT_PART'
export const REMOVE_PART = 'REMOVE_PART'
export const RECIEVE_LIST = 'RECIEVE_LIST'
export const REQUEST_SAVE_LIST = 'REQUEST_SAVE_LIST'
export const SAVE_LIST = 'SAVE_LIST'

// ------------------------------------
// Actions
// ------------------------------------

export function requestAC (): Action {
  return {
    type: REQUEST_AC
  }
}

export function recieveAC (value): Action {
  return {
    type: RECIEVE_AC,
    payload: value
  }
}

export function requestPart (): Action {
  return {
    type: REQUEST_PART
  }
}

export function recievePart (value): Action {
  return {
    type: RECIEVE_PART,
    payload: value
  }
}

export function requestSaveList (): Action {
  return {
    type: REQUEST_SAVE_LIST
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
  console.log(selected)
  return {
    type: SAVE_CURRENT_PART,
    payload: selected
  }
}

export function removePart (part): Action {
  console.log(part)
  return {
    type: REMOVE_PART,
    payload: part
  }
}

export const sendParts = (value): Function => {
  let arrayData = []
  for (let attr of value) {
    arrayData.push(attr.id)
  }
  return (dispatch: Function): Promise => {
    let send = JSON.stringify({items: arrayData})
    console.log('wrong-click', send)
    dispatch(requestSaveList())

    return fetch('http://pcchecker.herokuapp.com/createBuild', {
      method: 'POST',
      body: send
    })
      .then(res => res.json())
      .then(data => dispatch(saveList(data.result)))
  }
}

export const fetchPart = (name): Function => {
  return (dispatch: Function): Promise => {
    dispatch(requestPart())

    return fetch(`http://pcchecker.herokuapp.com/getProducts?query=${name}`)
      .then(res => res.json())
      .then(data => dispatch(recievePart(data.result)))
  }
}

export const fetchAC = (value): Function => {
  return (dispatch: Function): Promise => {
    dispatch(requestPart())

    return fetch(`http://pcchecker.herokuapp.com/autocomplete?querystring=${value}&limit=10&skip=0`)
      .then(res => res.json())
      .then(data => dispatch(recieveAC(data.result)))
  }
}

export const actions = {
  requestAC,
  recieveAC,
  requestPart,
  recievePart,
  fetchAC,
  fetchPart,
  saveCurrentPart,
  removePart,
  requestSaveList,
  saveList,
  sendParts
}

// ------------------------------------
// Action Handlers
// ------------------------------------

function handleSave (object, saved) {
  let _saved = saved.slice()
  if (!_saved.length) {
    _saved.push(object)
    _saved[_saved.length - 1].num = 1
  } else {
    let index = _saved.map(item => item.id).indexOf(object.id)
    if (index < 0) {
      object.num = 1
      _saved.push(object)
    } else {
      _saved[index].num++
    }
  }
  return _saved
}

function handleRemove (id, saved) {
  let _saved = saved.slice()
  let index = _saved.map(item => item.id).indexOf(id)
  if (index === -1) {
    console.log('error cant find id ', id)
  } else if (_saved[index].num > 1) {
    _saved[index].num --
  } else if (index !== -1 && _saved[index].num === 1) {
    _saved.splice(index, 1)
  }
  return _saved
}

const PART_ACTION_HANDLERS = {
  [REQUEST_AC]: (state: PartStateObject): PartStateObject => {
    return ({ ...state, autoCompleteLoad: [], autoComplete: true })
  },
  [RECIEVE_AC]: (state: PartStateObject, action: {payload: Array}): PartStateObject => {
    return ({ ...state, autoCompleteLoad: action.payload, autoComplete: false })
  },
  [REQUEST_PART]: (state: PartStateObject): PartStateObject => {
    return ({ ...state, parts: [], fetching: true })
  },
  [RECIEVE_PART]: (state: PartStateObject, action: {payload: Array<PartObject>}): PartStateObject => {
    return ({ ...state, parts: action.payload, current: {}, fetching: false })
  },
  [SAVE_CURRENT_PART]: (state: PartStateObject, action: {payload: PartObject}): PartStateObject => {
    return ({ ...state,
      current: action.payload,
      saved: handleSave(action.payload, state.saved),
      total_price: state.total_price + action.payload.price})
  },
  [REMOVE_PART]: (state: PartStateObject, action): PartStateObject => {
    return ({ ...state,
      saved: handleRemove(action.payload.id, state.saved),
      total_price: state.total_price - action.payload.price
    })
  },
  [REQUEST_SAVE_LIST]: (state: PartStateObject): PartStateObject => {
    return ({ ...state, sending: true })
  },
  [SAVE_LIST]: (state: PartStateObject, action: {payload: string}): PartStateObject => {
    return ({ ...state, list_saved: action.payload, sending: false })
  }
}

// ------------------------------------
// Reducers
// ------------------------------------

const initialState: PartStateObject = {
  autoComplete: false,
  fetching: false,
  sending: false,
  current: {},
  autoCompleteLoad: [],
  parts: [],
  saved: [],
  total_price: 0,
  list_saved: ''
}
export default function partReducer (state: PartStateObject = initialState, action: Action): PartStateObject {
  const handler = PART_ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
