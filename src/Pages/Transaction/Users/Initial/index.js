import React, { Component } from 'react'
import { Button, Header, Menu, Segment, Sidebar, Form } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

import MyNavigation from '../../../../Navigationbar'

// import './index.css'

export default class InitialUser extends Component {
  state = { visible: false }

  handleButtonClick = () => this.setState({ visible: !this.state.visible })

  handleSidebarHide = () => this.setState({ visible: false })

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
                Home
              </Menu.Item>
            </Link>
            <Link to='/about'>
              <Menu.Item>
                About us
              </Menu.Item>
            </Link>
            <Link to='/contact'>
              <Menu.Item>
                Contact us
              </Menu.Item>
            </Link>
            <Link to=''>
              <Menu.Item>
                Log Out
              </Menu.Item>
            </Link>
          </Sidebar>

          <Sidebar.Pusher>
            <Segment basic>
              <Header as='h3'>
                <Form>
                  <Form.Field>
                    <label>Pilih Penjual</label>
                    <input placeholder='Pilih Penjual' />
                  </Form.Field>
                  <Form.Field>
                    <label>Pilih Lokasi Antar</label>
                    <input placeholder='Pilih Lokasi Antar' />
                  </Form.Field>
                  <Form.Field>
                    <label>Jumlah Air Galon</label>
                    <input placeholder='Jumlah Air Galon' />
                  </Form.Field>
                  <Link to='/users/transaction/process'>
                    <Button type='submit'>Order</Button>
                  </Link>
                </Form>
              </Header>
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
        <label className='price-tag'>Harga Total: </label>
      </div >
    )
  }
}
