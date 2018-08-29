import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

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
            <Route path="/users/register" component={RegisterUsers} />
            <Route path="/merchants/login" component={LoginMerchants} />
            <Route path="/users/login" component={LoginUsers} />

            <Route path="/transaction/users/process" component={ProcessTransactionUsers} />
            <Route path="/transaction/users/success" component={SuccessTransactionUsers} />
            <Route path="/users" component={TransactionUser} />

            
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
