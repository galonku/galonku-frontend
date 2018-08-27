import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'semantic-ui-react'

import './index.css'

const Landing = () => (
  <div className='landing'>
    <p>Pesan dan jual galon dengan lebih mudah</p>
    <div className='button-landing'>
      <Button>
        <Link to="/merchants/login" className="nav-link">
          Mulai jual
        </Link>
      </Button>
      <Button>
        <Link to="/users/login" className="nav-link">
          Mulai pesan
        </Link>
      </Button>
    </div>
  </div>
)

export default Landing