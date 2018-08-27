import React from 'react'
import { Grid, Button } from 'semantic-ui-react'

const Landing = () => (
  <Grid columns={3}>
    <Grid.Row>
      <Grid.Column>
      </Grid.Column>
      <Grid.Column>
        <p>Pesan dan jual galon dengan lebih mudah</p>
        <Button>Mulai jual</Button>
        <Button>Mulai pesan</Button>
      </Grid.Column>
    </Grid.Row>
  </Grid>
)

export default Landing