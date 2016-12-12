import React, { Component, PropTypes } from 'react'

export default class Loadmask extends Component {
  static propTypes = {
    // style: PropTypes.object
  }

  render () {
    return (
      <div id='__react-redux-loadmask__' style={loadmaskStyles} />
    )
  }
}

const loadmaskStyles = {
  position: 'absolute',
  zIndex: 99999,
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0,0,0,0.85)'
}
