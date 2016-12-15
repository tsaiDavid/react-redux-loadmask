import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'
import styles from './shared/styles'

export class Loadmask extends PureComponent {
  static propTypes = {
    showLoadmask: PropTypes.bool,
    bgColor: PropTypes.string,
    /* eslint-disable */
    spinner: PropTypes.shape({
      size: PropTypes.number,
      color: PropTypes.string,
      name: PropTypes.oneOf([
        'ChasingDots',
        'Circle',
        'CubeGrid',
        'DoubleBounce',
        'FadingCircle',
        'FoldingCube',
        'Pulse',
        'RotatingPlane',
        'ThreeBounce',
        'WanderingCubes',
        'Wave'
      ]).isRequired
    })
    /* eslint-enable */
  }

  static defaultProps = {
    bgColor: 'rgba(0,0,0,0.85)'
  }

  renderSpinner = () => {
    const { spinner } = this.props

    if (spinner) {
      const LoadmaskSpinner = require('better-react-spinkit')[spinner.name]
      return (
        <LoadmaskSpinner
          color={spinner.color || 'white'}
          size={spinner.size || 50}
        />
      )
    }
  }

  render () {
    const { showLoadmask, bgColor } = this.props

    if (!showLoadmask) return <noscript />

    return (
      <div id='__react-redux-loadmask__' style={styles.loadmask(bgColor)}>
        {this.renderSpinner()}
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    showLoadmask: state.loadmaskReducer.showLoadmask
  }
}

export default connect(mapStateToProps)(Loadmask)
