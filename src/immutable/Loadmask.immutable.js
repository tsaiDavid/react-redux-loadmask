import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'
import { TransitionMotion, spring, presets } from 'react-motion'
import loadmaskStyles from '../shared/styles'

export class Loadmask extends PureComponent {
  static propTypes = {
    // We prefix Immutable instances with `$$`
    $$showLoadmask: PropTypes.bool,
    bgColor: PropTypes.string,
    children: PropTypes.any
  }

  static defaultProps = {
    bgColor: '#424242'
  }

  willLeave = () => {
    return {
      opacity: spring(0, presets.gentle)
    }
  }

  getStyles = () => {
    const { $$showLoadmask } = this.props

    if ($$showLoadmask) {
      return [{
        key: 'child',
        data: {},
        style: { opacity: spring(1) }
      }]
    } else {
      return []
    }
  }

  render () {
    const { bgColor } = this.props

    return (
      <TransitionMotion
        styles={this.getStyles()}
        willLeave={this.willLeave}
      >
        {(items) => {
          return (
            <div style={{position: 'relative', zIndex: 2000000}}>
              {items.map(item => {
                return (
                  <div key={item.key} className='box' style={{opacity: item.style.opacity}}>
                    <div id='__react-redux-loadmask__' style={loadmaskStyles(bgColor)}>
                      <div>{this.props.children}</div>
                    </div>
                  </div>
                )
              })}
            </div>
          )
        }}
      </TransitionMotion>
    )
  }
}

function mapImmutableStateToProps ($$state) {
  return {
    $$showLoadmask: $$state.getIn(['loadmaskReducer', 'showLoadmask']).size > 0
  }
}

export default connect(mapImmutableStateToProps)(Loadmask)
