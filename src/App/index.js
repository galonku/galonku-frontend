import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from '../Pages/Home'
import LoginMerchants from '../Pages/Login/Merchants'
import LoginUsers from '../Pages/Login/Users'
import RegisterMerchants from '../Pages/Register/Merchants'
import RegisterUsers from '../Pages/Register/Users'
import TransactionUser from '../Pages/Transaction/Users/Initial'
import ProcessTransactionUsers from '../Pages/Transaction/Users/Process'
import SuccessTransactionUsers from '../Pages/Transaction/Users/Success'
import TransactionMerchant from '../Pages/Transaction/Merchant/Close'
import OpenOrderMerchant from '../Pages/Transaction/Merchant/Open'

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
            <Route path="/merchants/open" component={OpenOrderMerchant} />
            <Route path="/merchants/close" component={TransactionMerchant} />

            <Route path="/users/transaction/process" component={ProcessTransactionUsers} />
            <Route path="/users/transaction/success" component={SuccessTransactionUsers} />
            <Route path="/users/register" component={RegisterUsers} />
            <Route path="/users/login" component={LoginUsers} />
            <Route path="/users/transaction" component={TransactionUser} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
