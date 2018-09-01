import React from 'react'
import { Grid, Segment, Container } from 'semantic-ui-react'

import './index.css'

const Footer = () => (
  <Segment inverted vertical className='footer'>
    <Container>
      <Grid divided inverted stackable verticalAlign='top' >
        <Grid.Row>
          Copyright © - AndromedaOrg 2018
        </Grid.Row>
      </Grid>
    </Container>
  </Segment>
)

export default Footer