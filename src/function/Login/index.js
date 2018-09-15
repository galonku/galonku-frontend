import request from '../../helpers/axios'

const Login = (URL, data) => {
  return new Promise((resolve,reject) => {
    request
      .post(URL, data)
      .then(response => {
        resolve(response)
        
      })
      .catch(error => {
        return('Wrong username or password')
        
      })
  })
}

export default Login