import Prefixer from 'inline-style-prefixer'

const prefixer = new Prefixer()

const loadmaskStyles = (bgColor) => {
  return prefixer({
    alignItems: 'center',
    backgroundColor: bgColor || '#424242',
    display: 'flex',
    height: '100%',
    justifyContent: 'center',
    position: 'fixed',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    width: '100%',
    zIndex: 99999
  })
}

export default loadmaskStyles
