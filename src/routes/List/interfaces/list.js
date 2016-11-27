/* @flow */

export type PartObject = {
  id: number,
  title: string
}

export type ListStateObject = {
  fetching: boolean,
  list: Array<PartObject>
}
