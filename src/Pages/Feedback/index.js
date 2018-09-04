import React from 'react'
import { Grid, Divider, Header, Segment, Button, Container, Form } from 'semantic-ui-react'

const Feedback = () => (
  <div>
    <Segment inverted vertical style={{ padding: '3em 0em 0em 0em' }}>
      <Container>
        <Grid divided inverted stackable verticalAlign='top' >
          <Grid.Row>
            <Grid.Column textAlign='left'>
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

export default Feedback