import request from '../../helpers/axios'

const createOrder = (order, token) => {
  return new Promise((resolve, reject) => {
    request
      .post('/orders/order', order, {
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

export default createOrder