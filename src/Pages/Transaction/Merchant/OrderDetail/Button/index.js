import React, { Component } from 'react'
import { Button, Grid } from 'semantic-ui-react'
import { Redirect } from 'react-router-dom'

import { getLocalstorage } from '../../../../../function/Localstorage'
import updateOrderStatus from '../../../../../function/UpdateOrderStatus'

export default class MerchantButton extends Component {
  constructor(props) {
    super(props)

    this.state = {
      id: '',
      status: '',
      comments: '',
      username: '',
      showReview: false
    }
  }

  componentDidMount = async () => {
    const order = getLocalstorage('Order')

    await this.setState({
      id: order.id,
      status: order.status
    })
  }

  handleClickReject = async () => {
    const account = await getLocalstorage('Account')
    const order = await getLocalstorage('Order')

    await this.setState({ status: 'pesanan ditolak' })

    const updatedData = { status: this.state.status }
    await updateOrderStatus(order.id, updatedData, account.token)
    window.location.reload()
  }

  handleClickAccept = async () => {
    const account = await getLocalstorage('Account')
    const order = await getLocalstorage('Order')

    await this.setState({ status: 'sedang diproses' })

    const updatedData = { status: this.state.status }
    await updateOrderStatus(order.id, updatedData, account.token)
    window.location.reload()
  }

  handleClickDeliver = async () => {
    const account = await getLocalstorage('Account')
    const order = await getLocalstorage('Order')

    await this.setState({ status: 'sedang diantar' })

    const updatedData = { status: this.state.status }
    await updateOrderStatus(order.id, updatedData, account.token)
    window.location.reload()
  }

  handleClickDone = async () => {
    const account = await getLocalstorage('Account')
    const order = await getLocalstorage('Order')

    await this.setState({ status: 'pesanan selesai' })

    const updatedData = { status: this.state.status }
    await updateOrderStatus(order.id, updatedData, account.token)
    window.location.reload()
  }

  handleClickReview = async () => {
    this.setState({
      showReview: true
    })
  }

  render() {
    let view = ''

    if (this.props.children === 'pending') {
      view = (
        <Grid.Column floated='right' width={10} className='button-order'>
          <Button onClick={this.handleClickReject}>
            Tolak pesanan
          </Button>
          <Button onClick={this.handleClickAccept}>
            Terima pesanan
          </Button>
        </Grid.Column>)
    } else if (this.props.children === 'sedang diproses') {
      view = (
        <Grid.Column floated='right' width={10} className='button-order'>
          <Button onClick={this.handleClickReject}>
            Tolak pesanan
          </Button>
          <Button onClick={this.handleClickDeliver}>
            Antar pesanan
          </Button>
        </Grid.Column>)
    } else if (this.props.children === 'sedang diantar') {
      view = (
        <Grid.Column floated='right' width={10} className='button-order'>
          <Button onClick={this.handleClickReject}>
            Tolak pesanan
          </Button>
          <Button onClick={this.handleClickDone}>
            Pesanan selesai
          </Button>
        </Grid.Column>)
    } else if (this.props.children === 'pesanan selesai') {
      if (this.state.showReview) {
        view = (
          <Redirect to="/merchants/order-review" />
        )
      } else {
        view = (
          <Grid.Column floated='right' width={10} className='button-order'>
            <Button onClick={this.handleClickReview}>
              Lihat penilaian
            </Button>
          </Grid.Column>)
      }
    }

    return view
  }
}
