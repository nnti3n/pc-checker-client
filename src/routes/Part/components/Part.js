/* @flow */
import React from 'react'
import { Link } from 'react-router'
import classes from './Part.scss'

import SearchBar from './SearchBar.js'
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

class SavePart extends React.Component {

  constructor (props) {
    super(props)
    this.cb = this.cb.bind(this)
  }

  cb () {
    this.props.save(this.props.objectItem)
  }

  render () {
    return (
      <button className='btn btn-default badge' onClick={this.cb}>
        Save
      </button>
    )
  }
}

SavePart.propTypes = {
  save: React.PropTypes.func.isRequired,
  objectItem: React.PropTypes.object.isRequired
}

class SaveList extends React.Component {

  constructor (props) {
    super(props)
    this._onClick = this._onClick.bind(this)
  }
  _onClick () {
    this.props.send(this.props.saved_item)
  }
  render () {
    return (
      <button type="button" className='btn btn-primary' onClick={this._onClick}>
        Save Components
      </button>
    )
  }
}

SaveList.propsTypes = {
  send: React.PropTypes.func,
  saved_item: React.PropTypes.array
}

let idGenerated = 0
export const Part = (props: Props) => (
  <div className="Part">
    <SearchBar fetchAC={props.fetchAC} fetch={props.fetchPart} autoCompleteLoad={props.autoCompleteLoad} />
    <div className="ComponentList">
      {props.part.length
        ? <table className="table table-hover text-left">
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Vendor</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
          {props.part.map(part =>
            <tr key={part.id}>
              <td>{part.title}</td>
              <td>{part.price}</td>
              <td><a href={part.link} target='_blank'>{part.vendor}</a></td>
              <td><SavePart save={props.saveCurrentPart} objectItem={{id: part.id, title: part.title}} /></td>
            </tr>)}
          </tbody>
        </table>
      : ' '}
    </div>
    {props.saved.length
      ? <div className={classes.savedWisdoms}>
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
