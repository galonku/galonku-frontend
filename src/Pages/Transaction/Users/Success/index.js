// import React from 'react';
// import { Link } from 'react-router-dom';
// import { Button, Form, Header, Icon, Divider } from 'semantic-ui-react';
// import './userstransaction.css';

// const FormOrder = () => (
//   <div className='center'>
  
//     <Header as='h3' icon textAlign='center'>
//       <Icon name='users' circular />
//       <Header.Content>Terimakasih sudah memesan dari :  </Header.Content>
//     </Header>
//     <Form>

// Berikan penilaian kepada penjual
// <div>
//   <Icon name='star' />
//   <Icon name='star' />
//   <Icon name='star' />
//   <Icon name='star' />
//   <Icon name='star' />
// </div>
// </Form>
// <Divider />
// <Link to='/users'>
// <Button color='green' type='submit'>Klik Disini untuk membuat Pesanan baru</Button>
// </Link>

//   </div>

// )

// export default FormOrder;

import React, { Component } from 'react'
import { Button, Header, Menu, Segment, Sidebar, Form, Divider, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

import MyNavigation from '../../../../Navigationbar'
import About from '../../../../About'
import Review from '../../../../Review'

// import './index.css'

export default class FormOrder extends Component {
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
              <Header as='h3' icon textAlign='center'>

      <Icon name='users' circular center/>
      
      <Header.Content>Terimakasih sudah memesan dari :  </Header.Content>
    </Header>
    <Form>

              Berikan penilaian kepada penjual
              <div>
                <Icon name='star' />
                <Icon name='star' />
                <Icon name='star' />
                <Icon name='star' />
                <Icon name='star' />
              </div>
              </Form>
              <Divider />
              <Link to='/users'>
              <Button color='green' type='submit'>Klik Disini untuk membuat Pesanan baru</Button>
              </Link>

  
              </Header>
            </Segment>
            
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div >
    )
  }
}
