import React, { Component, PropTypes } from 'react'
import Loadmask, { showLoadmask } from '../lib'
import { connect } from 'react-redux'

class App extends Component {
  static propTypes = {
    dispatch: PropTypes.func
  }

  show = () => {
    this.props.dispatch(showLoadmask())
  }

  render () {
    return (
      <div>
        <Loadmask />
        <button onClick={this.show}>
          Show Mask
        </button>
      </div>
    )
  }
}

function mapDispatchToProps (state) {
  return {
    showLoadmask: state.loadmaskReducer.showLoadmask
  }
}

export default connect(mapDispatchToProps)(App)
