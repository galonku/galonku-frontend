import React, { Component } from 'react'
import { Button, Form, Checkbox } from 'semantic-ui-react'
import { Redirect } from 'react-router-dom'

import MenuLogin from '../../../../MenuLogin'
import Footer from '../../../Footer'
import MerchantList from '../MerchantList'
import { getLocalstorage } from '../../../../function/Localstorage'
import getUser from '../../../../function/GetUsers'
import searchMerchants from '../../../../function/SearchMerchant'
import createOrder from '../../../../function/CreateOrders'

export default class InitialUser extends Component {
  constructor(props) {
    super(props)

    this.state = {
      CheckboxAddress: false,
      CheckboxPhoneNumber: false,
      doneOrder: false,
      idmerchants: '',
      store_name: '',
      address: '',
      phone_number: '',
      price: '',
      quantities: '',
      notes: '',
      status: 'pending'
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
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = async (event) => {
    event.preventDefault()

    const data = getLocalstorage()
    const token = data.token

    const order = {
      iduser: data.id,
      idmerchants: this.state.idmerchants,
      merchant: this.state.store_name,
      quantity: this.state.quantities,
      phone_number: this.state.phone_number,
      user_address: this.state.address,
      user_notes: this.state.notes,
      status: this.state.status
    }
    await createOrder(order, token)
    this.setState({
      doneOrder: true
    })
  }

  merchantSelected = async (value) => {
    const merchants = await searchMerchants(`/search?q=${value}`)

    this.setState({
      store_name: value,
      price: merchants.data.merchant[0].price,
      idmerchants: merchants.data.merchant[0].id
    })
  }

  render() {
    let view = (<Redirect to="/users/transaction/process" />)

    if (!this.state.doneOrder) {
      const total_price = this.state.price * this.state.quantities

      view = (
        <MenuLogin>
          <Form onSubmit={this.handleSubmit}>
            <Form.Field>
              <label>Pilih penjual</label>
              <MerchantList merchantSelected={this.merchantSelected} />
            </Form.Field>
            <Form.Field>
              <label>Pilih lokasi antar</label>
              <input type='text' name='address' placeholder='Pilih lokasi antar' value={this.state.address} onChange={this.handleChange} />
              <Checkbox label='Antar ke alamat saya' onChange={this.handleChangeAddress} />
            </Form.Field>
            <Form.Field>
              <label>Masukkan nomor telepon</label>
              <input type='text' name='phone_number' placeholder='Masukkan nomor telepon' value={this.state.phone_number} onChange={this.handleChange} />
              <Checkbox label='Gunakan nomor telepon saya' onChange={this.handleChangePhoneNumber} />
            </Form.Field>
            <Form.Field>
              <label>Jumlah air galon</label>
              <input type='number' min='1' name='quantities' placeholder='Jumlah air galon' value={this.state.quantities} onChange={this.handleChange} />
            </Form.Field>
            <Form.Field>
              <label>Catatan</label>
              <input type='text' name='notes' placeholder='catatan' value={this.state.notes} onChange={this.handleChange} />
            </Form.Field>
            <Form.Field>
              <label>Total harga:</label>
              <label>Rp. {total_price}</label>
            </Form.Field>
            <Button type='submit'>Order</Button>
          </Form>
          <Footer />
        </MenuLogin>
      )
    }
    return view
  }
}