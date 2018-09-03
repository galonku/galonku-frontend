import React from 'react'
import { Grid, Divider, Header, Segment, Button, Container, List } from 'semantic-ui-react'

const Footer = () => (
  
    <Segment inverted vertical style={{ padding: '5em  0em' }} verticalAlign='bottom'>
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
          <Grid.Column width={8} textAlign='left'>
              <Header as='h4' inverted>
                Hubungi Kami
              </Header>
              <p>
                Email: Andromeda.org1@gmail.com
              </p>
            </Grid.Column>
            <Grid.Column width={6} verticalAlign='bottom' textAlign='left'>
              Copyright AndromedaOrg @ 2018
              
            </Grid.Column>

          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  
)

export default Footer