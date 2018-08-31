import request from '../../helpers/axios'

import notificationTemplate from './Template'

const getOrders = token => {
  return new Promise((resolve, reject) => {
    request
      .get('/orders', {
        headers: {
          Authorization: 'Bearer ' + token
        }
      })
      .then(response => {
        const orders = response.data

        const orderList = orders.map(order => {
          const list = notificationTemplate(order.fullname, order.quantity)
          return list
        })
        resolve(orderList)
      })

      .catch(error => {
        reject(error)
      })
  })
}

export default getOrders
