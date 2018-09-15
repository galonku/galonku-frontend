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
      status: props.children,
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
    const status = 'pesanan ditolak'
    const updatedData = { status }

    await updateOrderStatus(order.id, updatedData, account.token)
    await this.setState(updatedData)
    this.props.updateParentStatus && this.props.updateParentStatus(status)
  }

  handleClickAccept = async () => {
    const account = await getLocalstorage('Account')
    const order = await getLocalstorage('Order')
    const status = 'sedang diproses'
    const updatedData = { status }

    await updateOrderStatus(order.id, updatedData, account.token)
    this.setState(updatedData)
    this.props.updateParentStatus && this.props.updateParentStatus(status)
  }

  handleClickDeliver = async () => {
    const account = await getLocalstorage('Account')
    const order = await getLocalstorage('Order')
    const status = 'sedang diantar'
    const updatedData = { status }

    await updateOrderStatus(order.id, updatedData, account.token)
    this.setState(updatedData)
    this.props.updateParentStatus && this.props.updateParentStatus(status)
  }

  handleClickDone = async () => {
    const account = await getLocalstorage('Account')
    const order = await getLocalstorage('Order')

    await this.setState({ status: 'pesanan selesai' })

    const updatedData = { status: this.state.status }
    await updateOrderStatus(order.id, updatedData, account.token)
  }

  handleClickReview = async () => {
    this.setState({
      showReview: true
    })
  }

  render() {
    let view = ''

    if (this.state.status === 'pending') {
      view = (
        <Grid.Column floated='right' width={10} className='button-order'>
          <Button color="red" onClick={this.handleClickReject}>
            Tolak pesanan
          </Button>
          <Button color="green" onClick={this.handleClickAccept}>
            Terima pesanan
          </Button>
        </Grid.Column>)
    } else if (this.state.status === 'sedang diproses') {
      view = (
        <Grid.Column floated='right' width={10} className='button-order'>
          <Button color="red" onClick={this.handleClickReject}>
            Tolak pesanan
          </Button>
          <Button color="green" onClick={this.handleClickDeliver}>
            Antar pesanan
          </Button>
        </Grid.Column>)
    } else if (this.state.status === 'sedang diantar') {
      view = (
        <Grid.Column floated='right' width={10} className='button-order'>
          <Button color="red" onClick={this.handleClickReject}>
            Tolak pesanan
          </Button>
          <Button color="green" onClick={this.handleClickDone}>
            Pesanan selesai
          </Button>
        </Grid.Column>)
    } else if (this.state.status === 'pesanan selesai') {
      if (this.state.showReview) {
        view = (
          <Redirect to="/merchants/order-review" />
        )
      } else {
        view = (
          <Grid.Column floated='right' width={10} className='button-order'>
            <Button color="green" onClick={this.handleClickReview}>
              Lihat penilaian
            </Button>
          </Grid.Column>)
      }
    }

    return view
  }
}
