import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from '../Pages/Home'
import LoginMerchants from '../Pages/Login/Merchants'
import LoginUsers from '../Pages/Login/Users'
import RegisterMerchants from '../Pages/Register/Merchants'
import RegisterUsers from '../Pages/Register/Users'

import TransactionUser from '../Pages/Transaction/Users/index.js'
import ProcessTransactionUsers from '../Pages/Transaction/Users/Process'
import SuccessTransactionUsers from '../Pages/Transaction/Users/Success'


import './index.css'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">

          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/merchants/register" component={RegisterMerchants} />
            <Route path="/merchants/login" component={LoginMerchants} />
            <Route path="/users/register" component={RegisterUsers} />
            <Route path="/users/login" component={LoginUsers} />
            <Route path="/users/transaction" component={TransactionUser} />
            <Route path="/users/transaction/process" component={ProcessTransactionUsers} />
            <Route path="/users/transaction/success" component={SuccessTransactionUsers} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
