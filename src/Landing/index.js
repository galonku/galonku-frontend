import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button, Header } from 'semantic-ui-react'
import Typing from 'react-typing-animation';
import { Parallax } from 'react-scroll-parallax';

import './index.css'

import { getLocalstorage } from '../function/Localstorage'
import verifyToken from '../function/VerifyToken'

class Landing extends Component {
  state = {
    result: ''
  }

  async componentDidMount() {
    const account = await getLocalstorage('Account')
    const result = account ? await verifyToken(account.role, account.token) : ''

    this.setState(
      {
        result
        
        
      }
    )
  }

  render() {
    return (
  <div className='landing'>        
  <div className='blue-background'>
  <Parallax
      className="custom-class"
      offsetYMax={200}
      offsetYMin={-200}
      slowerScrollRate
      tag="figure"
  >
    <Header as='h1'>
      <div className='tagline'>
      <Typing speed={45}>          
        <span>Pesan dan Jual Galon Lebih Mudah</span>
        <Typing.Backspace count={32} delay={2000} />
        <span>Beli Galon tanpa <u>Tunggu lama</u></span>
      <Typing.Backspace count={11} delay={2000}/>
      <span><u>Capek Angkat Galon</u></span>
      <Typing.Backspace count={38} delay={4000}/>
      <span>Jualan Galon dapat Customer <u>Lebih Banyak</u></span>
      <Typing.Backspace count={51} delay={2000}/>
      <span>Ayo <u>Mulai Coba Galonku</u> Sekarang</span>
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
  </Parallax>
  </div>
</div>
  
    )
  }
}

export default Landing