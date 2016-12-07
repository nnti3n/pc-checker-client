import React from 'react'

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
      <button type="button" className='btn btn-primary'
        onClick={this._onClick}>
        Save Components
      </button>
    )
  }
}

SaveList.propsTypes = {
  send: React.PropTypes.func,
  saved_item: React.PropTypes.array
}

export default SaveList
