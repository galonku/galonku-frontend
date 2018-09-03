import React, { Component } from 'react'

import MyMenu from '../../Menu'
import MenuLogin from '../../MenuLogin'
import Landing from '../../Landing'
import About from '../About'
import Review from '../../Review'
import Footer from '../Footer'
import Feedback from '../Feedback'

import { getLocalstorage } from '../../function/Localstorage'

export default class Home extends Component {
  render() {
    const data = getLocalstorage('Account')

    let menu = (
      <MyMenu >
        <Landing />
        <Review />
        <About />
        <Feedback />
        <Footer />
      </MyMenu >
    )

    if (data && data.token) {
      menu = (
        <MenuLogin>
          <Landing />
          <Review />
          <About />
          <Feedback />
          <Footer />
        </MenuLogin>
      )
    }

    return menu
  }
}