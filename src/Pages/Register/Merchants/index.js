import React from 'react'
import { Container, Form, Checkbox, Header, Modal, Button, Icon } from 'semantic-ui-react'

import Register from '../../../function/Register'
import MyMenu from '../../../Menu'
import Footer from '../../Footer'

import './index.css'

export default class RegisterMerchant extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      username: '',
      store_name: '',
      email: '',
      password: '',
      phone_number: '',
      identity_number: '',
      address: '',
      message: '',
      modalOpen: false
    }
  }

  handleClose = () => this.setState({ modalOpen: false })

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSubmit = async (event) => {
    event.preventDefault()

    const URL = 'merchants/register'
    const data = {
      username: this.state.username,
      store_name: this.state.store_name,
      email: this.state.email,
      password: this.state.password,
      phone_number: this.state.phone_number,
      identity_number: this.state.identity_number,
      address: this.state.address
    }

    const response = await Register(URL, data)

    if (response.data.message === 'Your merchant account successfully registered!') {
      await this.setState({
        message: 'Registrasi akun Anda telah berhasil!',
        modalOpen: true
      })
    }
  }

  render() {
    return (
      <div>
        <MyMenu>
          <Container className="form-container">
            <Header as='h2'>Registrasi Penjual</Header>
            <Form className='form-register-merchants' onSubmit={this.handleSubmit}>
              <Form.Field>
                <label>Username</label>
                <Form.Input name='username' type='text' placeholder='Username' onChange={this.handleChange} />
              </Form.Field>
              <Form.Field>
                <label>Nama Toko</label>
                <Form.Input name='store_name' type='text' placeholder='Nama Toko' onChange={this.handleChange} />
              </Form.Field>
              <Form.Field>
                <label>Email</label>
                <Form.Input name='email' type='email' placeholder='Email' onChange={this.handleChange} />
              </Form.Field>
              <Form.Field>
                <label>Kata Sandi</label>
                <Form.Input name='password' type='password' placeholder='Kata Sandi' onChange={this.handleChange} />
              </Form.Field>
              <Form.Field>
                <label>Nomor telepon</label>
                <Form.Input name='phone_number' type='text' placeholder='Nomor Telepon' onChange={this.handleChange} />
              </Form.Field>
              <Form.Field>
                <label>No. KTP</label>
                <Form.Input name='identity_number' type='text' minLength="16" placeholder='Minimum 16 karakter' onChange={this.handleChange} />
              </Form.Field>
              <Form.TextArea label='Alamat' name='address' type='text' placeholder='Alamat' onChange={this.handleChange} />
              <Form.Field>
                <Checkbox label='Saya setuju dengan persyaratan dan ketentuan galonku.com' />
              </Form.Field>

              <Modal
                trigger={<Button>Registrasi</Button>}
                open={this.state.modalOpen}
                onClose={this.handleClose}
                basic
                size='small'
              >
                <Header icon='browser' content='Konfirmasi Registrasi' />
                <Modal.Content>
                  <h3>{this.state.message}</h3>
                </Modal.Content>
                <Modal.Actions>
                  <Button onClick={this.handleClose} inverted>
                    <Icon name='checkmark' /> OK
                  </Button>
                </Modal.Actions>
              </Modal>

            </Form>
          </Container>
        </MyMenu>
        <Footer />
      </div>
    )
  }
}