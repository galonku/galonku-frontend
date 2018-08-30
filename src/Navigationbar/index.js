import React from 'react'
import { Link } from 'react-router-dom'
import { Grid, Container, Image } from 'semantic-ui-react'

import logo from '../images/logo.png'

import './index.css'

const MyNavigation = ({ children }) => (
  <div className="navigation">
    <Grid columns={3}>
      <Grid.Column>
        <div className='wrapper-menu'>
          {children}
        </div>
      </Grid.Column>
      <Grid.Column>
        <div className='wrapper-logo'>
          <Link to='/'>
            <Image src={logo} size='small' className="logo" />
          </Link>
        </div>
      </Grid.Column>
    </Grid>
  </div>
)

export default MyNavigation

