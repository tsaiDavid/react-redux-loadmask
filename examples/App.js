import React, { Component, PropTypes } from 'react'
import Loadmask, { showLoadmask, hideLoadmask } from '../lib'
import { connect } from 'react-redux'

class App extends Component {
  static propTypes = {
    dispatch: PropTypes.func
  }

  show = () => {
    this.props.dispatch(showLoadmask())
    // Simulate a 2500ms load
    setTimeout(this.hide, 2500)
  }

  hide = () => {
    this.props.dispatch(hideLoadmask())
  }

  render () {
    return (
      <div>
        <Loadmask bgColor='lightblue'>
          <h2>Demo Loadmask - Content Loading</h2>
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
