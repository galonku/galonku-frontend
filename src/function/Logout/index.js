import { removeLocalstorage } from '../Localstorage'

const logout = () => {
  removeLocalstorage('Account')
}

export default logout