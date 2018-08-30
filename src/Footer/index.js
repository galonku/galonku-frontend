import React from 'react'
import { Grid, Divider, Header, Segment, Image, Button, Container, List } from 'semantic-ui-react'
import logo from '../images/logo.png';

const Footer = () => (
  <div>


<Segment inverted vertical style={{ padding: '5em 0em' }}>
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={3}>
              <Header inverted as='h3' content='Hubungi Kami' />
              <p>Email: andromeda.org1@gmail.com</p>
            </Grid.Column>
            <Grid.Column width={7}>
              <Header as='h3' inverted>
                Saran dan Masukan
              </Header>

            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>

  </div>
)

export default Footer