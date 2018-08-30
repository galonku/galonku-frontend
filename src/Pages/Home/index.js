import React, { Component } from 'react'

import MyMenu from '../../Menu'
import MenuLogin from '../../MenuLogin'
import Landing from '../../Landing'
import About from '../../About'
import Review from '../../Review'
import Footer from '../../Footer'



import { getLocalstorage } from '../../function/Localstorage'

export default class Home extends Component {
  render() {
    const data = getLocalstorage()

    let menu = (
      <MyMenu >
        <Landing />
        <Review />
        <About />
        <Footer />
      </MyMenu >
    )

    if (data && data.token) {
      menu = (
        <MenuLogin>
          <Landing />
          <Review />
          <About />
          <Footer />
        </MenuLogin>
      )
    }

    return menu
  }
}