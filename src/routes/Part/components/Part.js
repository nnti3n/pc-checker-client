/* @flow */
import React from 'react'
import classes from './Part.scss'

import type { PartObject } from '../interfaces/part'

type Props = {
  part: Array<PartObject>,
  saved: Array<PartObject>,
  fetchPart: Function,
  saveCurrentPart: Function,
  sendParts: Function,
}

class SaveButton extends React.Component {
  handleClick (e) {
    e.preventDefault()
    console.log(this)
    let objectItem = this.props.objectItem
    // this.props.saveCurrentPart(this)
    this.props.prop.saveCurrentPart(objectItem)
  }

  render () {
    // This syntax ensures `this` is bound within handleClick
    return (
      <button className='btn btn-default badge' onClick={(e) => this.handleClick(e)}>
        Save
      </button>
    )
  }
}

let idGenerated = 0
export const Part = (props: Props) => (
  <div>
    <div>
      <table className="table table-hover text-left">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Vendor</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {props.part.length ? props.part.map(part =>
            <tr key={part.id}>
              <td>{part.title}</td>
              <td>{part.price}</td>
              <td><a href={part.link} target='_blank'>{part.vendor}</a></td>
              <td><SaveButton prop={props} objectItem={{id: part.id, title: part.title}} /></td>
            </tr>) : ' '}
        </tbody>
      </table>
      <button type="button" className='btn btn-default' onClick={props.fetchPart}>
        Load
      </button>
    </div>
    {props.saved.length
      ? <div className={classes.savedWisdoms}>
        <h3>
          Saved wisdoms
        </h3>
        <ul>
          {props.saved.map(part =>
            <li key={idGenerated++}>
              {part.id} - {part.title}
            </li>
          )}
        </ul>
        <button type="button" className='btn btn-primary' onClick={props.sendParts(props.saved)}>
          Save Parts
        </button>
      </div>
      : null
    }
  </div>
)

SaveButton.propTypes = {
  prop: React.PropTypes.object.isRequired,
  objectItem: React.PropTypes.object.isRequired
}

Part.propTypes = {
  part: React.PropTypes.array.isRequired,
  saved: React.PropTypes.array.isRequired,
  fetchPart: React.PropTypes.func.isRequired,
  saveCurrentPart: React.PropTypes.func.isRequired,
  sendParts: React.PropTypes.func.isRequired
}

export default Part
