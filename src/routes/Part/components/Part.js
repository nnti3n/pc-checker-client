/* @flow */
import React from 'react'

import SearchBar from './SearchBar.js'
import SaveList from './SaveList.js'
import SavePart from './SavePart.js'
import Price from '../../../components/Price'
import type { PartObject } from '../interfaces/part'

type Props = {
  id: string,
  part: Array<PartObject>,
  saved: Array<PartObject>,
  list_saved: string,
  fetchPart: Function,
  saveCurrentPart: Function,
  sendParts: Function,
}

export const Part = (props: Props) => (
  <div className="Container">
    <SearchBar fetchAC={props.fetchAC} fetch={props.fetchPart} autoCompleteLoad={props.autoCompleteLoad} />
    <div className="Part">
      <div className="ComponentList col-xs-9">
        {props.part.length
          ? <table className="table table-hover text-left">
            <thead>
              <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Vendor</th>
                <th> </th>
              </tr>
            </thead>
            <tbody>
            {props.part.map(part =>
              <tr key={part.id}>
                <td>{part.title}</td>
                <td><Price value={part.price_today.price} /></td>
                <td><a href={part.link} target='_blank'>{part.vendor}</a></td>
                <td><SavePart
                  save={props.saveCurrentPart}
                  objectItem={{id: part.id, title: part.title, price: part.price_today.price}} />
                </td>
              </tr>)}
            </tbody>
          </table>
        : ' '}
      </div>
      {props.saved.length
        ? <SaveList
          sendParts={props.sendParts}
          saved={props.saved}
          list_saved={props.list_saved}
          total_price={props.total_price}
          removePart={props.removePart}
        />
        : null
      }
    </div>
  </div>
)

Part.propTypes = {
  id: React.PropTypes.string,
  part: React.PropTypes.array,
  saved: React.PropTypes.array,
  autoCompleteLoad: React.PropTypes.array,
  list_saved: React.PropTypes.string,
  fetchAC: React.PropTypes.func,
  fetchPart: React.PropTypes.func,
  saveCurrentPart: React.PropTypes.func,
  sendParts: React.PropTypes.func,
  removePart: React.PropTypes.func,
  total_price: React.PropTypes.number
}

export default Part
