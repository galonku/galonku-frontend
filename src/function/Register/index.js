import request from '../../helpers/axios'

const Register = (URL, data) => {
  return new Promise((resolve, reject) => {
    request
      .post(URL, data)
      .then(response => {
        resolve(response)
      })
      .catch(error => {
        reject(error.message)
      })
  })
}

export default Register