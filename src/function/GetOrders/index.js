import request from '../../helpers/axios'

const getOrders = (URL, token) => {
  return new Promise((resolve, reject) => {
    request
      .get(`${URL}`, {
        headers: {
          Authorization: 'Bearer ' + token
        }
      })
      .then(response => {
        resolve(response)
      })

      .catch(error => {
        reject(error)
      })
  })
}

export default getOrders
