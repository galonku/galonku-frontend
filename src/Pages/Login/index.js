import React from 'react'
import { Button, Form } from 'semantic-ui-react'

import './index.css'

const LoginForm = () => (
  <Form className='form-login'>
    <Form.Field className='form-field'>
      <label>Username</label>
      <input placeholder='Username' />
    </Form.Field>
    <Form.Field className='form-field'>
      <label>Password</label>
      <input placeholder='Password' />
    </Form.Field>
    <Button type='submit'>Login</Button>
  </Form>
)

export default LoginForm