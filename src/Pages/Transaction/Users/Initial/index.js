import React, { Component } from 'react'
import { Button, Form, Checkbox } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

import MenuLogin from '../../../../MenuLogin'
import SelectMerchant from '../SelectMerchant'
import { getLocalstorage } from '../../../../function/Localstorage'
import getUser from '../../../../function/GetUsers'

export default class InitialUser extends Component {
  constructor(props) {
    super(props)

    this.state = {
      CheckboxAddress: false,
      CheckboxPhoneNumber: false,
      address: '',
      phone_number: ''
    }
  }

  handleChangeAddress = async () => {
    const data = getLocalstorage()
    const user = await getUser(`/search?q=${data.username}`, data.token)

    this.setState(prevState => ({
      CheckboxAddress: !prevState.CheckboxAddress
    }))

    if (this.state.CheckboxAddress) {
      this.setState({
        address: user[0].address
      })
    } else {
      this.setState({
        address: ''
      })
    }
  }

  handleChangePhoneNumber = async () => {
    const data = getLocalstorage()
    const user = await getUser(`/search?q=${data.username}`, data.token)

    this.setState(prevState => ({
      CheckboxPhoneNumber: !prevState.CheckboxPhoneNumber
    }))

    if (this.state.CheckboxPhoneNumber) {
      this.setState({
        phone_number: user[0].phone_number
      })
    } else {
      this.setState({
        phone_number: ''
      })
    }
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  render() {
    return (
      <MenuLogin>
        <Form>
          <Form.Field>
            <label>Pilih penjual</label>
            <SelectMerchant />
          </Form.Field>
          <Form.Field>
            <label>Pilih lokasi antar</label>
            <input name="address" placeholder='Pilih lokasi antar' value={this.state.address} onChange={this.handleChange} />
            <Checkbox label='Antar ke alamat saya' onChange={this.handleChangeAddress} />
          </Form.Field>
          <Form.Field>
            <label>Masukkan nomor telepon</label>
            <input name="phone_number" placeholder='Masukkan nomor telepon' value={this.state.phone_number} onChange={this.handleChange} />
            <Checkbox label='Gunakan nomor telepon saya' onChange={this.handleChangePhoneNumber} />
          </Form.Field>
          <Form.Field>
            <label>Jumlah air galon</label>
            <input placeholder='Jumlah air galon' />
          </Form.Field>
          <Link to='/users/transaction/process'>
            <Button type='submit'>Order</Button>
          </Link>
        </Form>
      </MenuLogin>
    )
  }
}
