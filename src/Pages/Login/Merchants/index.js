import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { Button, Header, Menu, Segment, Sidebar, Form } from 'semantic-ui-react'

// import LoginForm from '../index'
import MyNavigation from '../../../Navigationbar'
import Login from '../../../function/login'

// import './index.css'

export default class LoginMerchants extends Component {
  constructor(props) {
    super(props)

    this.state = {
      visible: false
    }
  }

  handleButtonClick = () => this.setState({ visible: !this.state.visible })
  handleSidebarHide = () => this.setState({ visible: false })

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSubmit = (event) => {
    const URL = 'merchants/login'
    const data = {
      username: this.state.username,
      password: this.state.password
    }

    event.preventDefault()
    Login(URL, data)
  }

  render() {
    const { visible } = this.state

    return (
      <div>
        <MyNavigation>
          <Button icon='bars' onClick={this.handleButtonClick} className='button-menu' />
        </MyNavigation>

        <Sidebar.Pushable as={Segment}>
          <Sidebar
            as={Menu}
            animation='overlay'
            icon='labeled'
            inverted
            onHide={this.handleSidebarHide}
            vertical
            visible={visible}
            width='thin'
          >
            <Link to='/'>
              <Menu.Item>
                Beranda
              </Menu.Item>
            </Link>
            <Link to='/about'>
              <Menu.Item>
                Tentang kami
              </Menu.Item>
            </Link>
            <Link to='/contact'>
              <Menu.Item>
                Hubungi kami
              </Menu.Item>
            </Link>
            <Link to='/merchants/register'>
              <Menu.Item>
                Registrasi penjual
              </Menu.Item>
            </Link>
            <Link to='users/register'>
              <Menu.Item>
                Registrasi pembeli
              </Menu.Item>
            </Link>
          </Sidebar>

          <Sidebar.Pusher>
            <Segment basic>
              <Header as='h3'>
                <p>Masuk sebagai penjual</p>
                <Form className='form-login' onSubmit={this.handleSubmit}>
                  <Form.Field className='form-field'>
                    <label>Username</label>
                    <input name='username' placeholder='Username' onChange={this.handleChange} />
                  </Form.Field>
                  <Form.Field className='form-field'>
                    <label>Password</label>
                    <input name='password' placeholder='Password' onChange={this.handleChange} />
                  </Form.Field>
                  <Button type='submit'>Login</Button>
                </Form>
              </Header>
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    )
  }
}