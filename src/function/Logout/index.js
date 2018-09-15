import { removeLocalstorage } from '../Localstorage'

const logout = () => {
  removeLocalstorage('Account')
  removeLocalstorage('Order')

  window.location.reload()
}

export default logout