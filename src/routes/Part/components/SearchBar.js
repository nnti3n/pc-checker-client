/* @flow */
import React from 'react'

class SearchBar extends React.Component {

  constructor (props) {
    super(props)
    this._onChange = this._onChange.bind(this)
    this._onClick = this._onClick.bind(this)
    this._onEnter = this._onEnter.bind(this)
    this.state = {typed: '', autoCompleteLoad: []}
  }

  _onChange (event) {
    if (event.target.value && event.target.value.length <= 2) {
      this.setState({typed: event.target.value, autoCompleteLoad: []})
    } else if (event.target.value && event.target.value.length > 2) {
      this.setState({typed: event.target.value})
      this.props.fetchAC(event.target.value).then(() => this.setState({
        autoCompleteLoad: this.props.autoCompleteLoad
      }))
    }
  }

  _onEnter (event) {
    if (event.charCode === 13) {
      this.props.fetch(this.state.typed)
      this.setState({autoCompleteLoad: []})
    }
  }

  _onClick (event) {
    event.preventDefault()
    if (this.state.typed.length) {
      this.props.fetch(this.state.typed)
      this.setState({autoCompleteLoad: []})
    }
  }

  render () {
    return (
      <div className="Search form-group u-text-align--left u-margin-bottom--24">
        <div id="custom-search-input">
          <div className="input-group col-md-12">
            <input type="text" className="form-control input-md" placeholder="Component Name"
              list="suggestion" onChange={this._onChange} onKeyPress={this._onEnter} />
            <datalist id="suggestion">
              {this.state.autoCompleteLoad.length
                ? this.state.autoCompleteLoad.map(
                item => <option key={item.id} value={item.title.replace(/\t|\n/g, '')} > </option>
              ) : null}
            </datalist>
            <span className="input-group-btn">
              <button className="btn btn-info btn-lg" type="submit" onClick={this._onClick}>
                <i className="glyphicon glyphicon-search"> </i>
              </button>
            </span>
          </div>
        </div>
      </div>
    )
  }

}

SearchBar.propTypes = {
  fetch: React.PropTypes.func,
  fetchAC: React.PropTypes.func,
  autoCompleteLoad: React.PropTypes.array
}

export default SearchBar
