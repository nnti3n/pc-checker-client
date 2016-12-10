import React from 'react'
import { Link } from 'react-router'
import Price from '../../../components/Price'

let idGenerated = 0
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
            <li key={idGenerated++}>
              {part.title} - <Price value={part.price} />
            </li>
          )}
        </ul>
        <button type="button" className="list-group-item">
          <Price value={this.props.total_price} />
        </button>
        <button type="button" className='btn btn-primary' onClick={this._onClick}>
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

SaveList.propTypes = {
  sendParts: React.PropTypes.func,
  saved: React.PropTypes.array,
  list_saved: React.PropTypes.string,
  total_price: React.PropTypes.number
}

export default SaveList
