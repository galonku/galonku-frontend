import React, { Component } from 'react'

import MyMenu from '../../Menu'
import Landing from '../../Landing'
import About from '../../About'
import Review from '../../Review'


// import './index.css'

export default class Home extends Component {
  render() {
    return (
      <MyMenu>
        <Landing />
        <Review />
        <About />
      </MyMenu>
    )
  }
}