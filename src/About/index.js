import React from 'react'
import { Grid } from 'semantic-ui-react'

const About = () => (
  <div>
    <p>About us</p>

    <Grid columns={1} padded='vertically'>
      <Grid.Column>
        <p>We are </p>
      </Grid.Column>
    </Grid>
  </div>
)

export default About