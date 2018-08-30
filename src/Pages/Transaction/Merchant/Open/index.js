import React, { Component } from 'react'
import { Button, Header, Divider, Icon, List } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

import MenuLogin from '../../../../MenuLogin'
import Footer from '../../../../Footer'
import { getLocalstorage } from '../../../../function/Localstorage'
import getOrders from '../../../../function/GetOrders'

import './index.css'

export default class MerchantOpen extends Component {
  render() {
    const data = getLocalstorage()

    return (
      <MenuLogin>
        <div className='content-container'>
        <Link to='/merchants/settings'>
          <Button
            basic
            color='grey'
            content='Pengaturan Toko'
            icon='settings'
          />
        </Link>
        <Header as='h3' icon textAlign='center'>
          <Icon name='users' circular />
          <Header.Content>Nama Penjual</Header.Content>
        </Header>
        <Link to='/merchants/close'>
          <Button color='green' animated='vertical' className='open-close-order'>
            <Button.Content hidden>Toko Tutup? Klik Disini</Button.Content>
            <Button.Content visible>
              Status Toko: Buka
            </Button.Content>
          </Button>
        </Link>
        <Divider />
        <Header as='h2' className='order-status'>Status Pesanan</Header> <Header className="close-alert" color='grey'>
          Menunggu Pesanan...
        </Header>
        </div>
        {/* < List divided relaxed>
          {getOrders(data.token)}
        </List > */}
        <Footer />
      </MenuLogin>
    )
  }
}
