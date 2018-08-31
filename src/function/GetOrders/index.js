import request from '../../helpers/axios'

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
          return {
            total_price: order.Total,
            address: order.address,
            fullname: order.fullname,
            notes: order.notes,
            phone_number: order.phone_number,
            price: order.price,
            quantity: order.quantity,
            status: order.status,
            store_name: order.store_name
          }
        })
        resolve(orderList)
      })

      .catch(error => {
        reject(error)
      })
  })
}

export default getOrders
