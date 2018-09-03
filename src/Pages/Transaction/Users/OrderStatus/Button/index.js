import React, { Component } from 'react'
import { Button, Grid, TextArea } from 'semantic-ui-react'
import { Redirect } from 'react-router-dom'

import { getLocalstorage } from '../../../../../function/Localstorage'
import updateOrderStatus from '../../../../../function/UpdateOrderStatus'
import createReview from '../../../../../function/CreateReview'

export default class UserButton extends Component {
  constructor(props) {
    super(props)

    this.state = {
      comments: '',
      store_name: '',
      username: '',
      doneReview: false
    }
  }

  handleCancel = async () => {
    const account = await getLocalstorage('Account')
    const order = await getLocalstorage('Order')

    const updatedStatus = {
      status: 'cancelled'
    }

    updateOrderStatus(order.id, updatedStatus, account.token)
  }

  handleConfirmOrder = async () => {
    const account = await getLocalstorage('Account')
    const order = await getLocalstorage('Order')

    const updatedStatus = {
      status: 'done'
    }

    await updateOrderStatus(order.id, updatedStatus, account.token)
    window.location.reload()
  }

  handleReview = async () => {
    const account = await getLocalstorage('Account')
    const order = await getLocalstorage('Order')

    const review = {
      comments: this.state.comments,
      store_name: order.store_name,
      username: account.username
    }

    await createReview(review, account.token)
    this.setState({ doneReview: true })
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  // handleClickRating = (event) => {
  //   this.setState({
  //     rating: event.target.value
  //   })

  //   console.log(this.state.rating)
  // }

  render() {
    let view = ''

    if (this.props.children === 'Pending') {
      view = (
        <Grid.Column floated='right' width={10} className='button-order'>
          <Button color='red' onClick={this.handleCancel}>
            Batalkan pesanan
          </Button>
        </Grid.Column>)
    } else if (this.props.children === 'processing') {
      view = (
        <Grid.Column floated='right' width={10} className='button-order'>
          Pesanan sedang diproses penjual.
          Mohon menunggu.
        </Grid.Column>)
    } else if (this.props.children === 'delivering') {
      view = (
        <div>
          <p>Pesanan sedang diantar.</p>
          <p>Apabila pesanan sudah diterima, mohon konfirmasi pesanan dengan klik tombol di bawah ini.</p>
          <Button color='green' onClick={this.handleConfirmOrder}>
            Pesanan diterima
          </Button>
        </div>)
    } else if (this.props.children === 'done') {
      if (!this.state.doneReview) {
        view = (
          <div>
            <p>Berikan penilaian kepada penjual:</p>
            {/* <Rating icon='star' maxRating={5} value={this.state.rating} onClick={this.handleClickRating} /> */}
            <TextArea name='comments' placeholder='Penilaian' style={{ minHeight: 100 }} onChange={this.handleChange} />

            <Button color='green' onClick={this.handleReview}>
              Beri penilaian
            </Button>
          </div>)
      } else {
        view = (<Redirect to="/users/transaction" />)
      }
    }

    return view
  }
}