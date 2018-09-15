import request from '../../helpers/axios'

const updateOrderStatus = (id, data, token) => {
  return new Promise((resolve, reject) => {
    request
      .put(`/orders/order/${id}/`, data, {
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

export default updateOrderStatus