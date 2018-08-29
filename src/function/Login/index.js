import request from '../../helpers/axios'
import { storeToken } from '../Token'

const Login = (URL, data) => {
  return new Promise((resolve, reject) => {
    request
      .post(URL, data)
      .then(response => {
        console.log(response.data.message)
        storeToken(response.data.token)
        resolve()
      })
      .catch(error => {
        console.log(error.response.data.message)
        reject(error)
      })
  })

}

export default Login