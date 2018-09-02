import React from 'react'
import { Button, Grid } from 'semantic-ui-react'

import { getLocalstorage } from '../../../../../function/Localstorage'
import { handleClickAccept, handleClickReject, handleClickDeliver, handleClickDone, handleClickReview } from '../handleClick'

const merchantButton = () => {
  const data = getLocalstorage('Order')

  if (data.status === 'Pending') {
    return (
      <Grid.Column floated='right' width={10} className='button-order'>
        <Button onClick={handleClickReject}>
          Tolak pesanan
        </Button>
        <Button onClick={handleClickAccept}>
          Terima pesanan
        </Button>
      </Grid.Column>)
  } else if (data.status === 'processing') {
    return (
      <Grid.Column floated='right' width={10} className='button-order'>
        <Button onClick={handleClickReject}>
          Tolak pesanan
        </Button>
        <Button onClick={handleClickDeliver}>
          Antar pesanan
        </Button>
      </Grid.Column>)
  } else if (data.status === 'delivering') {
    return (
      <Grid.Column floated='right' width={10} className='button-order'>
        <Button onClick={handleClickReject}>
          Tolak pesanan
        </Button>
        <Button onClick={handleClickDone}>
          Pesanan selesai
        </Button>
      </Grid.Column>)
  } else if (data.status === 'done') {
    return (
      <Grid.Column floated='right' width={10} className='button-order'>
        <Button onClick={handleClickReview}>
          Lihat penilaian
        </Button>
      </Grid.Column>)
  }
}

export default merchantButton