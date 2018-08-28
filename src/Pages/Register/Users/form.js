import React from 'react'
import { Container, Button, Form, Checkbox } from 'semantic-ui-react'

import './index.css'

const RegisterUsers = () => (
  <div className=''>
    <label className='daftar-users'>Registrasi Pembeli</label>
    <Container>
      <Form className='form-register-users'>
        <Form.Field>
          <label>Username</label>
          <Form.Input placeholder='Username' />
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
          <label>Nama Lengkap</label>
          <Form.Input type='password' placeholder='Kata Sandi' />
        </Form.Field>
        <Form.Field>
          <label>Nomor telepon</label>
          <Form.Input type='password' placeholder='Kata Sandi' />
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

export default RegisterUsers