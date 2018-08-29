import React, { Component } from 'react'
import { Button, Form } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

import MenuLogin from '../../../../MenuLogin'

export default class InitialUser extends Component {
  render() {
    return (
      <MenuLogin>
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
      </MenuLogin>
    )
  }
}
