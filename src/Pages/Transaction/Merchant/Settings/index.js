import React, { Component } from 'react'
import { Button, Header, Divider, Icon, Form, Confirm } from 'semantic-ui-react'

import MenuLogin from '../../../../MenuLogin'
import Footer from '../../../Footer'
import { getLocalstorage } from '../../../../function/Localstorage'
import updateMerchants from '../../../../function/UpdateMerchants'
import getMerchants from '../../../../function/GetMerchants'

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
      password: '',
      // newPassword: '',
      // confirmNewPassword: '',
      open: false
    }
  }

  componentDidMount = () => {
    const callMerchants = async () => {
      const account = await getLocalstorage('Account')
      const response = await getMerchants(`/search?q=${account.store_name}`)

      this.setState({
        price: response.data.merchant[0].price,
        store_name: response.data.merchant[0].store_name,
        address: response.data.merchant[0].address,
        email: response.data.merchant[0].email,
        phone_number: response.data.merchant[0].phone_number,
      })
    }
    callMerchants()
  }

  show = () => this.setState({ open: true })
  handleCancel = () => this.setState({ open: false })

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleConfirm = async (event) => {
    event.preventDefault()

    const data = getLocalstorage('Account')
    const merchantData = {
      price: this.state.price,
      store_name: this.state.store_name,
      address: this.state.address,
      email: this.state.email,
      phone_number: this.state.phone_number,
      password: this.state.password
    }
    await updateMerchants(`/${data.id}`, merchantData, data.token)

    this.setState({ open: false })
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
          <Header as='h3' icon>
            <Icon name='users' circular />
            {this.state.store_name}
          </Header>

          <Divider />
          <Header as='h2' className='order-status'>Pengaturan</Header>
          <Form onSubmit={this.show}>
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
            {/* <Form.Field>
              <b>Ganti Kata Sandi</b>
              <Form.Input name='new-password' type='password' value={this.state.newPassword} onChange={this.handleChange} />
            </Form.Field>
            <Form.Field>
              <b>Konfirmasi Kata Sandi Baru</b>
              <Form.Input name='confirm-new-password' type='password' value={this.state.confirmNewPassword} onChange={this.handleChange} />
            </Form.Field> */}
            <Form.Field>
              <b>Masukkan Kata Sandi  {/*Yang Lama*/}</b>
              <Form.Input name='password' type='password' value={this.state.password} onChange={this.handleChange} />
            </Form.Field>
            <Button>Perbaharui</Button>
          </Form>

          <div>
            <Confirm
              open={this.state.open}
              cancelButton='Batal'
              confirmButton="Ganti"
              content='Apakah Anda yakin untuk mengubah data toko Anda?'
              onCancel={this.handleCancel}
              onConfirm={this.handleConfirm}
            />
          </div>

        </div>
        <Footer />
      </MenuLogin>
    )
  }
}
