import { removeLocalstorage } from '../Localstorage'

const logout = () => {
  removeLocalstorage('Account')
  removeLocalstorage('Order')
}

export default logout