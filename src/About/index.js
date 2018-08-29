import React from 'react'
import { Grid, Divider, Header } from 'semantic-ui-react'

const About = () => (
  <div>
    <Header as='h1'>About us</Header>
    <Divider />
    <Grid columns={1}>
      <Grid.Column>
        <Header as='h4'>
        Galonku.Com adalah sebuah platform yang menghubungkan antara pembeli dan penjual galon. Dengan aplikasi ini, diharapkan setiap 
        orang yang membutuhkan galon tidak perlu repot untuk membeli galon dengan membawa ke depot galon setempat, juga penjual galon
        dapat meningkatkan keuntungan dalam penjualan galon.
        </Header>
      </Grid.Column>
    </Grid>
  </div>
)

export default About