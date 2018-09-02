import React, { Component } from 'react'

import MyMenu from '../../Menu'
import MenuLogin from '../../MenuLogin'
import Landing from '../../Landing'
import About from '../About'
import Review from '../Review'
import Contact from '../Contact'
import Footer from '../Footer'

import { getLocalstorage } from '../../function/Localstorage'
import verifyToken from '../../function/VerifyToken'

export default class Home extends Component {
  render() {
    const account = getLocalstorage('Account')

    let menu = (
      <MyMenu >
        <Landing />
        <Review />
        <About />
        <Contact />
        <Footer />
      </MyMenu >
    )

    if (account) {
      const run = async () => {
        const result = await verifyToken(account.role, account.token)

        if (result === 'Token is valid!') {
          menu = (
            <MenuLogin>
              <Landing />
              <Review />
              <About />
              <Contact />
              <Footer />
            </MenuLogin>
          )
        }
      }
      run()
    }

    return menu
  }
}