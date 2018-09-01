import React from 'react'
import { Grid, Header, Segment, Button, Container, Form } from 'semantic-ui-react'

const Contact = () => (
  <div>
    <Segment inverted vertical style={{ padding: '5em 0em' }}>
      <Container>
        <Grid divided inverted stackable verticalAlign='top' >
          <Grid.Row>
            <Grid.Column width={3}>
              <Header inverted as='h3' content='Hubungi Kami' />
              <p>Email: andromeda.org1@gmail.com</p>
            </Grid.Column>
            <Grid.Column width={11}>
              <Header as='h3' inverted>
                Saran dan Masukan
              </Header>
              <Form>
                <Form.Field>
                  <input placeholder='Nama' />
                </Form.Field>
                <Form.Field>
                  <input placeholder='Email' />
                </Form.Field>
                <Form.Field>
                  <input placeholder='Nomor Telepon' />
                </Form.Field>
                <Form.TextArea placeholder='Komentar' />
                <Button type='submit'>Kirim</Button>
              </Form>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  </div>
)

export default Contact