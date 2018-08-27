import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from '../Pages/Home'
import MerchantsLogin from '../Pages/Login/Merchants'

import './index.css'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">

          <Switch>
            <Route exact path="/" component={Home} />
            {/* <Route path="/merchants/register" component={Signup} />
            <Route path="/users/register" component={Signin} /> */}
            <Route path="/merchants/login" component={MerchantsLogin} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
