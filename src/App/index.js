import React, { Component } from 'react'
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Menu from '../Menu'

import './index.css'

class App extends Component {
  render() {
    return (
      // <Router>
      <div className="App">
        <Menu />

        {/* <Switch> */}
        {/* <Route exact path="/" component={Home} />
            <Route path="/merchants/register" component={Signup} />
            <Route path="/users/register" component={Signin} /> */}
        {/* </Switch> */}
      </div>
      // {/* </Router> */ }
    )
  }
}

export default App
