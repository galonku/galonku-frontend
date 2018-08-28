import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from '../Pages/Home'
import About from '../Pages/About'
import LoginMerchants from '../Pages/Login/Merchants'
import LoginUsers from '../Pages/Login/Users'
import RegisterMerchants from '../Pages/Register/Merchants'
import RegisterUsers from '../Pages/Register/Users'

import './index.css'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">

          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route path="/merchants/register" component={RegisterMerchants} />
            <Route path="/users/register" component={RegisterUsers} />
            <Route path="/merchants/login" component={LoginMerchants} />
            <Route path="/users/login" component={LoginUsers} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
