import React from 'react'
import { Grid, Header, Segment, Image } from 'semantic-ui-react'
import logo from '../../images/logo.png'

const About = () => (
  <div id="about">

    <Segment style={{ padding: '8em 0em' }} vertical>
      <Grid container stackable verticalAlign='middle'>
        <Grid.Row>
          <Grid.Column width={8}>
            <Header as='h3' style={{ fontSize: '2em' }}>
              Tentang Galonku
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              Galonku adalah sebuah platform yang menghubungkan antara pembeli dan penjual galon. Dengan aplikasi ini, diharapkan setiap
              orang yang membutuhkan galon tidak perlu repot untuk membeli galon dengan membawa ke depot galon setempat, juga penjual galon
              dapat meningkatkan keuntungan dalam penjualan galon.

            </p>
          </Grid.Column>
          <Grid.Column floated='left' width={6}>
            <Image size='large' src={logo} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>


  </div>
)

export default About