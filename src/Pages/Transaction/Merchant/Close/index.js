import React, { Component } from 'react'
import { Button, Header, Divider, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

import MenuLogin from '../../../../MenuLogin'
import Footer from '../../../Footer'

import './index.css'

export default class MerchantClose extends Component {
  render() {
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
          <Link to='/merchants/open'>
            <Button color='red' animated='vertical' className='open-close-order'>
              <Button.Content hidden>Klik Untuk Buka Toko</Button.Content>
              <Button.Content visible>
                Status Toko: Tutup
              </Button.Content>
            </Button>
          </Link>
          <Divider />
          <Header as='h2' className='order-status'>Status Pesanan</Header>
          <Header className="close-alert" color='red'>
            Anda belum mengaktifkan/membuka Toko anda.
          </Header>
        </div>
        <Footer />
      </MenuLogin>
    )
  }
}
