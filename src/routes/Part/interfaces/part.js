/* @flow */

export type PartObject = {
  id: number,
  title: string
}

export type PartStateObject = {
  current: PartObject,
  fetching: boolean,
  saved: Array<PartObject>,
  parts: Array<PartObject>
}
