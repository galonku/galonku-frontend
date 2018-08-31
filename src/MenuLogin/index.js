import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button, Menu, Segment, Sidebar } from 'semantic-ui-react'

import MyNavigation from '../Navigationbar'
import logout from '../function/Logout'

export default class MenuLogin extends Component {
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
            className="button-menu"
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
            width="thin"
          >
            <Link to="/">
              <Menu.Item>Beranda</Menu.Item>
            </Link>
            <Link to="/about">
              <Menu.Item>Tentang kami</Menu.Item>
            </Link>
            <Link to="/contact">
              <Menu.Item>Hubungi kami</Menu.Item>
            </Link>
            <Link to="/">
              <Menu.Item>
                <span onClick={logout}>Keluar</span>
              </Menu.Item>
            </Link>
          </Sidebar>
          <Sidebar.Pusher>{this.props.children}</Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    )
  }
}
