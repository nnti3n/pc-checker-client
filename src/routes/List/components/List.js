/* @flow */
import React from 'react'
import Price from '../../../components/Price'

class List extends React.Component {
  constructor () {
    super()
    console.log('hello')
  }
  componentDidMount () {
    console.log('mounted', this.props)
    this.props.fetchList(this.props.id)
  }
  render () {
    if (!this.props.list.list.length) {
      return null
    }
    return (
      <div className="List">
        <h4>Build</h4>
        <table className="table table-hover text-left">
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Vendor</th>
            </tr>
          </thead>
          <tbody>
          {this.props.list.list.length ? this.props.list.list.map(item =>
            <tr key={item.id}>
              <td>{item.title}</td>
              <td><Price value={item.price_today.price} /></td>
              <td><a href={item.link} target='_blank'>{item.vendor}</a></td>
            </tr>) : ' '}
          </tbody>
        </table>
      </div>
    )
  }
}

List.propTypes = {
  list: React.PropTypes.shape({
    fetching: React.PropTypes.bool.isRequired,
    list: React.PropTypes.array
  }),
  id: React.PropTypes.string.isRequired,
  fetchList: React.PropTypes.func.isRequired
}

export default List
