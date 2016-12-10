import React from 'react'

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

export default SavePart
