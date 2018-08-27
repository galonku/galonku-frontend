import React from 'react'
import { Grid, Button } from 'semantic-ui-react'

import './index.css'

const Landing = () => (
  <div className='landing'>
    <Grid columns={3}>
      <Grid.Row>
        <Grid.Column>
        </Grid.Column>
        <Grid.Column>
          <p>Pesan dan jual galon dengan lebih mudah</p>
          <div className='button-landing'>
            <Button>Mulai jual</Button>
            <Button>Mulai pesan</Button>
          </div>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </div>
)

export default Landing