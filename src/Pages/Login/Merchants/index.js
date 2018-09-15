import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { Button, Form, Header } from 'semantic-ui-react'

import Login from '../../../function/Login'
import MyMenu from '../../../Menu'
import Footer from '../../Footer'
import { storeLocalstorage } from '../../../function/Localstorage'

import './index.css'

export default class LoginMerchant extends Component {
  constructor(props) {
    super(props)

    this.state = { loggedIn: false }
  }

  handleClick = () => {
    this.setState({ active: !this.state.active })
  }


  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSubmit = async (event) => {
    event.preventDefault()

    const URL = 'merchants/login'
    const data = {
      username: this.state.username,
      password: this.state.password
    }

    const response = await Login(URL, data)

    const merchantData = {
      role: 'merchants',
      id: response.data.id,
      token: response.data.token,
      store_name: response.data.mstore_name
    }

    storeLocalstorage('Account', merchantData)
    this.setState({ loggedIn: true })
  }

  render() {
    const { loggedIn } = this.state
    const { active } = this.state

    if (loggedIn) {
      return <Redirect to='/merchants/close' />
    }

    return (
      <MyMenu>
        <Form className='form-login' onSubmit={this.handleSubmit}>
          <Header as='h2'>Masuk sebagai penjual</Header>
          <Form.Field className='form-field'>
            <label>Username</label>
            <input type='text' name='username' placeholder='Username' onChange={this.handleChange} />
          </Form.Field>
          <Form.Field className='form-field'>
            <label>Password</label>
            <input type='password' name='password' placeholder='Password' onChange={this.handleChange} />
          </Form.Field>
          <Button type='submit' toggle loading={active} onClick={this.handleClick}>Masuk</Button>
        </Form>
        <Footer />
      </MyMenu>
    )
  }
}