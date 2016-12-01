/* @flow */

export type RecentObject = {
  id: string,
  encodeurl: string,
  datetimeCreate: string
}

export type RecentStateObject = {
  fetching: boolean,
  builds: Array<RecentObject>
}
