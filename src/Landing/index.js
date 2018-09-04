import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Header } from 'semantic-ui-react'
import Typing from 'react-typing-animation';

import './index.css'

const Landing = () => (
  
  <div className='landing'>
    <div className='blue-background'>
      <Header as='h1'>
        <div className='tagline'>
        <Typing>
          
          Pesan dan Jual Galon Lebih Mudah
          <Typing.Backspace count={50} />
          Beli Galon Tanpa Takut Lama Datang 
          <Typing.Backspace count={20} />
          Capek Angkat-angkat
          </Typing>
        </div>
      
      </Header>

      <div className='button-landing'>
        <div className='the-button'>
          <Link to="/merchants/login" className="nav-link">
            <Button inverted size='big'>Mulai Jual</Button>
          </Link>
        </div>
        <div className='the-button'>
          <Link to="/users/login" className="nav-link">
            <Button inverted size='big'>Mulai Pesan</Button>
          </Link>
        </div>
      </div>
    </div>
  </div >
)

export default Landing