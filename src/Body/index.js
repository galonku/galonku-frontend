import React, { Component } from 'react'

import Landing from '../Landing'
import About from '../About'

class Body extends Component {
  render() {
    return (
      <div className="Body">
        <Landing />
        <About />
      </div>
    )
  }
}

export default Body
