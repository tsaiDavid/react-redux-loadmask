import React, { Component, PropTypes } from 'react'
import Loadmask, { showLoadmask, hideLoadmask } from '../lib'
import { connect } from 'react-redux'

class App extends Component {
  static propTypes = {
    dispatch: PropTypes.func
  }

  show = () => {
    this.props.dispatch(showLoadmask())
  }

  render () {
    window.hide = () => {
      this.props.dispatch(hideLoadmask())
    }

    return (
      <div>
        <Loadmask bgColor='red'>
          <h2>Demo Loadmask</h2>
        </Loadmask>
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
