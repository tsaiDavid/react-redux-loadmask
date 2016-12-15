import { connect } from 'react-redux'
import { Loadmask } from '../Loadmask'

function mapImmutableStateToProps ($$state) {
  return {
    showLoadmask: $$state.getIn(['loadmaskReducer', 'showLoadmask'])
  }
}

export default connect(mapImmutableStateToProps)(Loadmask)
