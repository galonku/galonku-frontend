import React, { Component } from 'react'
import { Button, Header, Menu, Segment, Sidebar, Divider, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import './merchant.css'

import MyNavigation from '../../../../Navigationbar'

// import './index.css

export default class MerchantOpen extends Component {
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
              <Header as='h3' icon textAlign='center'>
                <Icon name='users' circular />
                <Header.Content>Nama Penjual</Header.Content>
              </Header>
              <Link to='/merchants/close'>
                <Button color='green' animated='vertical' className='open-close-order'>
                  <Button.Content hidden>Toko Tutup? Klik Disini</Button.Content>
                  <Button.Content visible>
                    Status Toko: Buka
                  </Button.Content>
                </Button>
              </Link>
              <Divider />
              <Header as='h2' className='order-status'>Status Pesanan</Header> <Header className="close-alert" color='grey'>
                Menunggu Pesanan...
              </Header>
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div >
    )
  }
}
