import request from '../../helpers/axios'

import notificationTemplate from './Template'

const getOrders = (token) => {
  return new Promise((resolve, reject) => {
    request
      .put('/orders', {
        headers: {
          Authorization: 'Bearer ' + token
        }
      })
      .then(response => {
        const orders = response.data

        const orderList = orders.forEach((order) => {
          const list = notificationTemplate(order.username, order.quantities)
          return list
        })
        resolve(orderList)
      })
      .catch(error => {
        console.log('failed')
        reject(error)
      })
  })
}

export default getOrders