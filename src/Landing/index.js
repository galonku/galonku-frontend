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
        <Typing speed={45}>          
          Pesan dan Jual Galon Lebih Mudah
          <Typing.Backspace count={32} delay={2000} />
          Beli Galon tanpa <u>Tunggu lama</u>
        <Typing.Backspace count={11} delay={2000}/>
          <u>capek angkat galon</u>
        <Typing.Backspace count={38} delay={4000}/>
          Jualan Galon dapat Customer <u>lebih banyak</u>
        <Typing.Backspace count={51} delay={2000}/>
          Ayo <u>Mulai Coba Galonku</u> Sekarang
        <Typing.Reset count={3} delay={5000000} />
        </Typing>
        </div>
      </Header>

      <div className='button-landing'>
        <div className="button-divider">
          <Link to="/merchants/login" className="nav-link">
            <Button className='the-button' inverted size='big'>Mulai Jual</Button>
          </Link>
        </div>
        
        <div className="button-divider">
          <Link to="/users/login" className="nav-link">
            <Button className="the-button" inverted size='big'>Mulai Pesan</Button>
          </Link>
        </div>

      </div>
    </div>
  </div >
)

export default Landing