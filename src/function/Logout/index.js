import { removeLocalstorage } from '../Localstorage'

const logout = () => {
  removeLocalstorage()
}

export default logout