import React, { Component } from 'react'
import { List, Card, Grid, Button } from 'semantic-ui-react'

import getOrders from '../../../../function/GetOrders'
import { getLocalstorage } from '../../../../function/Localstorage'

export default class OrdersCompleted extends Component {
  constructor(props) {
    super(props)

    this.state = {
      orderList: [],
      store_name: '',
      notes: '',
      quantities: '',
      total_price: '',
      showDetails: false
    }
  }

  componentDidMount = async () => {
    const getOrderList = async () => {
      const account = getLocalstorage('Account')
      const orders = await getOrders('/orders', account.token)

      const orderList = orders.data.map(order => {
        return {
          id: order.idorder,
          store_name: order.store_name,
          quantities: order.quantities,
          status: order.status
        }
      })

      await this.setState({ orderList })
    }
    await getOrderList()
  }

  handleClick = async (id) => {
    const getOrder = async () => {
      const account = getLocalstorage('Account')
      const order = await getOrders(`/orders/order/${id}`, account.token)

      this.setState({
        showDetails: true,
        store_name: order.data.store_name,
        notes: order.data.notes,
        quantities: order.data.quantities,
        total_price: order.data.Total
      })
    }

    await getOrder()
  }

  handleReturn = () => {
    this.setState({
      showDetails: false
    })
  }

  render() {
    let view = (
      <List divided relaxed>
        {this.state.orderList.map((order, index) => {
          if (order.status === 'pesanan selesai') {
            return (
              <List.Item key={index}>
                <span onClick={() => this.handleClick(order.id)}>
                  <List.Icon name='tint' size='large' />
                  <List.Content>
                    <List.Header as='a'>Pemesanan sebanyak {order.quantities} galon dari {order.store_name}</List.Header>
                    <List.Description as='a'>Status: {order.status}</List.Description>
                  </List.Content>
                </span>
              </List.Item>)
          }
        })
        }
      </List >)

    if (this.state.showDetails) {
      view = (
        <div className='container'>
          <Card className='box'>
            <Card.Content>
              <Card.Header>Informasi pesanan</Card.Header>
              <Card.Description className='information'>
                <Grid>
                  <Grid.Row>
                    <Grid.Column width={8}>
                      Nama penjual: {this.state.store_name}
                    </Grid.Column>
                    <Grid.Column width={8}>
                      Catatan: {this.state.notes}
                    </Grid.Column>
                  </Grid.Row>

                  <Grid.Row>
                    <Grid.Column width={8}>
                      Jumlah galon: {this.state.quantities}
                    </Grid.Column>
                    <Grid.Column width={8}>
                      Biaya total pesanan: {this.state.total_price}
                    </Grid.Column>
                  </Grid.Row>

                </Grid>

              </Card.Description>
            </Card.Content>
            <Card.Content extra>

              <Grid>
                <Grid.Column floated='left' width={5} className='button-return'>
                  <Button onClick={this.handleReturn}>Kembali</Button>
                </Grid.Column>
              </Grid>

            </Card.Content>
          </Card>
        </div>
      )
    }

    return view
  }
}
