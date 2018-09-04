import { removeLocalstorage } from '../Localstorage'

const logout = () => {
  removeLocalstorage('Account')
  window.location.reload()
}

export default logout