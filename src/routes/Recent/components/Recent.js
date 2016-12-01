/* @flow */
import React from 'react'
import { Link } from 'react-router'

class Recent extends React.Component {
  componentDidMount () {
    console.log(this.props)
    this.props.fetchRecent()
  }
  render () {
    if (!this.props.builds.length) {
      return null
    }
    return (
      <div className="ComponentList">
        {this.props.builds.length
          ? <table className="table table-hover text-left">
            <thead>
              <tr>
                <th>Encoded Url</th>
                <th>Date and Time</th>
              </tr>
            </thead>
            <tbody>
            {this.props.builds.map(build =>
              <tr key={build.id}>
                <td><Link to={`/list/${build.encodedurl}`}>{build.encodedurl}</Link></td>
                <td>{build.datetimeCreate}</td>
              </tr>)}
            </tbody>
          </table>
          : ' '}
      </div>
    )
  }
}

Recent.propTypes = {
  builds: React.PropTypes.array,
  fetchRecent: React.PropTypes.func
}

export default Recent
