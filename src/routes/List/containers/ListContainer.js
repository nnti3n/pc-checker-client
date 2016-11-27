import { connect } from 'react-redux'
import { fetchList } from '../modules/list'

import List from '../components/List'

const mapActionCreators = {
  fetchList
}

const mapStateToProps = (state, ownProps) => ({
  id: ownProps.params.id,
  list: state.list || []
})

export default connect(mapStateToProps, mapActionCreators)(List)
