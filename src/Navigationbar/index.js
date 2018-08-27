import React from 'react'
import { Grid, Container, Image } from 'semantic-ui-react'

import logo from '../images/logo.png'

import './index.css'

const MyNavigation = ({ children }) => (
  <Container fluid className="navigation">
    <Grid columns={3}>
      <Grid.Column>
        <div className='wrapper-menu'>
          {children}
        </div>
      </Grid.Column>
      <Grid.Column>
        <div className='wrapper-logo'>
          <Image src={logo} size='small' className="logo" />
        </div>
      </Grid.Column>
    </Grid>
  </Container>
)

export default MyNavigation

