import React from 'react'
import { Container, Button, Form, Checkbox, Header, Modal, Icon } from 'semantic-ui-react'

import Register from '../../../function/Register'
import MyMenu from '../../../Menu'
import Footer from '../../Footer'

import './index.css'

export default class RegisterUser extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      email: '',
      password: '',
      fullname: '',
      phone_number: '',
      address: '',
      modalOpen: false,
      message: ''
    }
  }

  handleClose = () => this.setState({ modalOpen: false })

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSubmit = async (event) => {
    event.preventDefault()

    const URL = 'users/register'
    const data = {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
      fullname: this.state.fullname,
      phone_number: this.state.phone_number,
      address: this.state.address
    }

    // let response = ''

    const response = await Register(URL, data)
    // .then(result => {
    //   response = result
    // })
    // .catch(err => {
    //   response = err
    // })

    await this.setState({
      message: response.data.message,
      modalOpen: true
    })
  }

  render() {
    return (
      <MyMenu>
        <Container>
          <Header as='h2'>Registrasi Pembeli</Header>
          <Form className='form-register-users' onSubmit={this.handleSubmit}>
            <Form.Field>
              <label>Username</label>
              <Form.Input name='username' type='text' placeholder='Username' onChange={this.handleChange} />
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
              <label>Nama Lengkap</label>
              <Form.Input name='fullname' type='text' placeholder='Nama Lengkap' onChange={this.handleChange} />
            </Form.Field>
            <Form.Field>
              <label>Nomor telepon</label>
              <Form.Input name='phone_number' type='number' placeholder='Nomor telepon' onChange={this.handleChange} />
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
        <Footer />
      </MyMenu>
    )
  }
}