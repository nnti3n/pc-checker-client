/* @flow */
import React from 'react'
import { Link } from 'react-router'

import SearchBar from './SearchBar.js'
import SaveList from './SaveList.js'
import SavePart from './SavePart.js'
import Price from '../../../components/Price'
import type { PartObject } from '../interfaces/part'

type Props = {
  id: string,
  part: Array<PartObject>,
  saved: Array<PartObject>,
  list_saved: object,
  fetchPart: Function,
  saveCurrentPart: Function,
  sendParts: Function,
}

let idGenerated = 0
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
                <td><SavePart save={props.saveCurrentPart} objectItem={{id: part.id, title: part.title}} /></td>
              </tr>)}
            </tbody>
          </table>
        : ' '}
      </div>
      {props.saved.length
        ? <div className="col-xs-3">
          <h3>
            Saved component
          </h3>
          <ul>
            {props.saved.map(part =>
              <li key={idGenerated++}>
                {part.title}
              </li>
            )}
          </ul>
          <SaveList send={props.sendParts} saved_item={props.saved} />
        </div>
        : null
      }
      {props.list_saved
        ? <div>URL to share <Link to={`/list/${props.list_saved.result}`}>{props.list_saved.result}</Link></div>
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
  list_saved: React.PropTypes.object,
  fetchAC: React.PropTypes.func,
  fetchPart: React.PropTypes.func,
  saveCurrentPart: React.PropTypes.func,
  sendParts: React.PropTypes.func
}

export default Part
