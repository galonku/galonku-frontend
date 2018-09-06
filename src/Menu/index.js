import React, { Component } from 'react'
import { Button, Menu, Segment, Sidebar } from 'semantic-ui-react'
import { HashLink as Link } from 'react-router-hash-link'

import MyNavigation from '../Navigationbar'

export default class MyMenu extends Component {
  constructor(props) {
    super(props)

    this.state = {
      visible: false
    }
  }

  handleButtonClick = () => this.setState({ visible: !this.state.visible })
  handleSidebarHide = () => this.setState({ visible: false })

  render() {
    const { visible } = this.state

    return (
      <div>
        <MyNavigation>
          <Button
            icon="bars"
            onClick={this.handleButtonClick}
            inverted
          />
        </MyNavigation>

        <Sidebar.Pushable as={Segment}>
          <Sidebar
            as={Menu}
            animation="overlay"
            icon="labeled"
            inverted
            onHide={this.handleSidebarHide}
            vertical
            visible={visible}
            width='thin'

          >
            <Link onClick={this.handleSidebarHide} to="/">
              <Menu.Item>
                Beranda
              </Menu.Item>
            </Link>
            <Link onClick={this.handleSidebarHide} to="/#about">
              <Menu.Item>
                Tentang kami
              </Menu.Item>
            </Link>
            <Link onClick={this.handleSidebarHide} to="/#contact">
              <Menu.Item>
                Hubungi kami
              </Menu.Item>
            </Link>
            <Link to="/merchants/register">
              <Menu.Item>
                Registrasi Penjual
              </Menu.Item>
            </Link>
            <Link to="/users/register">
              <Menu.Item>
                Registrasi Pembeli
              </Menu.Item>
            </Link>
          </Sidebar>

          <Sidebar.Pusher>
            {this.props.children}
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    )
  }
}