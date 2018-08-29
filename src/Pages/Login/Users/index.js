import React, { Component } from 'react'
import { Button, Form } from 'semantic-ui-react'

import Login from '../../../function/Login'
import MyMenu from '../../../Menu'

import './index.css'

export default class LoginUsers extends Component {

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSubmit = async (event) => {
    event.preventDefault()

    const URL = 'users/login'
    const data = {
      username: this.state.username,
      password: this.state.password
    }

    await Login(URL, data)
  }

  render() {
    return (
      <MyMenu>
        <p>Masuk sebagai pembeli</p>
        <Form className='form-login' onSubmit={this.handleSubmit}>
          <Form.Field className='form-field'>
            <label>Username</label>
            <input type='text' name='username' placeholder='Username' onChange={this.handleChange} />
          </Form.Field>
          <Form.Field className='form-field'>
            <label>Password</label>
            <input type='password' name='password' placeholder='Password' onChange={this.handleChange} />
          </Form.Field>
          <Button type='submit'>Login</Button>
        </Form>
      </MyMenu>
    )
  }
}