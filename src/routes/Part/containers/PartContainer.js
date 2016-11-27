/* @flow */
import { connect } from 'react-redux'
import { fetchPart, saveCurrentPart, sendParts} from '../modules/part'

import Part from '../components/Part'

import type { PartObject } from '../interfaces/part'

const mapActionCreators: {fetchPart: Function, saveCurrentPart: Function, sendParts: Function} = {
  fetchPart,
  saveCurrentPart,
  sendParts
}

const mapStateToProps = function (state, ownProps): { part: Array<PartObject>, saved: Array<PartObject> } {
  return {
    part: state.part.parts,
    saved: state.part.saved,
    list_saved: state.part.list_saved
  }
}

export default connect(mapStateToProps, mapActionCreators)(Part)
