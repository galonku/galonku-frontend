import React, { Component } from 'react'
import { Button, TextArea } from 'semantic-ui-react'
import { Redirect } from 'react-router-dom'

import { getLocalstorage } from '../../../../../function/Localstorage'
import updateOrderStatus from '../../../../../function/UpdateOrderStatus'
import createReview from '../../../../../function/CreateReview'

export default class UserButton extends Component {
  constructor(props) {
    super(props)

    this.state = {
      comments: '',
      status: props.children,
      store_name: '',
      username: '',
      doneReview: false
    }
  }

  handleCancel = async () => {
    const account = await getLocalstorage('Account')
    const order = await getLocalstorage('Order')
    const status = 'pesanan dibatalkan'
    const updatedStatus = { status }

    await updateOrderStatus(order.id, updatedStatus, account.token)
    await this.setState(updatedStatus)
    this.props.updateParentStatus && this.props.updateParentStatus(status)
  }

  handleConfirmOrder = async () => {
    const account = await getLocalstorage('Account')
    const order = await getLocalstorage('Order')
    const status = 'pesanan selesai'
    const updatedStatus = { status }

    await updateOrderStatus(order.id, updatedStatus, account.token)
    await this.setState(updatedStatus)
    this.props.updateParentStatus && this.props.updateParentStatus(status)
  }

  handleReview = async () => {
    const account = await getLocalstorage('Account')
    const order = await getLocalstorage('Order')

    const review = {
      comments: this.state.comments,
      store_name: order.store_name,
      username: account.username,
      idorder: order.id
    }

    await createReview(review, account.token)
    this.setState({ doneReview: true })
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  render() {
    let view = ''

    if (this.props.children === 'pending') {
      view = (
        <Button color='red' onClick={this.handleCancel}>
          Batalkan pesanan
        </Button>
      )
    } else if (this.props.children === 'sedang diproses') {
      view = (
        <div>
          <p>Pesanan sedang diproses penjual.</p>
          <p>Mohon menunggu.</p>
        </div>
      )
    } else if (this.props.children === 'sedang diantar') {
      view = (
        <div>
          <p>Pesanan sedang diantar.</p>
          <p>Apabila pesanan sudah diterima, mohon konfirmasi pesanan dengan klik tombol di bawah ini.</p>
          <Button color='green' onClick={this.handleConfirmOrder}>
            Pesanan diterima
          </Button>
        </div>)
    } else if (this.state.status === 'pesanan selesai') {
      if (!this.state.doneReview) {
        view = (
          <div>
            <p>Berikan penilaian kepada penjual:</p>
            <TextArea name='comments' placeholder='Penilaian' style={{ minHeight: 100 }} onChange={this.handleChange} />

            <Button color='green' onClick={this.handleReview}>
              Beri penilaian
            </Button>
          </div>)
      }
      else {
        view = (<Redirect to="/users/transaction" />)
      }
    } else if (this.props.children === 'pesanan ditolak') {
      view = (
        <p>Mohon maaf, pesanan Anda telah ditolak penjual.</p>
      )
    } else if (this.state.status === 'pesanan dibatalkan') {
      view = (
        <p>Pesanan telah berhasil dibatalkan.</p>
      )
    }

    return view
  }
}