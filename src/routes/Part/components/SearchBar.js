/* @flow */
import React from 'react'

class SearchBar extends React.Component {

  constructor (props) {
    super(props)
    this._onChange = this._onChange.bind(this)
    this._onClick = this._onClick.bind(this)
    this._onEnter = this._onEnter.bind(this)
    this.state = {typed: ''}
  }

  _onChange (event) {
    if (event.target.value.length) {
      this.setState({typed: event.target.value})
    }
  }

  _onEnter (event) {
    if (event.charCode === 13) {
      this.props.fetch(this.state.typed)
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
        <div id="custom-search-input">
          <div className="input-group col-md-12">
            <input type="text" className="form-control input-lg" placeholder="Component Name"
              onChange={this._onChange} onKeyPress={this._onEnter} />
            <span className="input-group-btn">
              <button className="btn btn-info btn-lg" type="submit" onClick={this._onClick}>
                <i className="glyphicon glyphicon-search"></i>
              </button>
            </span>
          </div>
        </div>
      </div>
    )
  }

}

SearchBar.propTypes = {
  fetch: React.PropTypes.func
}

export default SearchBar
