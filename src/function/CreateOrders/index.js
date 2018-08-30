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
        console.log(response.data.message)
        resolve()
      })
      .catch(error => {
        console.log(error.response)
        reject(error)
      })
  })
}

export default createOrder