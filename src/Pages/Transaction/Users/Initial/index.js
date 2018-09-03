import React, { Component } from 'react'
import { Button, Form, Checkbox } from 'semantic-ui-react'
import { Redirect } from 'react-router-dom'

import MenuLogin from '../../../../MenuLogin'
import Footer from '../../../Footer'
import MerchantList from '../MerchantList'
import { getLocalstorage, storeLocalstorage } from '../../../../function/Localstorage'
import getUser from '../../../../function/GetUsers'
import searchMerchants from '../../../../function/SearchMerchant'
import createOrder from '../../../../function/CreateOrder'

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

  componentDidMount = async () => {
    const data = getLocalstorage('Account')
    const user = await getUser(`/search?q=${data.username}`, data.token)

    this.setState({
      address: user[0].address,
      phone_number: user[0].phone_number
    })
  }

  handleChangeAddress = async () => {
    await this.setState({
      CheckboxAddress: !this.state.CheckboxAddress
    })

    if (this.state.CheckboxAddress === false) {
      const data = getLocalstorage('Account')
      const user = await getUser(`/search?q=${data.username}`, data.token)

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
    await this.setState({
      CheckboxPhoneNumber: !this.state.CheckboxPhoneNumber
    })

    if (this.state.CheckboxPhoneNumber === false) {
      const data = getLocalstorage('Account')
      const user = await getUser(`/search?q=${data.username}`, data.token)

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

    const data = getLocalstorage('Account')
    const token = data.token

    const order = {
      iduser: data.id,
      idmerchants: this.state.idmerchants,
      merchant: this.state.store_name,
      quantities: this.state.quantities,
      phone_number: this.state.phone_number,
      user_address: this.state.address,
      user_notes: this.state.notes,
      status: this.state.status
    }

    const response = await createOrder(order, token)

    const orderData = {
      id: response.data.data.id,
      store_name: response.data.data.merchant,
      status: response.data.data.status
    }

    storeLocalstorage('Order', orderData)

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
    let view = (<Redirect to="/users/transaction/status" />)

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
              <Checkbox label='Gunakan alamat lain' onChange={this.handleChangeAddress} />
            </Form.Field>
            <Form.Field>
              <label>Masukkan nomor telepon</label>
              <input type='text' name='phone_number' placeholder='Masukkan nomor telepon' value={this.state.phone_number} onChange={this.handleChange} />
              <Checkbox label='Gunakan nomor telepon lain' onChange={this.handleChangePhoneNumber} />
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