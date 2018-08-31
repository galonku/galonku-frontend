import React, { Component } from 'react'
import { Button, Header, Divider, Icon, Form, Modal } from 'semantic-ui-react'

import MenuLogin from '../../../../MenuLogin'
import Footer from '../../../Footer'
import { getLocalstorage } from '../../../../function/Localstorage'
import updateMerchants from '../../../../function/UpdateMerchants'

import './index.css'

export default class MerchantOpen extends Component {
  constructor(props) {
    super(props)

    this.state = {
      price: '',
      store_name: '',
      address: '',
      email: '',
      phone_number: '',
      password: ''
    }
  }

  state = { modalOpen: false }


  handleOpen = () => this.setState({ modalOpen: true })
  handleClose = () => this.setState({ modalOpen: false })

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSubmit = async (event) => {
    event.preventDefault()

    const data = getLocalstorage()
    const merchantData = {
      price: this.state.price,
      store_name: this.state.store_name,
      address: this.state.address,
      email: this.state.email,
      phone_number: this.state.phone_number,
      password: this.state.password
    }
    await updateMerchants(`/${data.id}`, merchantData, data.token)
  }

  render() {
    return (
      <MenuLogin>
        <div className='content-container'>
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
          <Form onSubmit={this.handleSubmit}>
            <Form.Field>
              <b>Harga per Galon (Rp)</b>
              <Form.Input name='price' value={this.state.price} onChange={this.handleChange} />
            </Form.Field>
            <Form.Field>
              <b>Ganti Nama Toko</b>
              <Form.Input name='store_name' type='text' value={this.state.store_name} onChange={this.handleChange} />
            </Form.Field>
            <Form.Field>
              <b>Ganti Alamat Toko</b>
              <Form.Input name='address' type='text' value={this.state.address} onChange={this.handleChange} />
            </Form.Field>
            <Form.Field>
              <b>Ganti Email</b>
              <Form.Input name='email' value={this.state.email} onChange={this.handleChange} />
            </Form.Field>
            <Form.Field>
              <b>Ganti Nomor telepon</b>
              <Form.Input name='phone_number' value={this.state.phone_number} onChange={this.handleChange} />
            </Form.Field>
            <Form.Field>
              <b>Ganti Kata Sandi</b>
              <Form.Input name='password' type='password' value={this.state.password} onChange={this.handleChange} />
            </Form.Field>

            {/* coba-coba aja bro karena ga bisa tidur, kalau ga work/bermasalah hapus aja ya bro */}
            <Modal
              trigger={<Button>Perbaharui</Button>}

              basic size='small'>
              <Header icon='exclamation' content='Perhatian' />
              <Modal.Content>
                <p>
                  Apakah anda yakin ingin mengganti Pengaturan Toko anda?
                </p>
              </Modal.Content>
              <Modal.Actions>
                <Button basic color='red' onClick={this.close} inverted>
                  <Icon name='remove' /> Batal
                </Button>

                <Modal trigger={
                  <Button type='submit' color='green' inverted>
                    <Icon name='checkmark' /> Ya
                  </Button>}>
                  <Modal.Description>
                    <Header>Berhasil</Header>
                    Setting Telah Berhasil diubah!
                    <Button
                      onClick={this.props.history.goBack}
                      content='Kembali ke Halaman Dashboard'
                    />
                  </Modal.Description>
                </Modal>
              </Modal.Actions>
            </Modal>
          </Form>

        </div>
        <Footer />
      </MenuLogin>
    )
  }
}
