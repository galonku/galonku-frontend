import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Header } from 'semantic-ui-react'

import './index.css'

const Landing = () => (
  <div className='landing'>
    <div className='blue-background'>
    <Header as='h1'><div className='tagline'>Pesan dan Jual Galon Lebih Mudah</div></Header>
    
      <div className='button-landing'>
        <Link to="/merchants/login" className="nav-link">
          <div className='the-button'><Button inverted size='big'>Mulai Jual</Button></div>
        </Link>
        <Link to="/users/login" className="nav-link">
          <div className='the-button'><Button inverted size='big'>Mulai Pesan</Button></div>
        </Link>
      </div>
    </div>
  </div>
)

export default Landing