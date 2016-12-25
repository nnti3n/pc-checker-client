import React from 'react'
import { Link } from 'react-router'
import Price from '../../../components/Price'

class SaveList extends React.Component {

  constructor (props) {
    super(props)
    this._onClick = this._onClick.bind(this)
  }
  _onClick () {
    this.props.sendParts(this.props.saved)
  }

  render () {
    return (
      <div className="col-xs-3">
        <h3>
          Saved component
        </h3>
        <ul>
          {this.props.saved.map(part =>
            <SaveItem
              key={part.id}
              part={part}
              removePart={this.props.removePart}
            />
          )}
        </ul>
        <button className="list-group-item u-margin-bottom--24">
          <Price value={this.props.total_price} />
        </button>
        <button className='btn btn-primary' onClick={this._onClick}>
          Save Components
        </button>
        {this.props.list_saved
          ? <div>
          URL to share
            <Link to={`/list/${this.props.list_saved}`}> {this.props.list_saved}</Link>
          </div>
          : null
        }
      </div>
    )
  }
}

class SaveItem extends React.Component {
  constructor () {
    super()
    this._remove = this._remove.bind(this)
  }
  _remove () {
    console.log(this.props)
    this.props.removePart(this.props.part)
  }
  render = () => (
    <li key={this.props.part.id}>
      <b>{this.props.part.num}</b>
      - {this.props.part.title}
      - <Price value={this.props.part.price} />
      - <span onClick={this._remove} className="glyphicon glyphicon-remove">
      </span>
    </li>
  )
}

SaveItem.propTypes = {
  removePart: React.PropTypes.func,
  part: React.PropTypes.object
}

SaveList.propTypes = {
  sendParts: React.PropTypes.func,
  saved: React.PropTypes.array,
  list_saved: React.PropTypes.string,
  total_price: React.PropTypes.number,
  removePart: React.PropTypes.func
}

export default SaveList
