import React, { Component } from 'react'
import { Button, Card, Grid } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

import MenuLogin from '../../../../MenuLogin'
import { getLocalstorage } from '../../../../function/Localstorage'
import getOrders from '../../../../function/GetOrders'
import MerchantButton from './Button'

import './index.css'

export default class OrderDetail extends Component {
  constructor(props) {
    super(props)

    this.state = {
      fullname: '',
      quantities: '',
      address: '',
      phone_number: '',
      notes: '',
      total_price: '',
      status: ''
    }
  }

  updateParentStatus = ( status ) => {
    this.setState({
      status
    })
  }

  componentDidMount = async () => {
    const data = await getLocalstorage('Account')
    const storage = await getLocalstorage('Order')

    const response = await getOrders(`/orders/order/${storage.id}`, data.token)
    const order = response.data

    this.setState({
      fullname: order.fullname,
      quantities: order.quantities,
      address: order.address,
      phone_number: order.phone_number,
      notes: order.notes,
      total_price: order.Total,
      status: order.status,
    })
  }

  render() {
    return (
      <MenuLogin>
        <div className='container'>
          <Card className='box'>
            <Card.Content>
              <Card.Header>Informasi pesanan</Card.Header>
              <Card.Description className='information'>
                <Grid>
                  <Grid.Row>
                    <Grid.Column width={8}>
                      Nama pemesan: {this.state.fullname}
                    </Grid.Column>
                    <Grid.Column width={8}>
                      Alamat pemesan: {this.state.address}
                    </Grid.Column>
                  </Grid.Row>

                  <Grid.Row>
                    <Grid.Column width={8}>
                      Jumlah galon: {this.state.quantities}
                    </Grid.Column>
                    <Grid.Column width={8}>
                      Nomor telepon pemesan: {this.state.phone_number}
                    </Grid.Column>
                  </Grid.Row>

                  <Grid.Row>
                    <Grid.Column width={8}>
                      Biaya total pesanan: Rp. {this.state.total_price}
                    </Grid.Column>
                    <Grid.Column width={8}>
                      Catatan: {this.state.notes}
                    </Grid.Column>
                  </Grid.Row>

                  <Grid.Row>
                    <Grid.Column width={16} className='status'>
                      Status: {this.state.status}
                    </Grid.Column>
                  </Grid.Row>
                </Grid>

              </Card.Description>
            </Card.Content>
            <Card.Content extra>

              <Grid>
                <Grid.Column floated='left' width={5} className='button-return'>
                  <Link to='/merchants/open'>
                    <Button>Kembali</Button>
                  </Link>
                </Grid.Column>
                <MerchantButton updateParentStatus={this.updateParentStatus}>
                  {this.state.status}
                </MerchantButton>
              </Grid>

            </Card.Content>
          </Card>
        </div>
      </MenuLogin >
    )
  }
}
