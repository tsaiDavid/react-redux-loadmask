const loadmask = (bgColor) => {
  return {
    position: 'fixed',
    zIndex: 99999,
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    width: '100%',
    height: '100%',
    backgroundColor: bgColor || 'rgba(0,0,0,0.85)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
}

export default { loadmask }
