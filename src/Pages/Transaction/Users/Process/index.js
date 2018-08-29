import React, { Component } from 'react'
import { Button, Header, Form, Divider, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

import MenuLogin from '../../../../MenuLogin'

export default class ProcessedOrder extends Component {
  render() {
    return (
      <MenuLogin>
        <Link to='/users/transaction/success'>
          <Header as='h3' icon textAlign='center'>
            <Icon name='users' circular />
            <Header.Content>Diproses Oleh : </Header.Content>
          </Header>
        </Link>
        <Form>
          <Button color='red' type='submit'>Batal Pesanan</Button>
        </Form>
        <Divider />
        <label>Sedang Diproses Oleh Penjual </label>
      </MenuLogin >
    )
  }
}
