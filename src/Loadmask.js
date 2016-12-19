import React, { PureComponent, PropTypes, Children } from 'react'
import { connect } from 'react-redux'
import styles from './shared/styles'

export class Loadmask extends PureComponent {
  static propTypes = {
    showLoadmask: PropTypes.array,
    bgColor: PropTypes.string,
    children: PropTypes.element
  }

  static defaultProps = {
    bgColor: '#424242'
  }

  renderChildren = () => {
    const { children } = this.props
    if (!children) return <noscript />
    return Children.only(children)
  }

  render () {
    const { bgColor, showLoadmask } = this.props

    if (showLoadmask.length === 0) return <noscript />

    return (
      <div id='__react-redux-loadmask__' style={styles.loadmask(bgColor)}>
        {this.renderChildren()}
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
