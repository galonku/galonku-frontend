import React, { Component } from 'react'
import { Button, Header, Form, Divider, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

import MenuLogin from '../../../../MenuLogin'

export default class SuccessOrder extends Component {
  render() {
    return (
      <MenuLogin>
        <Header as='h3' icon textAlign='center'>
          <Icon name='users' circular center />
          <Header.Content>Terimakasih sudah memesan dari:  </Header.Content>
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
        <Link to='/users/transaction'>
          <Button color='green' type='submit'>Klik disini untuk membuat pesanan baru</Button>
        </Link>
      </MenuLogin>
    )
  }
}
