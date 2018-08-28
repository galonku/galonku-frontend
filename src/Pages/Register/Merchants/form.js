import React from 'react'
import { Container, Button, Form, Checkbox } from 'semantic-ui-react'

import './index.css'

const RegisterMerchants = () => (
  <div className=''>
    <label>Registrasi Penjual</label>
    <Container>
      <Form className='form-register-merchants'>
        <Form.Field>
          <label>Username</label>
          <Form.Input placeholder='Username' />
        </Form.Field>
        <Form.Field>
          <label>Nama Toko</label>
          <Form.Input placeholder='Nama Toko' />
        </Form.Field>
        <Form.Field>
          <label>Email</label>
          <Form.Input placeholder='Email' />
        </Form.Field>
        <Form.Field>
          <label>Kata Sandi</label>
          <Form.Input type='password' placeholder='Kata Sandi' />
        </Form.Field>
        <Form.Field>
          <label>Nomor telepon</label>
          <Form.Input placeholder='Nomor Telepon' />
        </Form.Field>
        <Form.Field>
          <label>No. KTP</label>
          <Form.Input placeholder='No. KTP' />
        </Form.Field>
        <Form.TextArea label='Alamat' placeholder='Alamat' />
        <Form.Field>
          <Checkbox label='Saya setuju dengan persyaratan dan ketentuan galonku.com' />
        </Form.Field>
        <Button type='submit'>Registrasi</Button>
      </Form>
    </Container>
  </div>
)

export default RegisterMerchants 