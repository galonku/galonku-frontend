import React from 'react'
import { Grid, Container, Image } from 'semantic-ui-react'

import logo from '../images/logo.png'

import './index.css'

const MyNavigation = ({ children }) => (
  <Container fluid className="navigation">
    <Grid columns={3}>
      <Grid.Column>
        {children}
      </Grid.Column>
      <Grid.Column>
        <Image src={logo} size='small' className="logo" />
      </Grid.Column>
    </Grid>
  </Container>
)

export default MyNavigation

