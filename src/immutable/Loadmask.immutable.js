import React, { PureComponent, PropTypes, Children } from 'react'
import { List } from 'immutable'
import { connect } from 'react-redux'
import loadmaskStyles from '../shared/styles'

export class Loadmask extends PureComponent {
  static propTypes = {
    // We prefix Immutable instances with `$$`
    $$showLoadmask: PropTypes.instanceOf(List),
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
    const { bgColor, $$showLoadmask } = this.props

    if ($$showLoadmask.size === 0) return <noscript />

    return (
      <div id='__react-redux-loadmask__' style={loadmaskStyles(bgColor)}>
        {this.renderChildren()}
      </div>
    )
  }
}

function mapImmutableStateToProps ($$state) {
  return {
    $$showLoadmask: $$state.getIn(['loadmaskReducer', 'showLoadmask'])
  }
}

export default connect(mapImmutableStateToProps)(Loadmask)
