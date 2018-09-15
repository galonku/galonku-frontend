import React, { Component } from 'react'
import { Grid, Header, Segment, Button, Container, Form } from 'semantic-ui-react'

import createFeedback from '../../function/CreateFeedback'

export default class Contact extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      email: '',
      phone_number: '',
      comments: ''
    }
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSubmit = () => {
    const feedback = {
      name: this.state.name,
      email: this.state.email,
      phone_number: this.state.phone_number,
      comments: this.state.comments
    }

    createFeedback(feedback)
  }

  render() {
    return (
      <div id="contact">
        <Segment inverted vertical style={{ padding: '5em 0em' }}>
          <Container>
            <Grid divided inverted stackable verticalAlign='top' >
              <Grid.Row>
                <Grid.Column width={19} textAlign="left">
                  <Header as='h3' inverted>
                    Kritik dan saran
                  </Header>
                  <Form onSubmit={this.handleSubmit}>
                    <Form.Field>
                      <input name="name" placeholder='Nama' onChange={this.handleChange} />
                    </Form.Field>
                    <Form.Field>
                      <input name="email" placeholder='Email' onChange={this.handleChange} />
                    </Form.Field>
                    <Form.Field>
                      <input name="phone_number" placeholder='Nomor Telepon' onChange={this.handleChange} />
                    </Form.Field>
                    <Form.TextArea name='comments' placeholder='Kritik dan saran' onChange={this.handleChange} />
                    <Button type='submit'>Kirim</Button>
                  </Form>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </Segment>
      </div>)
  }
}
