import React, { Component } from 'react'
import { Button, Header, Divider, Icon, List } from 'semantic-ui-react'
import { Link, Redirect } from 'react-router-dom'

import MenuLogin from '../../../../MenuLogin'
import Footer from '../../../Footer'
import getOrders from '../../../../function/GetOrders'
import { getLocalstorage, storeLocalstorage } from '../../../../function/Localstorage'

import './index.css'

export default class MerchantOpen extends Component {
  constructor(props) {
    super(props)

    this.state = {
      orders: [],
      showDetails: false
    }
  }

  fetchOrders = () => {
    const orderList = async () => {
      const data = getLocalstorage('Account')
      const orders = await getOrders(data.token)
      console.log(orders)

      this.setState({ orders })
    }

    orderList()
    storeLocalstorage('Orders')
  }

  // stopFetch = () => {
  //   clearInterval(fetch)
  // }

  handleClick = (index) => {
    this.setState({ showDetails: true })
  }

  render() {
    // const fetch = setInterval(this.fetchOrders, 5000)
    // fetch

    const { showDetails } = this.state

    if (showDetails) {
      return <Redirect to='/merchants/order-details' />
    }

    return (
      <MenuLogin>
        <div className="content-container">
          <Link to="/merchants/settings">
            <Button
              basic
              color="grey"
              content="Pengaturan Toko"
              icon="settings"
            />
          </Link>
          <Header as="h3" icon textAlign="center">
            <Icon name="users" circular />
            <Header.Content>Nama Penjual</Header.Content>
          </Header>
          <Link to="/merchants/close">
            <Button
              color="green"
              animated="vertical"
              className="open-close-order"
            // onClick={this.stopFetch}
            >
              <Button.Content hidden>Toko Tutup? Klik Disini</Button.Content>
              <Button.Content visible>Status Toko: Buka</Button.Content>
            </Button>
          </Link>
          <Divider />
          <Header as="h2" className="order-status">
            Status Pesanan
          </Header>{' '}
          <Header className="close-alert" color="grey">
            Menunggu Pesanan...
          </Header>
        </div>
        <List divided relaxed>
          {this.state.orders.map((order, index) => {
            return (
              <List.Item key={index}>
                <span onClick={() => this.handleClick(index)}>
                  <List.Icon name='tint' size='large' verticalAlign='middle' />
                  <List.Content>
                    <List.Header as='a'>{order.fullname} memesan sebanyak {order.quantity} galon</List.Header>
                    <List.Description as='a'>Pesanan masuk .. menit yang lalu</List.Description>
                  </List.Content>
                </span>
              </List.Item>
            )
          })}
        </List>
        <Footer />
      </MenuLogin>
    )
  }
}