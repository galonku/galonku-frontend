import React from 'react'
import { Button, Grid, Rating, TextArea } from 'semantic-ui-react'

import { getLocalstorage } from '../../../../../function/Localstorage'
import updateOrderStatus from '../../../../../function/UpdateOrderStatus'

const userButton = () => {
  const order = getLocalstorage('Order')

  const handleCancel = async () => {
    const account = await getLocalstorage('Account')
    const order = await getLocalstorage('Order')

    const updatedStatus = {
      status: 'cancelled'
    }

    updateOrderStatus(order.id, updatedStatus, account.token)
  }

  const handleConfirmOrder = async () => {
    const account = await getLocalstorage('Account')
    const order = await getLocalstorage('Order')

    const updatedStatus = {
      status: 'done'
    }

    updateOrderStatus(order.id, updatedStatus, account.token)
  }

  const handleReview = async () => {
    const account = await getLocalstorage('Account')
    const order = await getLocalstorage('Order')

    updateOrderStatus(order.id, account.token)
  }

  if (order.status === 'Pending') {
    return (
      <Grid.Column floated='right' width={10} className='button-order'>
        <Button color='red' onClick={handleCancel}>
          Batalkan pesanan
        </Button>
      </Grid.Column>)
  } else if (order.status === 'processing') {
    return (
      <Grid.Column floated='right' width={10} className='button-order'>
        Pesanan sedang diproses penjual.
        Mohon menunggu.
      </Grid.Column>)
  } else if (order.status === 'delivering') {
    return (
      <div>
        <p>Pesanan sedang diantar.</p>
        <p>Apabila sudah diterima mohon konfirmasi pesanan dengan klik tombol di bawah ini.</p>
        <Button color='green' onClick={handleConfirmOrder}>
          Pesanan diterima
        </Button>
      </div>)
  } else if (order.status === 'done') {
    return (
      <div>
        <p>Berikan penilaian kepada penjual:</p>
        <Rating icon='star' defaultRating={0} maxRating={5} />
        <TextArea placeholder='Penilaian' style={{ minHeight: 100 }} />

        <Button color='green' onClick={handleReview}>
          Beri penilaian
        </Button>
      </div>)
  }
}

export default userButton