import request from '../../helpers/axios'
import { storeLocalstorage } from '../Localstorage'

const Login = (URL, data) => {
  return new Promise((resolve, reject) => {
    request
      .post(URL, data)
      .then(response => {
        console.log(response.data.message)

        const data = {
          id: response.data.id,
          username: response.data.username,
          token: response.data.token
        }

        storeLocalstorage(data)
        resolve()
      })
      .catch(error => {
        console.log(error.response.data.message)
        reject(error)
      })
  })

}

export default Login