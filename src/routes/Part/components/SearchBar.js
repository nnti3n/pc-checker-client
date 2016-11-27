/* @flow */
import React from 'react'

class SearchBar extends React.Component {

  constructor (props) {
    super(props)
    this._onBlur = this._onBlur.bind(this)
    this._onClick = this._onClick.bind(this)
    this.state = {typed: ''}
  }

  _onBlur (event) {
    if (event.target.value.length) {
      this.setState({typed: event.target.value})
      this.props.fetch(event.target.value)
    }
  }

  _onClick (event) {
    event.preventDefault()
    if (this.state.typed.length) {
      this.props.fetch(this.state.typed)
    }
  }

  render () {
    return (
      <div className="Search form-group u-text-align--left u-margin-bottom--24">
        <label>Component Name:</label>
        <input type="text" onBlur={this._onBlur} />
        <button type="submit" className='btn btn-primary' onClick={this._onClick}>
          Search
        </button>
      </div>
    )
  }

}

SearchBar.propTypes = {
  fetch: React.PropTypes.func
}

export default SearchBar
