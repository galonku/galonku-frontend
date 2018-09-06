import request from '../../helpers/axios'

const verifyToken = (URL, token) => {
  return new Promise((resolve, reject) => {
    request
      .get(`${URL}/verifytoken`, {
        headers: {
          Authorization: 'Bearer ' + token
        }
      })
      .then(response => resolve(response.data.message))
      .catch(error => reject(error))
  })
}

export default verifyToken