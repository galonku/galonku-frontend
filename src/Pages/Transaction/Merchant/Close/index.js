import React, { Component } from 'react'
import { Button, Header, Divider, Icon } from 'semantic-ui-react'
import { Link, Redirect } from 'react-router-dom'

import MenuLogin from '../../../../MenuLogin'
import Footer from '../../../Footer'

import './index.css'
import { getLocalstorage } from '../../../../function/Localstorage'
import getMerchants from '../../../../function/GetMerchants'


export default class MerchantClose extends Component {
  constructor(props) {
    super(props)

    this.state = {
      price: 0,
      setPrice: false,
      message: ''
    }
  }

  handleMessage = () => {
    if (this.state.setPrice === false) {
      this.setState({
        message:
          < p className='message'> Silahkan tentukan dulu harga jual galon Anda.
            < br />
            Anda dapat menentukan harga jual pada menu pengaturan toko di atas.
          </p >
      })
    }
  }

  handleClick = async () => {
    const account = await getLocalstorage('Account')
    const response = await getMerchants(`/search?q=${account.store_name}`)

    await this.setState({
      price: response.data.merchant[0].price
    })

    if (this.state.price !== 0) {
      this.setState({
        setPrice: true
      })
    }

    this.handleMessage()
  }

  render() {
    let view = ''
    const account = getLocalstorage('Account')
    if (this.state.setPrice === false) {
      view = (
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
              <Header.Content>{account.store_name}</Header.Content>
            </Header>
            <Button color='red' animated='vertical' className='open-close-order' onClick={this.handleClick}>
              <Button.Content hidden>Klik Untuk Buka Toko</Button.Content>
              <Button.Content visible>
                Status Toko: Tutup
              </Button.Content>
            </Button>
            {this.state.message}
            <div>
              <Divider />
              <Header as='h2' className='order-status'>Status Pesanan</Header>
              <Header className="close-alert" color='red'>
                Anda belum mengaktifkan/membuka Toko anda.
              </Header>
            </div>
          </div>
          <Footer />
        </MenuLogin>
      )
    } else {
      view = (<Redirect to='/merchants/open' />)
    }

    return view
  }
}
