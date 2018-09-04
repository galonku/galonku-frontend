import React, { Component } from 'react'
import { Button, Header, Divider, Icon, List, Tab, Menu, Label } from 'semantic-ui-react'
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
      interval: ''
    }
  }


  fetchOrders = () => {
    const orderList = async () => {
      const data = getLocalstorage('Account')
      const orders = await getOrders('/orders', data.token)

      const orderList = orders.data.map(order => {
        return {
          id: order.idorder,
          fullname: order.fullname,
          quantities: order.quantities,
          status: order.status
        }
      })

      this.setState({ orderList })
    }

    orderList()
  }

  componentDidMount = () => {
    this.fetchOrders()
    const fetch = setInterval(this.fetchOrders, 30000)
    this.setState({ interval: fetch })
  }

  componentWillUnmount = () => {
    clearInterval(this.state.interval)
  }

  handleClick = (id, status) => {
    this.setState({ showDetails: true })

    const data = {
      id,
      status
    }
    storeLocalstorage('Order', data)
  }

  render() {
    const { showDetails } = this.state

    const panes = [
      {
        menuItem: { key: 'OnGoingOrders', icon: 'users', content: 'Pesanan Masuk' },
        render: () => <Tab.Pane>
          {/* Tab 1 Content */}
          <List divided relaxed>
          {this.state.orderList.map((order, index) => {
            return (
              <List.Item key={index}>
                <span onClick={() => this.handleClick(order.id)}>
                  <List.Icon name='tint' size='large' verticalAlign='middle' />
                  <List.Content>
                    <List.Header as='a'>{order.fullname} memesan sebanyak {order.quantities} galon</List.Header>
                    <List.Description as='a'>Pesanan masuk .. menit yang lalu</List.Description>
                  </List.Content>
                </span>
              </List.Item>
            )
          })}
        </List>
          
          </Tab.Pane>,
      },
      {
        menuItem: (
          <Menu.Item key='messages'>
            Pesanan Selesai
          </Menu.Item>
        ),
        render: () => <Tab.Pane>
          
          .. ..
          
          </Tab.Pane>,
      },
    ]



    if (showDetails) {
      return <Redirect to='/merchants/order-details' />
    }

    return (
      <MenuLogin>
        
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
        
        <List divided relaxed>
          {this.state.orderList.map((order, index) => {
            return (
              <List.Item key={index}>
                <span onClick={() => this.handleClick(order.id, order.status)}>
                  <List.Icon name='tint' size='large' verticalAlign='middle' />
                  <List.Content>
                    <List.Header as='a'>{order.fullname} memesan sebanyak {order.quantities} galon</List.Header>
                    <List.Description as='a'>Status: {order.status} </List.Description>
                  </List.Content>
                </span>
              </List.Item>
            )
          })}
        </List>

        <Tab panes={panes} />
        <div className='the-footer'>
        <Footer />
        </div>
      </MenuLogin >
    )
  }
}