import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Header } from 'semantic-ui-react'

import './index.css'

const Landing = () => (
  <div className='landing'>
    <Header className='tagline' as='h1'>Pesan dan jual galon dengan lebih mudah</Header>
    <div className='button-landing'>
      <Link to="/merchants/login" className="nav-link">
        <Button>Mulai jual</Button>
      </Link>
      <Link to="/users/login" className="nav-link">
        <Button>Mulai pesan</Button>
      </Link>
    </div>
  </div>
)

export default Landing