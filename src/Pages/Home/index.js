import React, { Component } from 'react'

import MyMenu from '../../Menu'
import MenuLogin from '../../MenuLogin'
import Landing from '../../Landing'
import About from '../About'
import Contact from '../Contact'
import Footer from '../Footer'

import { getLocalstorage } from '../../function/Localstorage'
import verifyToken from '../../function/VerifyToken'

class Home extends Component {
  state = {
    result: ''
  }

  async componentDidMount() {
    const account = await getLocalstorage('Account')
    const result = account ? await verifyToken(account.role, account.token) : ''

    this.setState({
      result
    })
  }

  render() {
    return (
      <div>
        {this.state.result === 'Token is valid!' ?
          (<MenuLogin>
            <Landing />
            <About />
            <Contact />
            <Footer />
          </MenuLogin >) : (<MyMenu>
            <Landing />
            <About />
            <Contact />
            <Footer />
          </MyMenu>)}
      </div>
    )
  }
}

export default Home