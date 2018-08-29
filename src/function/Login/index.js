import request from '../../helpers/axios'
import { storeToken } from '../Token'

const Login = (URL, data) => {

  request
    .post(URL, data)
    .then(response => {
      console.log(response.data.message)
      storeToken(response.data.token)
    })
    .catch(error => console.log(error.response.data.message))
}

export default Login