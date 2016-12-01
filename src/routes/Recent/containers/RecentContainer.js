import { connect } from 'react-redux'
import { fetchRecent } from '../modules/recent'

import Recent from '../components/Recent'

const mapActionCreators = {
  fetchRecent
}

const mapStateToProps = (state, ownProps) => ({
  builds: state.recent.builds || []
})

export default connect(mapStateToProps, mapActionCreators)(Recent)
