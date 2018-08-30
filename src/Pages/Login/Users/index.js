import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { Button, Form, Header } from 'semantic-ui-react'

import Login from '../../../function/Login'
import MyMenu from '../../../Menu'
import Footer from '../../../Footer'

import './index.css'

export default class LoginUser extends Component {
  constructor(props) {
    super(props)

    this.state = { loggedIn: false }
  }

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
    this.setState({ loggedIn: true })
  }

  render() {
    const { loggedIn } = this.state

    if (loggedIn) {
      return <Redirect to='/users/transaction' />
    }

    return (
      
      <MyMenu>
        <Form className='form-login' onSubmit={this.handleSubmit}>
        <Header as ='h2'>Masuk sebagai pembeli</Header>
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
        <Footer/>
      </MyMenu >
      


    )
  }
}