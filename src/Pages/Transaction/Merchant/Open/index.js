import React, { Component } from 'react'
import { List, Tab, Divider, Header, Icon, Button } from 'semantic-ui-react'
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
      orderList: [],
      showDetails: false,
      interval: '',
      loggedIn: true
    }
  }

  fetchOrders = () => {
    const orderList = async () => {
      const data = await getLocalstorage('Account')
      const orders = data ? await getOrders('/orders', data.token) : ''

      const orderList = orders ? orders.data.map(order => {
        return {
          id: order.idorder,
          fullname: order.fullname,
          quantities: order.quantities,
          status: order.status
        }
      }) : ''
      await this.setState({ orderList })
    }

    orderList()
  }

  componentDidMount = async () => {
    this.fetchOrders()
    const fetch = setInterval(this.fetchOrders, 15000)
    this.setState({ interval: fetch })

    const account = await getLocalstorage('Account')

    if (account.role !== 'merchants') {
      this.setState({ loggedIn: false })
    }
  }

  componentWillUnmount = () => {
    clearInterval(this.state.interval)
  }

  handleClick = async (id, status) => {
    const data = {
      id,
      status
    }

    await storeLocalstorage('Order', data)
    await this.setState({ showDetails: true })
  }

  render() {
    const { showDetails } = this.state
    const panes = [
      {
        menuItem: { key: 'OnGoingOrders', icon: 'users', content: 'Pesanan Masuk' },
        render: () =>
          <Tab.Pane>
            <List divided relaxed>
              {this.state.orderList.map((order, index) => {
                if (order.status !== 'pesanan selesai') {
                  return (
                    <List.Item key={index}>
                      <span onClick={() => this.handleClick(order.id, order.status)}>
                        <List.Icon name='tint' size='large' />
                        <List.Content>
                          <List.Header as='a'>{order.fullname} memesan sebanyak {order.quantities} galon</List.Header>
                          <List.Description as='a'>status: {order.status}</List.Description>
                        </List.Content>
                      </span>
                    </List.Item>
                  )
                }
              })}
            </List>
          </Tab.Pane>,
      },
      {
        menuItem: { key: 'CompletedOrders', content: 'Pesanan Selesai' },
        render: () =>
          <Tab.Pane>
            <List divided relaxed>
              {this.state.orderList.map((order, index) => {
                if (order.status === 'pesanan selesai') {
                  return (
                    <List.Item key={index}>
                      <span onClick={() => this.handleClick(order.id, order.status)}>
                        <List.Icon name='tint' size='large' />
                        <List.Content>
                          <List.Header as='a'>{order.fullname} memesan sebanyak {order.quantities} galon</List.Header>
                          <List.Description as='a'>status: {order.status}</List.Description>
                        </List.Content>
                      </span>
                    </List.Item>
                  )
                }
              })}
            </List>
          </Tab.Pane>,
      },
    ]

    if (showDetails) {
      return (
        <div>
          {this.state.loggedIn ?
            (<Redirect to='/merchants/order-details' />) : (<Redirect to='/' />)}
        </div>
      )
    } else {
      return (
        <div>
          {this.state.loggedIn ?
            (<MenuLogin>
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
              <Tab panes={panes} />
              <div className='the-footer'>
                <Footer />
              </div>
            </MenuLogin >)
            :
            (<Redirect to='/' />)
          }
        </div>
      )
    }
  }
}