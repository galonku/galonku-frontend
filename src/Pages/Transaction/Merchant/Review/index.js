import React, { Component } from 'react'
import { Card, Grid, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

import { getLocalstorage } from '../../../../function/Localstorage'
import getReviews from '../../../../function/GetReview'
import MenuLogin from '../../../../MenuLogin'

import './index.css'

export default class MerchantReview extends Component {
  constructor(props) {
    super(props)

    this.state = {
      comments: '',
      username: ''
    }
  }

  componentDidMount = async () => {
    const account = await getLocalstorage('Account')
    const order = await getLocalstorage('Order')

    const response = await getReviews(order.id, account.token)
    const review = response.data.review[0]

    this.setState({
      username: review.username,
      comments: review.comments
    })

  }

  render() {
    return (
      <MenuLogin>
        <div className='container'>
          <Card className='box'>
            <Card.Content>
              <Card.Header>Penilaian Pembeli</Card.Header>
              <Card.Description className='information'>
                <Grid>
                  <Grid.Row>
                    Nama pemesan: {this.state.username}
                  </Grid.Row>
                  <Grid.Row>
                    Penilaian: {this.state.comments}
                  </Grid.Row>
                </Grid>
              </Card.Description>
            </Card.Content>

            <Card.Content extra>
              <Grid>
                <Grid.Column floated='left' width={5} className='button-return'>
                  <Link to='/merchants/order-details'>
                    <Button>Kembali</Button>
                  </Link>
                </Grid.Column>
              </Grid>
            </Card.Content>
          </Card >
        </div>
      </MenuLogin >
    )
  }
}