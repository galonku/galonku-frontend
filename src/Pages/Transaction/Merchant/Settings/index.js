import React, { Component } from 'react'
import { Button, Header, Divider, Icon, Form, Modal } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

import MenuLogin from '../../../../MenuLogin'

import './index.css'

export default class MerchantOpen extends Component {
  state = { modalOpen: false }
  

  handleOpen = () => this.setState({ modalOpen: true })

  handleClose = () => this.setState({ modalOpen: false })


  render() {
    return (
      <MenuLogin>
        <div className='button-settings'>
          <Button
            onClick={this.props.history.goBack}
            basic
            color='grey'
            content='Kembali Ke awal'
            icon='backward'
          />
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
      
        
  <Modal trigger={<div className='submit-button'><Button onClick={this.handleOpen} color='green'>Perbaharui</Button></div>} 
  open={this.state.modalOpen}
  onClose={this.handleClose}
  basic size='small'>
    <Header icon='exclamation' content='Apakah anda yakin?' />
    <Modal.Content>
      <p>
        Apakah anda yakin untuk Mengganti pengaturan Toko Anda?
      </p>
    </Modal.Content>
    <Modal.Actions>
      <Button basic color='red' onClick={this.handleClose} inverted>
        <Icon name='remove' /> Batal
      </Button>
      <Link to='/merchants/open'>
        <Button color='green' inverted>          
          <Icon name='checkmark' /> Ya          
        </Button>
      </Link>
    </Modal.Actions>
  </Modal>


      </MenuLogin>
    )
  }
}
