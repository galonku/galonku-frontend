import React, { Component } from 'react'

import Landing from '../Landing'
import About from '../About'
import Register from '../Register'

class Body extends Component {
  render() {
    return (
      <div className="Body">
        {/* <Landing />
        <About /> */}
        <Register />
      </div>
    )
  }
}

export default Body
