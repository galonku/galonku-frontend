import React, { Component } from 'react'
import { Button, Header, Divider, Icon, Form } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

import MenuLogin from '../../../../MenuLogin'

import './index.css'

export default class MerchantOpen extends Component {
  render() {
    return (
      <MenuLogin>
        <div className='button-settings'>
        <Link to='/merchants/open'>
          <Button
            basic
            color='grey'
            content='Kembali Ke awal'
            icon='backward'
          />
        </Link>
        </div>
        <Header as='h3' icon textAlign='center'>
          <Icon name='users' circular />
          <Header.Content>Nama Penjual</Header.Content>
        </Header>
        <Divider />
        <Header as='h2' className='order-status'>Pengaturan</Header>
            <Form.Field>
              <b>Harga Galon (Dalam Rp)</b>
              <Form.Input name='price' value='5000' onChange={this.handleChange} />
            </Form.Field>
            <Form.Field>
              <b>Ganti Email</b>
              <Form.Input name='email' value='raja.galon@galonku.com' onChange={this.handleChange} />
            </Form.Field>
            <Form.Field>
              <b>Ganti Nomor telepon</b>
              <Form.Input name='phone_number' value='0888888888' onChange={this.handleChange} />
            </Form.Field>
            <Form.Field>
              <b>Ganti Kata Sandi</b>
              <Form.Input name='password' type='password' value='seller' onChange={this.handleChange} />
            </Form.Field>
        <Link to='/merchants/open'>
        <div className='submit-button'>
          <Button
            color='green'
            content='Submit'
            
          />
        </div>
        </Link>



      </MenuLogin>
    )
  }
}
