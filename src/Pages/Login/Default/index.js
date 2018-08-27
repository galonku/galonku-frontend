import React, { Component } from 'react'
import { Button, Header, Menu, Segment, Sidebar } from 'semantic-ui-react'

import LoginForm from '../index'
import MyNavigation from '../../../Navigationbar'

// import './index.css'

export default class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
      visible: false,
      text: ''
    }
  }

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
            <Menu.Item as='a'>
              Home
            </Menu.Item>
            <Menu.Item as='a'>
              About us
            </Menu.Item>
            <Menu.Item as='a'>
              Contact us
            </Menu.Item>
          </Sidebar>

          <Sidebar.Pusher>
            <Segment basic>
              <Header as='h3'>
                <p>{this.state.text}</p>
                <LoginForm />
              </Header>
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    )
  }
}
