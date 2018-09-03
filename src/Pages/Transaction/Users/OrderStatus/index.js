import React, { Component } from 'react'
import { Header, Form, Divider, Icon, Grid, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

import MenuLogin from '../../../../MenuLogin'
import { getLocalstorage } from '../../../../function/Localstorage'
import getOrders from '../../../../function/GetOrders'
import UserButton from './Button'

export default class OrderStatus extends Component {
  constructor(props) {
    super(props)

    const order = getLocalstorage('Order')
    this.state = {
      quantities: '',
      store_name: order.store_name,
      status: order.status,
      interval: ''
    }
  }

  fetchOrders = async () => {
    const orderStatus = async () => {
      const account = await getLocalstorage('Account')
      const order = await getLocalstorage('Order')
      const response = await getOrders(`/orders/order/${order.id}`, account.token)

      this.setState({
        quantities: response.data.quantities,
        store_name: response.data.store_name,
        status: response.data.status
      })
    }
    await orderStatus()
  }

  componentDidMount = async () => {
    this.fetchOrders()
    const fetch = setInterval(this.fetchOrders, 10000)
    this.setState({ interval: fetch })
  }

  componentWillUnmount = () => {
    clearInterval(this.state.interval)
  }

  render() {
    return (
      <MenuLogin>
        <Header as='h3' icon textAlign='center'>
          <Icon name='users' circular />
          <Header.Content>
            Pesanan {this.state.quantities} galon dari {this.state.store_name}
          </Header.Content>
        </Header>
        <label>Status: {this.state.status}</label>
        <Divider />
        <Form>
          <Grid.Column floated='left' width={5} className='button-return'>
            <Link to='/users/transaction'>
              <Button>Kembali</Button>
            </Link>
          </Grid.Column>
          <UserButton>
            {this.state.status}
          </UserButton>
        </Form>
      </MenuLogin >
    )
  }
}
