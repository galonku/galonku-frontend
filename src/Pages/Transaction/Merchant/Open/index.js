import React, { Component } from 'react'
import { Button, Header, Divider, Icon, List } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

import MenuLogin from '../../../../MenuLogin'
import Footer from '../../../Footer'
import getOrders from '../../../../function/GetOrders'
import { getLocalstorage } from '../../../../function/Localstorage'

import './index.css'

export default class MerchantOpen extends Component {
  constructor(props) {
    super(props)

    this.state = { notification: [] }
  }

  componentDidMount() {
    const orderList = async () => {
      const data = getLocalstorage()
      const notification = await getOrders(data.token)

      this.setState({ notification })
    }
    orderList()
  }

  render() {
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
          {this.state.notification.map((item, index) => {
            return <h1 key={index}>{item.fullname}</h1>
          })}
        </List>
        <Footer />
      </MenuLogin>
    )
  }
}
