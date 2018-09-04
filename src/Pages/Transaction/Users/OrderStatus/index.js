import React, { Component } from 'react'
import { Header, Form, Divider, Icon, Grid, Button, List } from 'semantic-ui-react'

import { getLocalstorage } from '../../../../function/Localstorage'
import getOrders from '../../../../function/GetOrders'
import UserButton from './Button'

export default class OrderStatus extends Component {
  constructor(props) {
    super(props)

    this.state = {
      quantities: '',
      store_name: '',
      status: '',
      interval: '',
      orderList: [],
      showDetails: false
    }
  }

  fetchOrders = async () => {
    const orderList = async () => {
      const data = await getLocalstorage('Account')
      const orders = await getOrders('/orders', data.token)

      const orderList = orders.data.map(order => {
        return {
          id: order.idorder,
          fullname: order.fullname,
          quantities: order.quantities,
          status: order.status
        }
      })
      await this.setState({ orderList })
    }

    orderList()
  }

  componentDidMount = async () => {
    this.fetchOrders()
    const fetch = setInterval(this.fetchOrders, 10000)
    this.setState({ interval: fetch })
  }

  componentWillUnmount = () => {
    clearInterval(this.state.interval)
  }

  handleClick = async (id) => {
    const account = await getLocalstorage('Account')

    const response = await getOrders(`/orders/order/${id}`, account.token)
    const order = response.data

    this.setState({
      quantities: order.quantities,
      status: order.status,
      store_name: order.store_name,
      showDetails: true
    })
  }

  handleReturn = () => {
    this.setState({
      showDetails: false
    })
  }

  render() {
    let view = ''

    if (this.state.showDetails) {
      view = (
        <div>
          <Header as='h3' icon textAlign='center'>
            <Icon name='users' circular />
            <Header.Content>
              Pemesanan sebanyak {this.state.quantities} galon dari {this.state.store_name}
            </Header.Content>
          </Header>
          <label>Status: {this.state.status}</label>
          <Divider />
          <Form>
            <Grid.Column floated='left' width={5} className='button-return'>
              <Button onClick={this.handleReturn}>Kembali</Button>
            </Grid.Column>
            <UserButton>
              {this.state.status}
            </UserButton>
          </Form>
        </div>
      )
    } else {
      view = (
        <div>
          {this.state.orderList.map((order, index) => {
            if (order.status !== 'done') {
              return (
                <List divided relaxed>
                  <List.Item key={index}>
                    <span onClick={() => this.handleClick(order.id)}>
                      <List.Icon name='tint' size='large' />
                      <List.Content>
                        <List.Header as='a'>{order.fullname} memesan sebanyak {order.quantities} galon</List.Header>
                        <List.Description as='a'>Status: {order.status}</List.Description>
                      </List.Content>
                    </span>
                  </List.Item>
                </List>
              )
            }
          })}
        </div>
      )
    }

    return view
  }
}
